import Link from "next/link";
import RecruitStatus from "./recruitStatus";

type PostSideViewProps = {
  postId: string;
  recruitInfo: [string, number, number][];
  skills: string[];
  platforms: string[] | null;
};

export default function PostSideView({
  postId,
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
      <Link
        className="block mb-4 py-2 w-full text-center font-semibold rounded-md text-white 
        bg-indigo-600 hover:bg-indigo-500"
        href={{
          pathname: "/post/edit/[id]",
          query: { id: postId },
        }}
      >
        포스트 수정
      </Link>
      <h3 className="mb-4 py-4 font-bold text-base border-b border-gray-200">
        모집 현황
      </h3>
      <div className="w-full grid grid-cols-3 gap-x-8 gap-y-4 text-sm font-medium">
        {renderRecruitInfo}
      </div>
      <Link
        className="block mt-4 py-2 w-full text-center text-sm font-semibold rounded-md 
          border border-gray-600 hover:bg-gray-100"
        href={{
          pathname: "/post/recruit/[id]",
          query: { id: postId },
        }}
      >
        신청 & 인원 관리
      </Link>

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
