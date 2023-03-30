import {
  Dispatch,
  MutableRefObject,
  ReactElement,
  SetStateAction,
  useState,
} from "react";

import RecruitCard from "./recruitCard";

type RecruitInfoProps = {
  recruitInfo: MutableRefObject<string[][] | null>;
  recruitNum: MutableRefObject<number | null>;
  myWork: string;
  setMyWork: Dispatch<SetStateAction<string>>;
  workList: string[];
  setWorkList: Dispatch<SetStateAction<string[]>>;
};
export default function RecruitInfo({
  recruitInfo,
  recruitNum,
  myWork,
  setMyWork,
  workList,
  setWorkList,
}: RecruitInfoProps) {
  const [infoComp, setInfoComp] = useState<ReactElement[]>([
    <RecruitCard
      key={0}
      index={0}
      recruitInfo={recruitInfo}
      recruitNum={recruitNum}
      setWorkList={setWorkList}
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
        <RecruitCard
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
  return (
    <>
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
    </>
  );
}
