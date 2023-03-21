import { useState } from "react";

import SearchStack from "@/components/SearchStack/searchStack";
import SingleSelectList from "../OptionList/singleSelectList";
import ProfileImage from "./profileImage";

type ProfileEditProps = {
  imageUrl: string;
  email: string;
  nickname: string;
  skill: string[];
  stack: string[];
};

export default function ProfileEdit({
  imageUrl,
  email,
  nickname,
  skill,
  stack,
}: ProfileEditProps) {
  const [image, setImage] = useState<File | null>(null);
  const [nicName, setNicName] = useState<string>(nickname);
  const [field, setField] = useState<string>(skill[0]);
  const [subfield, setSubfield] = useState<string>(skill[1]);
  const [level, setLevel] = useState<string>(skill[2]);
  const [year, setYear] = useState<string>(skill[3]);
  const [stackList, setStackList] = useState<string[]>(stack);

  const onSubmit = () => {};

  return (
    <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
      <div className="grid grid-cols-1 gap-y-6 gap-x-8">
        <div className="sm:col-span-2">
          <div className="mt-2.5">
            <ProfileImage imageUrl={imageUrl} setImage={setImage} />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm font-semibold leading-6 text-gray-900">
            이메일
          </label>
          <div className="mt-2.5">
            <div
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6
                bg-gray-300 ring-1 ring-inset ring-gray-300"
            >
              {email}
            </div>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="nickname"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            닉네임
          </label>
          <div className="mt-4">
            <input
              type="text"
              name="nickname"
              id="nickname"
              className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm 
              ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-indigo-600 
              sm:text-sm sm:leading-6"
              value={nicName}
              onChange={(e) => setNicName(e.target.value)}
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            대표 직무 / 능력치
          </label>
          <div className="relative mt-2.5 grid grid-cols-4 gap-4 max-md:grid-rows-4 max-md:grid-cols-1">
            <SingleSelectList
              title={field}
              options={분야_테스트_데이터}
              setSelectedOption={setField}
            />
            <SingleSelectList
              title={subfield}
              options={하위분야_테스트_데이터}
              setSelectedOption={setSubfield}
            />
            <SingleSelectList
              title={level}
              options={숙련도_테스트_데이터}
              setSelectedOption={setLevel}
            />
            <SingleSelectList
              title={year}
              options={년차_테스트_데이터}
              setSelectedOption={setYear}
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
      </div>

      <div className="mt-10">
        <button
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
          font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all ease-in duration-100"
          onClick={onSubmit}
        >
          업데이트
        </button>
      </div>
    </div>
  );
}

let 분야_테스트_데이터 = ["미지정", "기획", "디자인", "프론트엔드", "백엔드"];
let 하위분야_테스트_데이터 = [
  "미지정",
  "IOS",
  "안드로이드",
  "웹프론트엔드",
  "웹퍼블리셔",
  "크로스플랫폼",
  "임베디드",
];
let 숙련도_테스트_데이터 = ["미지정", "초심자", "초보", "중수", "고수", "구루"];
let 년차_테스트_데이터 = ["미지정", "1-3년", "3-5년", "5-10년", "10년 이상"];
