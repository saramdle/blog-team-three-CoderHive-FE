import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";

import useSWR, { Fetcher } from "swr";
import { PostAPI, GetPostData } from "@/api/postAPI";

import MultiSelectList from "@/components/common/OptionList/multiSelectList";
import SelectedCard from "@/components/common/selectedCard";
import NotFound from "@/components/common/notFound";
import PostCard from "@/components/common/postCard";
import Loading from "@/components/common/loading";
import ServerError from "@/components/common/serverError";

export default function Study() {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [showOnlyHiring, setShowOnlyHiring] = useState<boolean>(false);
  const router = useRouter();

  const tempMemberId = 3;
  const tempLoactionIds = [2, 3];
  const tempRegionsIds = [1, 2];
  const fetcher: Fetcher<GetPostData, string> = (url) => PostAPI.getPosts(url);
  const { data, error } = useSWR<GetPostData, Error>(
    `/posts?memberId=${tempMemberId}&postCategory=STUDY${
      selectedLocations ? `&regions=${tempLoactionIds.join(",")}` : ""
    }${selectedFields ? `&jobs=${tempRegionsIds.join(",")}` : ""}${
      showOnlyHiring ? "&postStatus=HIRING" : ""
    }`,
    fetcher
  );

  if (error) {
    return <ServerError />;
  }

  if (!data) {
    return <Loading />;
  }

  const onCreatePostClicked = () => {
    router.push("/createPost");
  };

  const renderSelectedLocations = selectedLocations.map((title, index) => {
    return (
      <SelectedCard
        key={index}
        title={title}
        selectedOptions={selectedLocations}
        setSelectedOption={setSelectedLocations}
      />
    );
  });

  const renderSelectedFields = selectedFields.map((title, index) => {
    return (
      <SelectedCard
        key={index}
        title={title}
        selectedOptions={selectedFields}
        setSelectedOption={setSelectedFields}
      />
    );
  });

  const renderArticles = data?.content.map((post) => {
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
                  options={지역_테스트_데이터}
                  selectedOptions={selectedLocations}
                  setSelectedOption={setSelectedLocations}
                />
                <MultiSelectList
                  title="분야"
                  options={분야_테스트_데이터}
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

let 지역_테스트_데이터 = [
  "서울특별시",
  "인천광역시",
  "대전광역시",
  "부산광역시",
];
let 분야_테스트_데이터 = ["UI/UX", "웹프론트엔드", "웹서버"];
