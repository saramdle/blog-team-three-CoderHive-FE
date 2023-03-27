import { useState, useRef, ReactElement } from "react";

import RecruitInfo from "@/components/CreatPost/recruitInfo";
import SingleSelectList from "@/components/OptionList/singleSelectList";
import SearchStack from "@/components/SearchStack/searchStack";
import UploadImage from "@/components/CreatPost/uploadImage";
import TextEditor from "@/components/CreatPost/textEditor";
import MultiSelectList from "@/components/OptionList/multiSelectList";
import SelectedCard from "@/components/selectedCard";
import initialBodyText from "@/lib/initialBodyText";

export default function PostEdit() {
  const recruitInfo = useRef<string[][] | null>(
    포스트_테스트_데이터.recruitInfo
  );

  let iRecruitNum = 0;
  포스트_테스트_데이터.recruitInfo.forEach((info) => {
    iRecruitNum += Number(info[2]);
  });
  const recruitNum = useRef<number | null>(iRecruitNum);

  const [type, setType] = useState(포스트_테스트_데이터.type);
  const [title, setTitle] = useState(포스트_테스트_데이터.title);
  const [location, setLocation] = useState(포스트_테스트_데이터.location);
  const [stackList, setStackList] = useState<string[]>(
    포스트_테스트_데이터.stackList
  );
  const [myWork, setMyWork] = useState<string>(포스트_테스트_데이터.myWork);
  const [workList, setWorkList] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>(
    포스트_테스트_데이터.platforms
  );
  const [image, setImage] = useState<File | string | null>(
    포스트_테스트_데이터.image
  );
  const [bodyText, setBodyText] = useState<string>(
    포스트_테스트_데이터.bodyText
  );

  const iInfoComp: ReactElement[] = [];
  포스트_테스트_데이터.recruitInfo.forEach((info, index) => {
    iRecruitNum += Number(info[2]);
    iInfoComp.push(
      <RecruitInfo
        key={index}
        index={index}
        pField={info[0]}
        pSubField={info[1]}
        pCount={Number(info[2])}
        recruitInfo={recruitInfo}
        recruitNum={recruitNum}
        setWorkList={setWorkList}
      />
    );
  });
  const [infoComp, setInfoComp] = useState<ReactElement[]>(iInfoComp);

  const addInfoComp = () => {
    if (!recruitInfo.current || !recruitNum.current || recruitNum.current > 9)
      return;

    recruitInfo.current.push([]);
    recruitNum.current += 1;

    const index = infoComp.length;
    setInfoComp(
      infoComp.concat(
        <RecruitInfo
          key={index}
          index={index}
          recruitInfo={recruitInfo}
          recruitNum={recruitNum}
          setWorkList={setWorkList}
        />
      )
    );
  };

  const deleteInfoComp = () => {
    if (!recruitInfo.current || !recruitNum.current || infoComp.length < 2)
      return;

    const popedInfo = recruitInfo.current.pop();
    if (popedInfo) recruitNum.current -= parseInt(popedInfo[2]);

    const newCompList = infoComp.slice(0, -1);
    setInfoComp(newCompList);

    // 내 담당 분야 설정이 삭제될 분야일 경우 설정을 초기화 시킨다.
    if (workList[workList.length - 1] === myWork) {
      setMyWork("");
    }

    const newWorkList = workList.slice(0, -1);
    setWorkList(newWorkList);
  };

  const renderSelectedPlatforms = platforms.map((title, index) => {
    return (
      <SelectedCard
        key={index}
        title={title}
        selectedOptions={platforms}
        setSelectedOption={setPlatforms}
      />
    );
  });

  const onSubmit = () => {
    console.log(recruitInfo);
  };

  return (
    <div className="bg-white py-14 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto pb-8 max-w-4xl text-center border-b border-gray-200">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          포스트 수정
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          포스트의 정보를 수정해 보세요
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              유형 *
            </label>
            <div className="mt-4 flex">
              <div className="flex items-center mb-4 mr-6">
                <input
                  id="study-radio"
                  type="radio"
                  value="스터디"
                  name="type-radio"
                  className="w-5 h-5 text-indigo-600 border-gray-300"
                  onChange={(e) => setType(e.target.value)}
                  checked={type === "스터디"}
                />
                <label
                  htmlFor="study-radio"
                  className="ml-2 text-sm font-medium text-gray-600"
                >
                  스터디
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="project-radio"
                  type="radio"
                  value="프로젝트"
                  name="type-radio"
                  className="w-5 h-5 text-indigo-600 border-gray-300"
                  onChange={(e) => setType(e.target.value)}
                  checked={type === "프로젝트"}
                />
                <label
                  htmlFor="project-radio"
                  className="ml-2 text-sm font-medium text-gray-600"
                >
                  프로젝트
                </label>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              모임 이름 *
            </label>
            <div className="mt-4">
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm 
                  ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-indigo-600 
                  sm:text-sm sm:leading-6"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              지역 *
            </label>
            <div className="mt-2.5">
              <SingleSelectList
                title={location}
                options={지역_테스트_데이터}
                setSelectedOption={setLocation}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              모집 인원 *
              <span className="ml-2 text-xs font-normal text-gray-600">
                (최대 10명)
              </span>
            </label>
            <div className="mt-2.5">
              {infoComp}
              <div className="ml-auto mt-4 w-fit text-sm">
                <button
                  className="mr-4 px-4 py-2 rounded-md text-gray-500 border border-gray-500 
                  hover:text-gray-600 hover:border-gray-600 transition-all ease-in duration-100"
                  onClick={deleteInfoComp}
                >
                  삭제
                </button>
                <button
                  className="px-6 py-2 rounded-md text-white border border-indigo-600 bg-indigo-600
                  hover:bg-indigo-500 transition-all ease-in duration-100"
                  onClick={addInfoComp}
                >
                  추가
                </button>
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              나의 담당 분야 *
            </label>
            <div className="mt-2.5">
              <SingleSelectList
                title={myWork}
                options={workList}
                setSelectedOption={setMyWork}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="stack"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              기술 스택
              <span className="ml-2 text-xs font-normal text-gray-600">
                (최대 10개)
              </span>
            </label>
            <div className="mt-4">
              <SearchStack stackList={stackList} setStackList={setStackList} />
            </div>
          </div>

          {type === "프로젝트" && (
            <div className="sm:col-span-2">
              <label
                htmlFor="stack"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                출시 플랫폼
              </label>
              <div className="mt-4">
                <MultiSelectList
                  title="플랫폼을 선택해 주세요"
                  options={플랫폼_테스트_데이터}
                  selectedOptions={platforms}
                  setSelectedOption={setPlatforms}
                />
                <div className="mt-4 min-h-[2.4rem] flex flex-wrap">
                  {renderSelectedPlatforms}
                </div>
              </div>
            </div>
          )}

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              대표 이미지
            </label>
            <div className="mt-2.5">
              <UploadImage image={image} setImage={setImage} />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              프로젝트 설명 *
            </label>
            <div className="mt-2.5">
              <TextEditor bodyText={bodyText} setBodyText={setBodyText} />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
              font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all ease-in duration-100"
            onClick={onSubmit}
          >
            수정 완료
          </button>
        </div>
      </div>
    </div>
  );
}

let 지역_테스트_데이터 = [
  "서울특별시",
  "인천광역시",
  "대전광역시",
  "부산광역시",
];
let 플랫폼_테스트_데이터 = ["Web", "Andriod", "IOS", "임베디드"];

let 포스트_테스트_데이터 = {
  type: "스터디",
  title: "프론트엔드 개발자 구함!",
  location: "서울특별시",
  stackList: ["React", "JavaScript"],
  recruitInfo: [
    ["프론트엔드", "웹프론트엔드", "3"],
    ["프론트엔드", "IOS", "2"],
  ],
  recruitNum: "5",
  myWork: "웹프론트엔드",
  workList: ["웹프론트엔드", "IOS"],
  platforms: ["웹", "IOS"],
  image: "/test.jpg",
  bodyText: initialBodyText,
};
