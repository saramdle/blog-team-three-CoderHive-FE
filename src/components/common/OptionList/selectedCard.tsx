import { Dispatch, SetStateAction } from "react";

export type OptionType = {
  id: number;
  title: string;
};

type SelectedCardProps = {
  id: number;
  title: string;
  selectedOptions: OptionType[];
  setSelectedOption: Dispatch<SetStateAction<OptionType[]>>;
};

export default function SelectedCard({
  id,
  title,
  selectedOptions,
  setSelectedOption,
}: SelectedCardProps) {
  const deleteOption = () => {
    setSelectedOption(selectedOptions.filter((option) => option.id !== id));
  };

  return (
    <div
      className="mr-4 mb-2 py-2 px-4 w-fit flex items-center rounded-md text-sm font-normal cursor-pointer
        text-gray-600 bg-gray-100 hover:bg-gray-200"
      onClick={deleteOption}
    >
      <span>{title}</span>
      <svg
        className="ml-1 -mr-1 h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
}
