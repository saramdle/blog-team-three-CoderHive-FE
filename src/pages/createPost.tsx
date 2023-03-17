import { useState, useRef, ReactElement } from "react";

import RecruitInfo from "@/components/CreatPost/recruitInfo";

export default function CreatePost() {
  const recruitInfo = useRef<string[][] | null>([[]]);
  const recruitNum = useRef<number | null>(1);
  const [type, setType] = useState("스터디");
  const [infoComp, setInfoComp] = useState<ReactElement[]>([
    <RecruitInfo
      key={0}
      index={0}
      recruitInfo={recruitInfo}
      recruitNum={recruitNum}
    />,
  ]);

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
        />
      )
    );
  };

  const deleteInfoComp = () => {
    if (!recruitInfo.current || !recruitNum.current || infoComp.length < 2)
      return;

    const popedInfo = recruitInfo.current.pop();
    if (popedInfo) recruitNum.current -= parseInt(popedInfo[2]);

    const nextState = [...infoComp];
    nextState.splice(-1);
    setInfoComp(nextState);
  };

  const onSubmit = () => {
    console.log(recruitInfo.current);
  };

  return (
    <div className="isolate bg-white py-14 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto pb-8 max-w-2xl text-center border-b border-gray-200">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          모임 생성
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          만들고 싶은 모임의 정보를 입력해주세요
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-xl sm:mt-14">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8">
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
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
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></textarea>
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
              <input
                type="text"
                name="stack"
                id="stack"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm 
                  ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-indigo-600 
                  sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
              font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all ease-in duration-100"
            onClick={onSubmit}
          >
            작성 완료
          </button>
        </div>
      </div>
    </div>
  );
}
