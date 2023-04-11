import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { JobData } from "@/api/infoAPI";

import SingleSelectList from "@/components/common/OptionList/singleSelectList";
import { OptionType } from "../common/OptionList/selectedCard";

type RecruitCardProps = {
  index: number;
  jobOptions: JobData;
  recruitInfo: MutableRefObject<string[][] | null>;
  recruitNum: MutableRefObject<number | null>;
  pField?: string;
  pSubField?: string;
  pCount?: number;
  isModifiable?: boolean;
  setWorkList: Dispatch<SetStateAction<(OptionType | undefined)[]>>;
  setRecruitInfoError: Dispatch<SetStateAction<string>>;
};

export default function RecruitCard({
  index,
  jobOptions,
  recruitInfo,
  recruitNum,
  pField = "",
  pSubField = "",
  pCount = 1,
  isModifiable = true,
  setWorkList,
  setRecruitInfoError,
}: RecruitCardProps) {
  const [field, setField] = useState<string>(pField);
  const [subField, setSubField] = useState<string>(pSubField);
  const [count, setCount] = useState<number>(pCount);

  useEffect(() => {
    if (!recruitInfo.current) return;

    const info: string[][] = [];
    recruitInfo.current.forEach((arr, idx) => {
      if (idx === index) info.push([field, subField, count.toString()]);
      else info.push(arr);
    });

    // console.log(
    //   info.map((info, index) => {
    //     if (info[1] !== "") return { id: index, title: info[1] };
    //   })
    // );
    setWorkList(
      info.map((info, index) => {
        if (info[1] !== "") return { id: index, title: info[1] };
      })
    );

    recruitInfo.current = info;
  }, [field, subField, count, recruitInfo, index, setWorkList]);

  const increase = () => {
    if (!recruitNum.current) return;

    if (recruitNum.current >= 10) {
      setRecruitInfoError("인원을 10명 이상 추가할 수 없습니다!");

      setTimeout(() => {
        setRecruitInfoError("");
      }, 2000);

      return;
    }

    recruitNum.current += 1;
    setCount(count + 1);
  };

  const decrease = () => {
    if (!recruitNum.current) return;

    if (count > pCount) {
      recruitNum.current -= 1;
      setCount(count - 1);
    }
  };

  return (
    <div className="mb-4 flex">
      <div className="flex-grow grid grid-cols-2 gap-x-4 max-sm:gap-x-2">
        <SingleSelectList
          title={field}
          placeholder="상위분야"
          options={jobOptions.jobs.map((job, index) => {
            return { id: index, title: job.main };
          })}
          setSelectedOption={setField}
          setSubOption={setSubField}
          isModifiable={isModifiable}
        />
        <SingleSelectList
          title={subField}
          placeholder="하위분야"
          options={jobOptions.jobs.flatMap((job) =>
            job.details.map((subJob) => {
              if (job.main === field)
                return { id: subJob.jobId, title: subJob.field };
            })
          )}
          setSelectedOption={setSubField}
          isModifiable={isModifiable}
        />
      </div>
      <div
        className="px-2 min-w-[8rem] flex justify-between items-center font-normal text-lg 
          max-sm:min-w-[6rem]"
      >
        <button
          className={`${
            count <= pCount && "invisible"
          } px-3 font-light text-xl rounded-full hover:bg-gray-50 `}
          onClick={decrease}
        >
          -
        </button>

        <span className="text-indigo-600">{count}</span>
        <button
          className="px-3 font-light text-xl rounded-full hover:bg-gray-50"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
}
