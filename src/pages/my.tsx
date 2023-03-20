import { useState } from "react";

import SearchStack from "@/components/SearchStack/searchStack";

export default function My() {
  const [stackList, setStackList] = useState<string[]>([]);

  const onSubmit = () => {};

  return (
    <div className="bg-white py-14 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto pb-8 max-w-4xl text-center border-b border-gray-200">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          프로필
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          만들고 싶은 모임의 정보를 입력해주세요
        </p>
      </div>
      <div className="mx-auto mt-10 max-w-3xl sm:mt-14">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8">
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold leading-6 text-gray-900">
              대표 이미지
            </label>
            {/* <div className="mt-2.5">
              <UploadImage image={image} setImage={setImage} />
            </div> */}
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
            작성 완료
          </button>
        </div>
      </div>
    </div>
  );
}
