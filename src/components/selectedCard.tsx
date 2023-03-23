import CloseIcon from "@/lib/icons/closeIcon";
import { Dispatch, SetStateAction } from "react";

type SelectedCardProps = {
  title: string;
  selectedOptions: string[];
  setSelectedOption: Dispatch<SetStateAction<string[]>>;
};

export default function SelectedCard({
  title,
  selectedOptions,
  setSelectedOption,
}: SelectedCardProps) {
  const deleteOption = () => {
    setSelectedOption(selectedOptions.filter((option) => option !== title));
  };

  return (
    <div
      className="mr-4 mb-2 py-2 px-4 w-fit flex items-center rounded-md text-sm font-normal cursor-pointer
        text-gray-600 bg-gray-100 hover:bg-gray-200"
      onClick={deleteOption}
    >
      <span>{title}</span>
      <CloseIcon width={4} height={4} style="ml-1 -mr-1" />
    </div>
  );
}
