import { Dispatch, SetStateAction, useState } from "react";

import CheckIcon from "@/lib/icons/checkIcon";

type MultiSelectOption = {
  title: string;
  isSelected: boolean;
  selectedOptions: string[];
  setSelectedOption: Dispatch<SetStateAction<string[]>>;
};

export default function MultiSelectOption({
  title,
  isSelected,
  selectedOptions,
  setSelectedOption,
}: MultiSelectOption) {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  const addOption = () => {
    if (!isSelected) setSelectedOption(() => selectedOptions.concat(title));
  };

  return (
    <li
      className={`${
        isHighlighted ? "bg-indigo-600 text-white" : "text-gray-900"
      } relative cursor-pointer select-none py-2 pl-4 pr-8`}
      id="listbox-option-0"
      role="option"
      aria-selected="false"
      onMouseEnter={() => setIsHighlighted(true)}
      onMouseLeave={() => setIsHighlighted(false)}
      onClick={addOption}
    >
      <div className="flex items-center">
        <span className="font-normal mx-3 block truncate">{title}</span>
      </div>

      {isSelected && (
        <span
          className={`${
            isHighlighted ? "text-white" : "text-indigo-600"
          } absolute inset-y-0 right-0 flex items-center pr-4`}
        >
          <CheckIcon width={4} height={4} />
        </span>
      )}
    </li>
  );
}
