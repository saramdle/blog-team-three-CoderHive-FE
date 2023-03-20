import RecruitStatus from "./recruitStatus";

type PostSideViewProps = {
  recruitInfo: [string, number, number][];
  skills: string[];
  platforms: string[] | null;
};

export default function PostSideView({
  recruitInfo,
  skills,
  platforms,
}: PostSideViewProps) {
  const renderRecruitInfo = recruitInfo.map((info, index) => {
    return (
      <RecruitStatus
        key={index}
        field={info[0]}
        current={info[2]}
        goal={info[1]}
      />
    );
  });

  const renderSkills = skills.map((skill, index) => {
    return (
      <span
        key={index}
        className="px-2 py-1 text-sm rounded-md cursor-default bg-gray-200 hover:bg-gray-300"
      >
        {skill}
      </span>
    );
  });

  const renderPlatforms = platforms?.map((platform, index) => {
    return (
      <span
        key={index}
        className="px-2 py-1 text-sm rounded-md cursor-default bg-gray-200 hover:bg-gray-300"
      >
        {platform}
      </span>
    );
  });

  return (
    <div>
      <h3 className="mb-4 py-4 font-bold text-base border-b border-gray-200">
        모집 현황
      </h3>
      <div className="w-fit grid grid-cols-3 gap-x-8 gap-y-4 text-sm font-medium">
        {renderRecruitInfo}
      </div>
      <h3 className="my-4 py-4 font-bold text-base border-b border-gray-200">
        기술 / 언어
      </h3>
      <div className="flex flex-wrap gap-2">{renderSkills}</div>
      {platforms && (
        <>
          <h3 className="my-4 py-4 font-bold text-base border-b border-gray-200">
            출시 플랫폼
          </h3>
          <div className="flex flex-wrap gap-2">{renderPlatforms}</div>
        </>
      )}
    </div>
  );
}
