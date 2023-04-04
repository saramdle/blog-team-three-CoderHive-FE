import Link from "next/link";

export default function PostRecruit() {
  const renderMemberTableRow = 테스트_인원관리_정보.memberList.map((apply) => {
    return (
      <tr key={apply.applyId} className="border-b border-gray-100">
        <td>{apply.applyJob}</td>
        <td className="text-ellipsis overflow-hidden whitespace-nowrap">
          <Link
            href={{
              pathname: "/profile/[id]",
              query: { id: apply.memberId },
            }}
            className="underline underline-offset-2 hover:text-gray-500"
          >
            {apply.nickname}
          </Link>
        </td>
        <td>
          <button
            className="px-2 py-1.5 w-full text-center text-xs font-semibold rounded-md 
            border border-gray-600 hover:bg-gray-100"
          >
            방출
          </button>
        </td>
      </tr>
    );
  });

  const renderApplyTableRow = 테스트_인원관리_정보.applyList.map((apply) => {
    return (
      <tr key={apply.applyId} className="border-b border-gray-100">
        <td>{apply.applyJob}</td>
        <td>
          <Link
            href={{
              pathname: "/profile/[id]",
              query: { id: apply.memberId },
            }}
            className="underline underline-offset-2 hover:text-gray-500"
          >
            {apply.nickname}
          </Link>
        </td>
        <td>
          <button
            className="px-2 py-1.5 w-full text-center text-xs font-semibold rounded-md 
            border border-gray-600 hover:bg-gray-100"
          >
            거절
          </button>
        </td>
        <td>
          <button
            className="px-2 py-1.5 w-full text-center text-xs text-white font-semibold  
            rounded-md bg-indigo-600 hover:bg-indigo-500"
          >
            수락
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="isolate bg-white py-20 px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          모임 인원 관리
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          모임 신청과 참여하고 있는 인원들을 관리해보세요
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              현재 모임 멤버
            </label>
            <table className="mt-4 w-full text-left">
              <thead className="text-sm border-b">
                <tr>
                  <th className="w-24">담당 분야</th>
                  <th>멤버</th>
                  <th className="w-20"></th>
                </tr>
              </thead>
              <tbody className="text-sm">{renderMemberTableRow}</tbody>
            </table>
          </div>
          <div className="mt-10 sm:col-span-2">
            <label className="block text-sm font-bold leading-6 text-gray-900">
              모임 참가 신청
            </label>
            <table className="mt-4 w-full text-left">
              <thead className="text-sm border-b">
                <tr>
                  <th className="w-24">신청 분야</th>
                  <th>신청자</th>
                  <th className="w-20"></th>
                  <th className="w-20"></th>
                </tr>
              </thead>
              <tbody className="text-sm">{renderApplyTableRow}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

let 테스트_인원관리_정보 = {
  applyList: [
    {
      applyId: 1,
      applyJob: "웹백엔드",
      memberId: 1,
      nickname: "한샘",
      field: "웹서버",
      level: "고수",
    },
    {
      applyId: 2,
      applyJob: "웹백엔드",
      memberId: 2,
      nickname: "HSM",
      field: "웹서버",
      level: "고수",
    },
  ], // applyJob 기준으로 정렬해서 보내주면 좋겠음
  memberList: [
    {
      applyId: 1,
      applyJob: "웹백엔드",
      memberId: 1,
      nickname: "한샘",
      field: "웹서버",
      level: "고수",
    },
    {
      applyId: 2,
      applyJob: "웹백엔드",
      memberId: 2,
      nickname: "아주이름이긴닉네임을테스트하고있습니다",
      field: "웹서버",
      level: "고수",
    },
  ],
};
