import Image from "next/image";
import { useRouter } from "next/router";

import useSWR from "swr";
import { MemberAPI, MemberData } from "@/api/memberAPI";

import ServerError from "@/components/common/serverError";
import Loading from "@/components/common/loading";
import MiniPostCard from "@/components/common/miniPostCard";

export default function Profile() {
  const tempId = 3;
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR<MemberData, Error>(
    router.isReady && MemberAPI.getMember(tempId, Number(id))
  );

  if (error) return <ServerError />;

  if (!data) return <Loading />;

  const renderStackList = data.skills.map((skill, index) => {
    return (
      <div
        key={index}
        className="mr-4 px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
      >
        {skill}
      </div>
    );
  });

  const renderInProgressPost = data.participatedPosts?.map((post) => {
    return (
      <MiniPostCard
        key={post.id}
        postId={post.id}
        status={post.postStatus}
        title={post.title}
        location={post.location}
        like={post.likeBoolean}
        likes={post.likes}
        imageUrl={post.thumbImageUrl}
      />
    );
  });

  const onSubmit = () => {};

  return (
    <div className="bg-white py-14 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto pb-8 max-w-4xl flex justify-center items-center border-b border-gray-200">
        <div className="relative w-44 h-44 max-sm:w-24 max-sm:h-24">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            {data.profileImageUrl ? (
              <Image
                src={data.profileImageUrl}
                alt="Image"
                fill
                sizes="100%, 100%"
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <svg
                className="h-full w-full text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm7 4v2a3 3 0 106 0V6a3 3 0 10-6 0zm11 9.14A15.93 15.93 0 0010 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
              </svg>
            )}
          </div>
        </div>
        <div className="ml-8 mt-4 flex flex-col justify-end max-sm:mt-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 max-sm:text-2xl">
            {data.nickname}
          </h2>
          <h3 className="mt-6 text-base font-semibold text-gray-700 max-sm:mt-2">
            {data.job.main}
          </h3>
          <h3 className="mt-2 text-sm font-normal text-gray-700 max-sm:mt-1">
            {data.level} / {data.career}
          </h3>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 border-b border-gray-200">
          <div className="sm:col-span-2">
            <h3 className="block text-base font-semibold leading-6 text-gray-900">
              기술 스택
            </h3>
            <div className="mt-4 flex">{renderStackList}</div>
          </div>

          <div className="mb-8 sm:col-span-2">
            <h3 className="block text-base font-semibold leading-6 text-gray-900">
              소개
            </h3>
            <p className="mt-4 text-sm">
              {data.introduction ? data.introduction : "내용이 없습니다."}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="block mt-8 text-base font-semibold leading-6 text-gray-900">
            진행중인 모임
          </h3>
          <div
            className={`mt-2 p-4 flex items-center gap-x-2 h-72 overflow-x-auto rounded-md bg-gray-100`}
          >
            {renderInProgressPost}
          </div>
        </div>
      </div>
    </div>
  );
}
