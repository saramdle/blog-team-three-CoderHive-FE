import { useState } from "react";

import SearchStack from "@/components/common/SearchStack/searchStack";
import SingleSelectList from "../common/OptionList/singleSelectList";
import ProfileImage from "./profileImage";
import validateInput from "@/lib/util/validateInput";

type ProfileEditProps = {
  memberId: number;
  imageUrl: string;
  email: string;
  nickname: string;
  job: string;
  subJob: string;
  career: string;
  jobLevel: string;
  stack: string[];
  introduction: string;
};

export default function ProfileEdit({
  memberId,
  imageUrl,
  email,
  nickname,
  job,
  subJob,
  career,
  jobLevel,
  stack,
  introduction,
}: ProfileEditProps) {
  const [image, setImage] = useState<File | null>(null);
  const [nickName, setNickName] = useState<string>(nickname);
  const [field, setField] = useState<string>(job);
  const [subfield, setSubfield] = useState<string>(subJob);
  const [level, setLevel] = useState<string>(jobLevel);
  const [year, setYear] = useState<string>(career);
  const [stackList, setStackList] = useState<string[]>(stack);
  const [intro, setIntro] = useState<string>(introduction);

  const [nickNameError, setNickNameError] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");

  const onSubmit = () => {
    const validate = validateInput(nickName, setNickNameError);

    if (!validate) {
      setValidationError("필수 항목들을 모두 입력해 주세요");
      return;
    } else if (intro.length > 500) {
      setValidationError("자기소개 글자 갯수 제한을 초과하였습니다");
      return;
    }

    setValidationError("");

    // 서버에 정보 수정 요청
    const formData = new FormData();
    formData.append(
      "json",
      JSON.stringify({
        memberId: memberId,
        nickname: nickName,
        job: field,
        subJob: subfield,
        career: year,
        level: level,
        skills: stackList,
        introduction: intro,
      })
    );
    if (image) formData.append("file", image);

    // MemberAPI.patchEditProfile(formData);
  };

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
          <div className="flex justify-between items-center">
            <label
              htmlFor="nickname"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              닉네임 *
            </label>
            <span className="text-xs text-red-500">{nickNameError}</span>
          </div>

          <div className="mt-4">
            <input
              type="text"
              name="nickname"
              id="nickname"
              className={`${
                nickNameError && "!outline !outline-red-500 !ring-0"
              } block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 
                `}
              placeholder="닉네임은 최대 8자 입니다."
              maxLength={8}
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              onBlur={() => validateInput(nickName, setNickNameError)}
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

        <div className="sm:col-span-2">
          <label
            htmlFor="comment"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            자기 소개
          </label>
          <div className="mt-4">
            <textarea
              id="comment"
              name="comment"
              rows={3}
              className="block px-3 py-2 w-full text-sm leading-6 text-gray-900 
                    rounded-md border border-gray-300 shadow-sm !outline-none"
              onChange={(e) => setIntro(e.target.value)}
              value={intro}
            ></textarea>
            <div className="mt-2 leading-6 text-xs text-gray-600">
              <strong className={`${intro.length > 500 && "text-red-600"}`}>
                {intro.length}
              </strong>{" "}
              / 500
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <button
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
          font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all ease-in duration-100"
          onClick={onSubmit}
        >
          업데이트
        </button>
        <span className="mt-6 text-xs font-semibold text-red-500">
          {validationError}
        </span>
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
