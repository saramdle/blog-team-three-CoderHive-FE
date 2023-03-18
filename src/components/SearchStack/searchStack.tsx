import { useState } from "react";
import SelectedCard from "../selectedCard";

export default function SearchStack() {
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");
  const [stackList, setStackList] = useState<string[]>([]);

  const renderStackList = stackList.map((stack, index) => {
    return (
      <SelectedCard
        key={index}
        title={stack}
        selectedOptions={stackList}
        setSelectedOption={setStackList}
      />
    );
  });

  const onStackClicked = () => {
    setStackList(stackList.concat(searchText));
    setSearchText("");
  };

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
        onChange={(e) => setSearchText(e.target.value)}
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
            onClick={onStackClicked}
          >
            {searchText}
          </button>
        </div>
      )}
      <div className="relative flex flex-wrap mt-4 w-full min-h-[2.2rem]">
        {renderStackList}
      </div>
    </div>
  );
}
