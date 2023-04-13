import { useState, useRef } from "react";

import useSWR from "swr";
import { InfoAPI, JobData, LocationData } from "@/api/infoAPI";

import ServerError from "@/components/common/serverError";
import Loading from "@/components/common/loading";
import SingleSelectList from "@/components/common/OptionList/singleSelectList";
import SearchStack from "@/components/common/SearchStack/searchStack";
import UploadImage from "@/components/CreatPost/uploadImage";
import TextEditor from "@/components/CreatPost/textEditor";
import MultiSelectList from "@/components/common/OptionList/multiSelectList";
import SelectedCard, {
  OptionType,
} from "@/components/common/OptionList/selectedCard";
import RecruitInfo from "@/components/CreatPost/recruitInfo";
import initialBodyText from "@/lib/initialBodyText";
import validateInput from "@/lib/util/validateInput";
import validateRecruitInfo from "@/lib/util/validateRecruitInfo";

export default function CreatePost() {
  const recruitInfo = useRef<string[][] | null>([[]]);
  const recruitNum = useRef<number | null>(1);
  const [type, setType] = useState("스터디");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [stackList, setStackList] = useState<OptionType[]>([]);
  const [myWork, setMyWork] = useState<string>("");
  const [workList, setWorkList] = useState<(OptionType | undefined)[]>([]);
  const [platforms, setPlatforms] = useState<OptionType[]>([]);
  const [image, setImage] = useState<string | File | null>(null);
  const [bodyText, setBodyText] = useState<string>(initialBodyText);

  const [titleError, setTitleError] = useState<string>("");
  const [locationError, setLocationError] = useState<string>("");
  const [recruitInfoError, setRecruitInfoError] = useState<string>("");
  const [myWorkError, setMyWorkError] = useState<string>("");
  const [bodyTextError, setBodyTextError] = useState<string>("");
  const [validationError, setValidationError] = useState<string>("");

  const locationData = useSWR<LocationData, Error>(InfoAPI.getLocationURL);
  const jobData = useSWR<JobData, Error>(InfoAPI.getJobURL);
  const platformData = useSWR<{ platforms: string[] }, Error>(
    InfoAPI.getPlatformURL
  );
  platformData.data;

  if (locationData.error || jobData.error || platformData.error) {
    return <ServerError />;
  }

  if (!locationData.data || !jobData.data || !platformData.data) {
    return <Loading />;
  }

  const renderSelectedPlatforms = platforms.map((option) => {
    return (
      <SelectedCard
        key={option.id}
        id={option.id}
        title={option.title}
        selectedOptions={platforms}
        setSelectedOption={setPlatforms}
      />
    );
  });

  const validateAll = () => {
    const v1 = validateInput(title, setTitleError);
    const v2 = validateInput(location, setLocationError);
    const v3 = validateRecruitInfo(recruitInfo.current, setRecruitInfoError);
    const v4 = validateInput(myWork, setMyWorkError);
    const v5 = validateInput(bodyText, setBodyTextError);

    return v1 && v2 && v3 && v4 && v5;
  };

  const onSubmit = () => {
    if (!validateAll()) {
      setValidationError("필수 항목들을 모두 입력해 주세요");
      return;
    }

    setValidationError("");
    console.log("all validated!");
    console.log(recruitInfo.current);
  };

  return (
    <div className="bg-white py-14 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto pb-8 max-w-4xl text-center border-b border-gray-200">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          모임 생성
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          만들고 싶은 모임의 정보를 입력해주세요
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
            <div className="flex justify-between items-center">
              <label
                htmlFor="name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                모임 이름 *
              </label>
              <span className="text-xs text-red-500">{titleError}</span>
            </div>

            <div className="mt-4">
              <input
                type="text"
                name="name"
                id="name"
                className={`${
                  titleError && "!outline !outline-red-500 !ring-0"
                } block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm 
                  ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 
                  `}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => validateInput(title, setTitleError)}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                지역 *
              </label>
              <span className="text-xs text-red-500">{locationError}</span>
            </div>

            <div className="mt-2.5">
              <SingleSelectList
                title={location}
                options={locationData.data.locations.map((data) => {
                  return { id: data.id, title: data.region };
                })}
                setSelectedOption={setLocation}
                isValidate={locationError}
                validate={() => validateInput(location, setLocationError)}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                모집 인원 *
                <span className="ml-2 text-xs font-normal text-gray-600">
                  (최대 10명)
                </span>
              </label>
              <span className="text-xs text-red-500">{recruitInfoError}</span>
            </div>

            <div className="mt-2.5">
              <RecruitInfo
                recruitInfo={recruitInfo}
                recruitNum={recruitNum}
                jobOptions={jobData.data}
                myWork={myWork}
                setMyWork={setMyWork}
                workList={workList}
                setWorkList={setWorkList}
                setRecruitInfoError={setRecruitInfoError}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                나의 담당 분야 *
              </label>
              <span className="text-xs text-red-500">{myWorkError}</span>
            </div>

            <div className="mt-2.5">
              <SingleSelectList
                title={myWork}
                options={workList}
                setSelectedOption={setMyWork}
                isValidate={myWorkError}
                validate={() => validateInput(myWork, setMyWorkError)}
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
                  options={platformData.data.platforms.map((title, index) => {
                    return { id: index, title: title };
                  })}
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
            <div className="flex justify-between items-center">
              <label className="block text-sm font-semibold leading-6 text-gray-900">
                프로젝트 설명 *
              </label>
              <span className="text-xs text-red-500">{bodyTextError}</span>
            </div>

            <div className="mt-2.5">
              <TextEditor bodyText={bodyText} setBodyText={setBodyText} />
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <button
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm 
              font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all ease-in duration-100"
            onClick={onSubmit}
          >
            작성 완료
          </button>
          <span className="mt-6 text-xs font-semibold text-red-500">
            {validationError}
          </span>
        </div>
      </div>
    </div>
  );
}
