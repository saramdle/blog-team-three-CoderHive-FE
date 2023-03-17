import { useRouter } from "next/router";
import { useState } from "react";

import SingleSelectList from "@/components/OptionList/singleSelectList";

export default function Register() {
  const [nickname, setNickname] = useState<string>("");
  const [field, setField] = useState<string>("미지정");
  const [subfield, setSubfield] = useState<string>("미지정");
  const [level, setLevel] = useState<string>("미지정");
  const [year, setYear] = useState<string>("미지정");

  const router = useRouter();

  const onClickComplete = () => {
    router.push("/");
  };

  return (
    <div className="isolate bg-white py-20 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          회원 가입
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          아래 정보들을 입력하면 회원가입이 완료됩니다
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              이메일
            </label>
            <div className="mt-2.5">
              <div
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6
                bg-gray-300 ring-1 ring-inset ring-gray-300"
              >
                {"example1234@gmail.com"}
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
            <div className="mt-2.5">
              <input
                type="text"
                name="nickname"
                id="nickname"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm sm:text-sm sm:leading-6
                  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
                  focus:ring-1 focus:ring-inset focus:ring-indigo-600"
                onChange={(e) => setNickname(e.target.value)}
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
        </div>
        <div className="mt-10">
          <button
            type="button"
            className="px-3.5 py-2.5 block w-full rounded-md bg-indigo-600 text-center text-sm 
              font-semibold text-white shadow-sm hover:bg-indigo-500
              transition-all ease-in duration-100"
            onClick={onClickComplete}
          >
            가입 완료
          </button>
        </div>
      </form>
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
