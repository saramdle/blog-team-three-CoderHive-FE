import { Dispatch, SetStateAction, useEffect, useState } from "react";

import SingleSelectOption from "./singleSelectOption";

type SingleSelectListProps = {
  title: string;
  options: string[];
  setSelectedOption: Dispatch<SetStateAction<string>>;
  isValidate?: string;
  validate?: () => boolean;
  isModifiable?: boolean;
};

export default function SingleSelectList({
  title,
  options,
  setSelectedOption,
  isValidate = "",
  validate,
  isModifiable = true,
}: SingleSelectListProps) {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  useEffect(() => {
    if (validate && title) validate();
  }, [title, validate]);

  const renderOptions = options.map((option, index) => {
    const isSelected = option === title;

    return (
      <SingleSelectOption
        key={index}
        title={option}
        isSelected={isSelected}
        setSelectedOption={setSelectedOption}
      />
    );
  });

  return (
    <div className="relative min-w-full">
      <button
        type="button"
        className={`${isValidate && "!outline !outline-red-500 !ring-0"} ${
          !isModifiable && "bg-gray-200"
        } relative min-w-full rounded-md py-2 text-center text-gray-900 shadow-sm
          ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6
          focus:ring-2 focus:ring-indigo-500`}
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onFocus={() => setIsListOpen(true)}
        onBlur={() => setIsListOpen(false)}
        disabled={!isModifiable}
      >
        <span className="w-full flex items-center">
          <span className="ml-3 block truncate">
            {title ? title : "미지정"}
          </span>
        </span>

        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clipRule="evenodd"
            />
          </svg>{" "}
        </span>
      </button>

      <ul
        className={`${
          isListOpen ? "visible" : "invisible opacity-0"
        } absolute z-10 mt-1 max-h-56 w-full min-w-fit overflow-auto rounded-md bg-white py-1 
          text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
          sm:text-sm transition-all ease-in duration-200`}
        tabIndex={-1}
        role="listbox"
        aria-labelledby="listbox-label"
        aria-activedescendant="listbox-option-3"
      >
        {renderOptions}
      </ul>
    </div>
  );
}
