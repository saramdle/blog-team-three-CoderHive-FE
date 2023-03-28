import Image from "next/image";

import MiniPostCard from "@/components/miniPostCard";
import ProfileIcon from "@/lib/icons/profileIcon";

export default function Profile() {
  const renderStackList = 테스트_프로필_데이터.stacks.map((skill, index) => {
    return (
      <div
        key={index}
        className="mr-4 px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
      >
        {skill}
      </div>
    );
  });

  const renderInProgressPost = 테스트_프로필_데이터.inProgressPosts.map(
    (post) => {
      return (
        <MiniPostCard
          key={post.postId}
          postId={post.postId}
          status={post.status}
          field={post.field}
          title={post.title}
          location={post.location}
          likes={post.likes}
          hasImg={post.hasImg}
        />
      );
    }
  );

  const onSubmit = () => {};

  return (
    <div className="bg-white py-14 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto pb-8 max-w-4xl flex justify-center items-center border-b border-gray-200">
        <div className="relative w-44 h-44">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            {테스트_프로필_데이터.imageUrl ? (
              <Image
                src={테스트_프로필_데이터.imageUrl}
                alt="Image"
                fill
                sizes="100%, 100%"
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <ProfileIcon width="full" height="full" color="text-gray-400" />
            )}
          </div>
        </div>
        <div className="ml-8 mt-4 flex flex-col justify-end">
          <h2 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {테스트_프로필_데이터.nickname}
          </h2>
          <h3 className="mt-6 text-base font-semibold text-gray-700">
            {테스트_프로필_데이터.field}
          </h3>
          <h3 className="mt-2 text-sm font-normal text-gray-700">
            {테스트_프로필_데이터.level} / {테스트_프로필_데이터.year}
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
              {테스트_프로필_데이터.intro
                ? 테스트_프로필_데이터.intro
                : "내용이 없습니다."}
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

let 테스트_프로필_데이터 = {
  imageUrl: "/test.jpg",
  nickname: "공기밥",
  field: "프론트엔드",
  level: "초보",
  year: "1-3년차",
  stacks: ["SASS", "JavaScript", "React", "NextJS"],
  intro: "",
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
};
