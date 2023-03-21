import { useState } from "react";

import ProfileEdit from "@/components/My/profileEdit";

export default function My() {
  const [isEditMode, setIsEditMode] = useState<boolean>(true);

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
          imageUrl={테스트_유저정보.imgUrl}
          email={테스트_유저정보.email}
          nickname={테스트_유저정보.nickname}
          skill={테스트_유저정보.skill}
          stack={테스트_유저정보.stack}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

let 테스트_유저정보 = {
  imgUrl: "",
  email: "example@gmail.com",
  nickname: "공기밥",
  skill: ["프론트엔드", "웹프론트엔드", "초보", "1-3년"],
  stack: ["React", "NextJS", "SASS", "JavaScript"],
};
