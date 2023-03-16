import Head from "next/head";
import { useState } from "react";

import ListBox from "@/components/ListBox/listbox";
import SelectedCard from "@/components/Study/selectedCard";
import StudyArticle from "@/components/article";
import NotFound from "@/components/notFound";

export default function Home() {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

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

  const renderArticles = 빈게시물_테스트_데이터.map((post, index) => {
    return (
      <StudyArticle
        key={index}
        type={post.type}
        field={post.field}
        title={post.title}
        location={post.location}
        skills={post.skills}
        likes={post.likes}
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
            <div className="mt-8 flex">
              <ListBox
                title="지역"
                options={지역_테스트_데이터}
                selectedOptions={selectedLocations}
                setSelectedOption={setSelectedLocations}
              />
              <ListBox
                title="분야"
                options={분야_테스트_데이터}
                selectedOptions={selectedFields}
                setSelectedOption={setSelectedFields}
              />
            </div>
            <div className="my-4 min-h-[3rem] flex flex-wrap">
              {renderSelectedLocations}
              {renderSelectedFields}
            </div>
          </div>

          {renderArticles.length === 0 ? (
            <NotFound />
          ) : (
            <div
              className="mx-auto grid grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 
            pt-10 sm:pt-10 sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-4"
            >
              {renderArticles}
            </div>
          )}
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

interface 테스트_게시물_인터페이스 {
  type: string;
  field: string;
  title: string;
  location: string;
  skills: string[];
  likes: number;
}

let 빈게시물_테스트_데이터: 테스트_게시물_인터페이스[] = [];
let 게시물_테스트_데이터 = [
  {
    type: "스터디",
    field: "프론트엔드 개발",
    title: "프론트엔드 개발자 구함!",
    location: "서울 / 경기",
    skills: ["HTML5", "Tailwind", "NextJS", "TypeScript", "GitHub"],
    likes: 1,
  },
  {
    type: "스터디",
    field: "프론트엔드 개발",
    title: "자바스크립트 개념부터 다지실분 구함",
    location: "서울 / 경기",
    skills: ["HTML5", "JavaScript"],
    likes: 3,
  },
  {
    type: "스터디",
    field: "디자인&UX 스터디&네트워킹",
    title: "UIUX 포트폴리오 같이 만들어요",
    location: "서울",
    skills: ["Figma"],
    likes: 12,
  },
  {
    type: "스터디",
    field: "백엔드 개발",
    title: "개발 스터디 모집",
    location: "온라인 / 서울",
    skills: ["Flutter", "Python", "JavaScript", "TypeScript", "Django"],
    likes: 100,
  },
  {
    type: "스터디",
    field: "기획 & PO",
    title: "SaaS LMS 기획",
    location: "서울 / 경기",
    skills: ["LMS", "SaaS"],
    likes: 0,
  },
];
