type RecruitStatusProps = {
  field: string;
  current: number;
  goal: number;
};

export default function RecruitStatus({
  field,
  current,
  goal,
}: RecruitStatusProps) {
  const isComplete = goal <= current;

  return (
    <>
      <span className="font-medium">{field}</span>
      <span className="text-center">
        {current} / {goal}
      </span>
      <button
        className={`${
          isComplete
            ? "bg-gray-200 cursor-default"
            : "text-white bg-indigo-600 hover:bg-indigo-500"
        } px-1 py-1 rounded-md`}
        disabled={isComplete}
        onClick={() => console.log("clicked")}
      >
        {isComplete ? "완료" : "지원"}
      </button>
    </>
  );
}
