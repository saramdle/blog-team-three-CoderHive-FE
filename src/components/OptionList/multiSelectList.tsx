import { Dispatch, SetStateAction, useState } from "react";

import SelectIcon from "@/lib/icons/selectIcon";
import MultiSelectOption from "./multiSelectOption";

type MultiSelectListProps = {
  title: string;
  options: string[];
  selectedOptions: string[];
  setSelectedOption: Dispatch<SetStateAction<string[]>>;
};

export default function MultiSelectList({
  title,
  options,
  selectedOptions,
  setSelectedOption,
}: MultiSelectListProps) {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);

  const onFocus = () => {
    setIsListOpen(true);
  };

  const onBlur = () => {
    setIsListOpen(false);
  };

  const renderOptions = options.map((option, index) => {
    const isSelected = selectedOptions.includes(option);

    return (
      <MultiSelectOption
        key={index}
        title={option}
        isSelected={isSelected}
        selectedOptions={selectedOptions}
        setSelectedOption={setSelectedOption}
      />
    );
  });

  return (
    <div className="relative">
      <button
        type="button"
        className="relative w-full min-w-200 rounded-md py-2 pl-10 pr-16 text-left text-gray-900 
          shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 
          sm:text-sm sm:leading-6"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <span className="flex items-center">
          <span className="ml-3 block truncate">{title}</span>
        </span>

        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <SelectIcon width={5} height={5} color="text-gray-400" />
        </span>
      </button>

      <ul
        className={`${
          isListOpen ? "visible" : "invisible opacity-0"
        } absolute z-10 mt-1 max-h-56 w-full min-w-fit overflow-auto rounded-md bg-white 
          py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
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
