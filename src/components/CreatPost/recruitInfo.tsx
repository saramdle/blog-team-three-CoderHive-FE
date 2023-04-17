import { Dispatch, MutableRefObject, SetStateAction, useState } from "react";

import { JobData } from "@/api/infoAPI";
import { OptionType } from "../common/OptionList/selectedCard";
import RecruitCard from "./recruitCard";

type RecruitInfoProps = {
  recruitInfo: MutableRefObject<string[][] | null>;
  recruitNum: MutableRefObject<number | null>;
  initialInfo?: string[][];
  jobOptions: JobData;
  myWork: string;
  setMyWork: Dispatch<SetStateAction<string>>;
  workList: (OptionType | undefined)[];
  setWorkList: Dispatch<SetStateAction<(OptionType | undefined)[]>>;
  setRecruitInfoError: Dispatch<SetStateAction<string>>;
};
export default function RecruitInfo({
  recruitInfo,
  recruitNum,
  initialInfo,
  jobOptions,
  myWork,
  setMyWork,
  workList,
  setWorkList,
  setRecruitInfoError,
}: RecruitInfoProps) {
  const initialInfoComp = !initialInfo
    ? [
        <RecruitCard
          key={0}
          jobOptions={jobOptions}
          index={0}
          recruitInfo={recruitInfo}
          recruitNum={recruitNum}
          setWorkList={setWorkList}
          setRecruitInfoError={setRecruitInfoError}
        />,
      ]
    : initialInfo.map((info, index) => {
        return (
          <RecruitCard
            key={index}
            index={index}
            pField={info[0]}
            pSubField={info[1]}
            pCount={Number(info[2])}
            recruitInfo={recruitInfo}
            recruitNum={recruitNum}
            jobOptions={jobOptions}
            setWorkList={setWorkList}
            isModifiable={false}
            setRecruitInfoError={setRecruitInfoError}
          />
        );
      });
  const [infoComp, setInfoComp] = useState<JSX.Element[] | null>(
    initialInfoComp
  );

  const addInfoComp = () => {
    if (!recruitInfo.current || !recruitNum.current || !infoComp) return;

    if (recruitNum.current >= 10) {
      setRecruitInfoError("인원을 10명 이상 추가할 수 없습니다!");

      setTimeout(() => {
        setRecruitInfoError("");
      }, 2000);

      return;
    }

    recruitInfo.current.push([]);
    recruitNum.current += 1;

    const index = infoComp.length;
    setInfoComp(
      infoComp.concat(
        <RecruitCard
          key={index}
          jobOptions={jobOptions}
          index={index}
          recruitInfo={recruitInfo}
          recruitNum={recruitNum}
          setWorkList={setWorkList}
          setRecruitInfoError={setRecruitInfoError}
        />
      )
    );
  };

  const deleteInfoComp = () => {
    if (
      !recruitInfo.current ||
      !recruitNum.current ||
      !infoComp ||
      infoComp.length < (initialInfo ? initialInfo.length + 1 : 2)
    )
      return;

    const popedInfo = recruitInfo.current.pop();
    if (popedInfo) recruitNum.current -= parseInt(popedInfo[2]);

    const newCompList = infoComp.slice(0, -1);
    setInfoComp(newCompList);

    // 내 담당 분야 설정이 삭제될 분야일 경우 설정을 초기화 시킨다.
    if (workList[workList.length - 1]?.title === myWork) {
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
