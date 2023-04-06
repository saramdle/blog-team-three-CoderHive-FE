import React, {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import SingleSelectList from "@/components/OptionList/singleSelectList";

type RecruitCardProps = {
  index: number;
  recruitInfo: MutableRefObject<string[][] | null>;
  recruitNum: MutableRefObject<number | null>;
  pField?: string;
  pSubField?: string;
  pCount?: number;
  isModifiable?: boolean;
  setWorkList: Dispatch<SetStateAction<string[]>>;
  setRecruitInfoError: Dispatch<SetStateAction<string>>;
};

export default function RecruitCard({
  index,
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

    setWorkList(info.map((info) => info[1]).filter((work) => work !== ""));

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
          options={분야_테스트_데이터}
          setSelectedOption={setField}
          isModifiable={isModifiable}
        />
        <SingleSelectList
          title={subField}
          options={하위분야_테스트_데이터}
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

let 분야_테스트_데이터 = ["기획", "디자인", "프론트엔드", "백엔드"];
let 하위분야_테스트_데이터 = [
  "IOS",
  "안드로이드",
  "웹프론트엔드",
  "웹퍼블리셔",
  "크로스플랫폼",
  "임베디드",
];
