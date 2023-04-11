import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import useSWR from "swr";
import { InfoAPI, JobData, LocationData } from "@/api/infoAPI";
import { GetPostData, PostAPI } from "@/api/postAPI";

import MultiSelectList from "@/components/common/OptionList/multiSelectList";
import SelectedCard, {
  OptionType,
} from "@/components/common/OptionList/selectedCard";
import NotFound from "@/components/common/notFound";
import PostCard from "@/components/common/postCard";
import Loading from "@/components/common/loading";
import ServerError from "@/components/common/serverError";

export default function Study() {
  const [selectedLocations, setSelectedLocations] = useState<OptionType[]>([]);
  const [selectedFields, setSelectedFields] = useState<OptionType[]>([]);
  const [showOnlyHiring, setShowOnlyHiring] = useState<boolean>(false);
  const router = useRouter();

  const tempMemberId = 3;
  const postData = useSWR<GetPostData, Error>(
    PostAPI.getPostURL(
      tempMemberId,
      true,
      selectedLocations.map((data) => data.id),
      selectedFields.map((data) => data.id),
      showOnlyHiring
    )
  );
  const locationData = useSWR<LocationData, Error>(InfoAPI.getLocationURL);
  const jobData = useSWR<JobData, Error>(InfoAPI.getJobURL);
  jobData.data;

  if (postData.error || locationData.error || jobData.error) {
    return <ServerError />;
  }

  if (!postData.data || !locationData.data || !jobData.data) {
    return <Loading />;
  }

  const onCreatePostClicked = () => {
    router.push("/createPost");
  };

  const renderSelectedLocations = selectedLocations.map((option) => {
    return (
      <SelectedCard
        key={option.id}
        id={option.id}
        title={option.title}
        selectedOptions={selectedLocations}
        setSelectedOption={setSelectedLocations}
      />
    );
  });

  const renderSelectedFields = selectedFields.map((option) => {
    return (
      <SelectedCard
        key={option.id}
        id={option.id}
        title={option.title}
        selectedOptions={selectedFields}
        setSelectedOption={setSelectedFields}
      />
    );
  });

  const renderArticles = postData.data.content.map((post) => {
    return (
      <PostCard
        key={post.id}
        postId={post.id}
        status={post.postStatus}
        type={post.postCategory}
        title={post.title}
        location={post.location}
        skills={post.skills}
        like={post.memberLike}
        likes={post.likes}
        imageUrl={post.thumbImageUrl}
      />
    );
  });

  return (
    <>
      <Head>
        <title>CoderHive</title>
        <meta name="description" content="CoderHive : Find your co-coder!" />
      </Head>
      <div className="bg-white py-10 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              스터디
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              함께 공부하고 성장해갈 스터디를 찾아보세요
            </p>
            <div className="mt-8 flex max-sm:flex-col-reverse">
              <div className="flex gap-x-4">
                <MultiSelectList
                  title="지역"
                  options={locationData.data.locations.map((data) => {
                    return { id: data.id, title: data.region };
                  })}
                  selectedOptions={selectedLocations}
                  setSelectedOption={setSelectedLocations}
                />
                <MultiSelectList
                  title="분야"
                  options={jobData.data.jobs.flatMap((job) =>
                    job.details.map((subJob) => {
                      return { id: subJob.jobId, title: subJob.field };
                    })
                  )}
                  selectedOptions={selectedFields}
                  setSelectedOption={setSelectedFields}
                />
              </div>
              <div className="ml-8 flex items-center max-sm:ml-0 max-sm:mb-4">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="w-5 h-5 rounded"
                  checked={showOnlyHiring}
                  onChange={(e) => setShowOnlyHiring(e.target.checked)}
                />
                <label
                  htmlFor="checkbox"
                  className="ml-2 text-base font-medium text-gray-700"
                >
                  모집중
                </label>
              </div>
            </div>
            <div className="my-4 min-h-[2.4rem] flex flex-wrap">
              {renderSelectedLocations}
              {renderSelectedFields}
            </div>
          </div>
          <div className="flex flex-col pt-6 border-t border-gray-200 ">
            <button
              className="ml-auto px-6 py-2.5 text-sm font-semibold text-white rounded-md bg-indigo-600
                max-sm:ml-0 hover:bg-indigo-500 transition-all ease-in duration-100"
              onClick={onCreatePostClicked}
            >
              새 모임 생성
            </button>
            {renderArticles?.length === 0 ? (
              <NotFound />
            ) : (
              <div
                className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 mt-6
                  sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
              >
                {renderArticles}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
