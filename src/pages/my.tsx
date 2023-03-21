import { useState } from "react";

import ProfileEdit from "@/components/My/profileEdit";
import MyPosts from "@/components/My/myPosts";

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
        <MyPosts
          appliedPosts={테스트_유저정보.appliedPost}
          inProgressPosts={테스트_유저정보.inProgressPosts}
          completePosts={테스트_유저정보.completePosts}
        />
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
  appliedPost: [
    {
      postId: "1",
      type: "스터디",
      status: "모집중",
      field: "프론트엔드 개발",
      title: "프론트엔드 개발자 구함!",
      location: "서울 / 경기",
      skills: ["HTML5", "Tailwind", "NextJS", "TypeScript", "GitHub"],
      likes: 1,
      hasImg: true,
    },
    {
      postId: "2",
      type: "스터디",
      status: "모집중",
      field: "프론트엔드 개발",
      title: "자바스크립트 개념부터 다지실분 구함",
      location: "서울 / 경기",
      skills: ["HTML5", "JavaScript"],
      likes: 3,
      hasImg: false,
    },
    {
      postId: "3",
      type: "스터디",
      status: "모집완료",
      field: "디자인&UX 스터디&네트워킹",
      title: "UIUX 포트폴리오 같이 만들어요",
      location: "서울",
      skills: ["Figma"],
      likes: 12,
      hasImg: true,
    },
    {
      postId: "4",
      type: "스터디",
      status: "모집중",
      field: "백엔드 개발",
      title: "개발 스터디 모집",
      location: "온라인 / 서울",
      skills: ["Flutter", "Python", "JavaScript", "TypeScript", "Django"],
      likes: 100,
      hasImg: false,
    },
    {
      postId: "5",
      type: "스터디",
      status: "모집완료",
      field: "기획 & PO",
      title: "SaaS LMS 기획",
      location: "서울 / 경기",
      skills: ["LMS", "SaaS"],
      likes: 0,
      hasImg: true,
    },
  ],
  inProgressPosts: [
    {
      postId: "3",
      type: "스터디",
      status: "모집완료",
      field: "디자인&UX 스터디&네트워킹",
      title: "UIUX 포트폴리오 같이 만들어요",
      location: "서울",
      skills: ["Figma"],
      likes: 12,
      hasImg: true,
    },
    {
      postId: "4",
      type: "스터디",
      status: "모집중",
      field: "백엔드 개발",
      title: "개발 스터디 모집",
      location: "온라인 / 서울",
      skills: ["Flutter", "Python", "JavaScript", "TypeScript", "Django"],
      likes: 100,
      hasImg: false,
    },
    {
      postId: "5",
      type: "스터디",
      status: "모집완료",
      field: "기획 & PO",
      title: "SaaS LMS 기획",
      location: "서울 / 경기",
      skills: ["LMS", "SaaS"],
      likes: 0,
      hasImg: true,
    },
  ],
  completePosts: [
    {
      postId: "1",
      type: "스터디",
      status: "모집중",
      field: "프론트엔드 개발",
      title: "프론트엔드 개발자 구함!",
      location: "서울 / 경기",
      skills: ["HTML5", "Tailwind", "NextJS", "TypeScript", "GitHub"],
      likes: 1,
      hasImg: true,
    },
    {
      postId: "2",
      type: "스터디",
      status: "모집중",
      field: "프론트엔드 개발",
      title: "자바스크립트 개념부터 다지실분 구함",
      location: "서울 / 경기",
      skills: ["HTML5", "JavaScript"],
      likes: 3,
      hasImg: false,
    },
  ],
};
