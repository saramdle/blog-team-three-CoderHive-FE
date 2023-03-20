import { useState } from "react";

import TextViewer from "@/components/Post/textViewer";
import initialBodyText from "@/lib/initialBodyText";
import PostSideView from "@/components/Post/postSideView";
import ProfileCard from "@/components/profileCard";

export default function Post() {
  const [bodyText, setBodyText] = useState<string>(initialBodyText);

  const renderProfileCards = 테스트_멤버정보.map((user, index) => {
    return (
      <ProfileCard
        key={index}
        imageUrl={user.imageUrl}
        nickname={user.nickname}
        field={user.field}
        level={user.level}
        resp={user.resp}
      />
    );
  });

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-16">
      <div className="mb-6 px-8 pb-8 border-b border-gray-300">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          스터디
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          프론트엔드 개발자 구함!
        </h1>
        <h3 className="mt-4 mb-2 text-base text-gray-700">프론트엔드 개발</h3>
        <h4 className="mb-2 text-base text-gray-700">서울 / 경기</h4>
        <div className="font-semibold text-base text-gray-800">모집중</div>
      </div>

      <div className="px-8 grid gap-y-16 gap-x-8">
        <div
          className="border-0 border-gray-300 lg:sticky lg:top-4 lg:col-start-2 lg:row-start-1 lg:w-80
            lg:pl-4 lg:border-l"
        >
          <PostSideView
            recruitInfo={테스트_지원정보}
            skills={테스트_스킬정보}
            platforms={테스트_플랫폼정보}
          />
        </div>
        <div>
          <div className="text-base leading-5 text-gray-700">
            <div className="mt-6">
              <TextViewer bodyText={bodyText} />
            </div>
          </div>
          <div className="mt-12 py-4 font-bold border-t border-gray-400">
            <h3 className="mb-4 font-bold text-lg">리더 정보</h3>
            <div className="mb-4 flex flex-wrap gap-2">
              <ProfileCard
                imageUrl={테스트_리더정보.imageUrl}
                nickname={테스트_리더정보.nickname}
                field={테스트_리더정보.field}
                level={테스트_리더정보.level}
                resp={테스트_리더정보.resp}
              />
            </div>
            <h3 className="mb-4 font-bold text-lg">멤버 정보</h3>
            <div className="flex flex-wrap gap-2">{renderProfileCards}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

let 테스트_지원정보: [string, number, number][] = [
  ["UI/UX 디자인", 2, 2],
  ["웹프론트엔드", 2, 2],
  ["웹서버", 3, 1],
];

let 테스트_스킬정보 = [
  "Flutter",
  "Python",
  "JavaScript",
  "TypeScript",
  "Django",
];

let 테스트_플랫폼정보 = ["Android", "IOS", "Web"];

let 테스트_리더정보 = {
  imageUrl: "/test.jpg",
  nickname: "공기밥",
  field: "웹프론트엔드",
  level: "초보",
  resp: "웹프론트엔드",
};

interface ProfileCard {
  imageUrl: string;
  nickname: string;
  field: string;
  level: string;
  resp: string;
}

let 테스트_멤버정보: ProfileCard[] = [
  {
    imageUrl: "",
    nickname: "한샘",
    field: "웹서버",
    level: "고수",
    resp: "웹백엔드",
  },
  {
    imageUrl: "",
    nickname: "HSM",
    field: "웹서버",
    level: "고수",
    resp: "웹백엔드",
  },
];
