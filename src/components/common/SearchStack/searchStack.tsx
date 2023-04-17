import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import { debounce } from "lodash";

import { InfoAPI, SkillData } from "@/api/infoAPI";
import SelectedCard, { OptionType } from "../OptionList/selectedCard";

type SearchStackProps = {
  stackList: OptionType[];
  setStackList: Dispatch<SetStateAction<OptionType[]>>;
};

export default function SearchStack({
  stackList,
  setStackList,
}: SearchStackProps) {
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [searchResultList, setSearchResultList] = useState<OptionType[]>([]);

  const searchSkill = useMemo(
    () =>
      debounce(async (text) => {
        try {
          if (text.length < 2) {
            setSearchResultList([]);
            return;
          }

          const skillData: SkillData = await InfoAPI.getSkills(text);
          setSearchResultList(
            skillData.skills.map((skill) => {
              return { id: skill.id, title: skill.detail };
            })
          );
        } catch (error) {
          console.log("서버와의 통신에 장애가 발생했습니다.");
        }
      }, 500),
    []
  );

  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);

    searchSkill(e.target.value);
  };

  const onTextClicked = () => {
    setSearchText("");

    // 이미 추가된 같은 기술이 있으면 무시한다
    if (stackList.some((e) => e.title === searchText)) return;

    setStackList(stackList.concat({ id: -1, title: searchText }));
  };

  const onStackClicked = (stack: OptionType) => {
    setSearchText("");

    if (stackList.some((e) => e.title === stack.title)) return;

    setStackList(stackList.concat(stack));
  };

  const renderSearchResultList = searchResultList.map((result, index) => {
    return (
      <button
        key={index}
        className="mr-4 mb-2 px-4 py-1.5 rounded-md border border-gray-600 
        hover:text-indigo-600 hover:border-indigo-600"
        onClick={() => onStackClicked(result)}
      >
        {result.title}
      </button>
    );
  });

  const renderStackList = stackList.map((stack, index) => {
    return (
      <SelectedCard
        key={index}
        id={stack.id}
        title={stack.title}
        selectedOptions={stackList}
        setSelectedOption={setStackList}
      />
    );
  });

  return (
    <div className="relative min-w-full">
      <input
        type="text"
        name="stack"
        id="stack"
        className="relative block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm 
                ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-indigo-600 
                sm:text-sm sm:leading-6"
        value={searchText}
        placeholder="기술 스택을 검색해 보세요"
        onChange={(e) => onTextChange(e)}
        onFocus={() => setIsOptionOpen(true)}
        onBlur={() => setIsOptionOpen(false)}
      />

      {searchText && (
        <div
          className={`${
            isOptionOpen ? "visible" : "invisible opacity-0"
          } absolute z-10 mt-1 px-2 pt-2 max-h-56 w-full min-w-fit overflow-auto rounded-md bg-white
          text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
          sm:text-sm transition-all ease-in duration-200`}
        >
          <button
            className="mr-4 mb-2 px-4 py-1.5 rounded-md border border-gray-600 
            hover:text-indigo-600 hover:border-indigo-600"
            onClick={onTextClicked}
          >
            {searchText}
          </button>

          {renderSearchResultList}
        </div>
      )}
      <div className="relative flex flex-wrap mt-4 w-full min-h-[2.2rem]">
        {renderStackList}
      </div>
    </div>
  );
}
