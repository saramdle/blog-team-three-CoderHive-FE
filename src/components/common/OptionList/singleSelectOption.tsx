import { Dispatch, SetStateAction, useState } from "react";

type SingleSelectOptionProps = {
  title: string | undefined;
  isSelected: boolean;
  setSelectedOption: Dispatch<SetStateAction<string>>;
  setSubOption?: Dispatch<SetStateAction<string>>;
};

export default function SingleSelectOption({
  title,
  isSelected,
  setSelectedOption,
  setSubOption,
}: SingleSelectOptionProps) {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  const addOption = () => {
    if (!isSelected && title) {
      setSelectedOption(title);

      if (setSubOption) setSubOption("");
    }
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
          <svg
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      )}
    </li>
  );
}
