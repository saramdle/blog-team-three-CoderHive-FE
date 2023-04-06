import { useState } from "react";

import useSWR from "swr";
import { Fetcher } from "swr";
import { MemberAPI, MyProfileData } from "@/api/memberAPI";

import Loading from "@/components/common/loading";
import ProfileEdit from "@/components/My/profileEdit";
import MyPosts from "@/components/My/myPosts";

export default function My() {
  const tempId = 3;
  const fetcher: Fetcher<MyProfileData, string> = (url) =>
    MemberAPI.getMyProfile(url);
  const { data } = useSWR(`/members/my?memberId=${tempId}`, fetcher);

  const [isEditMode, setIsEditMode] = useState<boolean>(true);

  console.log(data);

  if (!data) return <Loading />;

  return (
    <div className="bg-white py-14 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-center border-b border-gray-200">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          마이페이지
        </h2>
        <p className="mt-2 mb-10 text-lg leading-8 text-gray-600">
          나의 정보를 확인하거나 수정할 수 있어요
        </p>
        <div className="ml-8 flex justify-start text-base font-semibold">
          <button
            className={`${
              isEditMode && "border border-b-0 bg-white"
            } -mb-0.5 px-6 py-2 border-gray-200`}
            onClick={() => setIsEditMode(true)}
          >
            정보 수정
          </button>
          <button
            className={`${
              !isEditMode && "border border-b-0 bg-white"
            } -mb-0.5 px-6 py-2 border-gray-200`}
            onClick={() => setIsEditMode(false)}
          >
            모임 현황
          </button>
        </div>
      </div>
      {isEditMode ? (
        <ProfileEdit
          memberId={tempId}
          imageUrl={data.profileImageUrl}
          email={data.email}
          nickname={data.nickname}
          job={data.job.main}
          subJob={data.job.detail}
          career={data.career}
          jobLevel={data.level}
          stack={data.skills}
          introduction={data.introduction}
        />
      ) : (
        <MyPosts
          hostingPosts={data.hostingPosts}
          appliedPosts={data.appliedPosts}
          participatedPosts={data.participatedPosts}
        />
      )}
    </div>
  );
}
