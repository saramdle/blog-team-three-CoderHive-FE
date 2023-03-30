import { useState } from "react";

import TextViewer from "@/components/Post/textViewer";
import initialBodyText from "@/lib/initialBodyText";
import PostSideView from "@/components/Post/postSideView";
import ProfileCard from "@/components/profileCard";
import Comment from "@/components/Post/comment";

export default function Post() {
  const [bodyText, setBodyText] = useState<string>(initialBodyText);
  const [comment, setComment] = useState<string>("");

  const renderProfileCards = 테스트_멤버정보.map((user, index) => {
    return (
      <ProfileCard
        key={index}
        userId={user.userId}
        imageUrl={user.imageUrl}
        nickname={user.nickname}
        field={user.field}
        level={user.level}
        resp={user.resp}
      />
    );
  });

  const renderComments = 테스트_댓글정보.map((comment, index) => {
    return (
      <Comment
        key={index}
        commentId={comment.commentId}
        nickname={comment.nickname}
        imageUrl={comment.imageUrl}
        modifiedAt={comment.modifiedAt}
        content={comment.content}
        replies={comment.replies}
      />
    );
  });

  return (
    <div className="bg-white py-10 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-6 px-8 pb-8 border-b border-gray-300">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            스터디
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            프론트엔드 개발자 구함!
          </h1>
          <h3 className="mt-4 mb-2 text-base text-gray-700">프론트엔드 개발</h3>
          <h4 className="mb-2 text-base text-gray-700">서울 / 경기</h4>
          <div className="font-semibold text-base text-gray-800">모집중</div>
        </div>

        <div className="px-8 grid gap-y-16 gap-x-8">
          <div
            className="border-0 border-gray-300 lg:sticky lg:top-4 lg:col-start-2 lg:row-start-1 lg:w-80
            lg:pl-4 lg:border-l"
          >
            <PostSideView
              postId={"1"}
              recruitInfo={테스트_지원정보}
              skills={테스트_스킬정보}
              platforms={테스트_플랫폼정보}
            />
          </div>
          <div>
            <div className="text-base leading-5 text-gray-700">
              <div className="mt-6">
                <TextViewer bodyText={bodyText} />
              </div>
            </div>

            <div className="mt-12 py-4 font-bold border-t border-gray-400">
              <h3 className="mb-4 font-bold text-base">리더 정보</h3>
              <div className="mb-4 flex flex-wrap gap-2">
                <ProfileCard
                  userId={테스트_리더정보.userId}
                  imageUrl={테스트_리더정보.imageUrl}
                  nickname={테스트_리더정보.nickname}
                  field={테스트_리더정보.field}
                  level={테스트_리더정보.level}
                  resp={테스트_리더정보.resp}
                />
              </div>

              <h3 className="mb-4 font-bold text-base">멤버 정보</h3>
              <div className="flex flex-wrap gap-2">{renderProfileCards}</div>
            </div>

            <div className="mt-12 py-4 border-t border-gray-400">
              <label
                htmlFor="comment"
                className="block mb-4 font-bold text-base"
              >
                댓글 {테스트_댓글정보.length}개
              </label>
              <div className="mt-2">
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  placeholder="게시물 작성자에게 궁금한 점들을 물어보세요."
                  className="block p-4 w-full text-sm leading-6 text-gray-900 
                    rounded-md border border-gray-400 shadow-sm placeholder:text-gray-400 !outline-none"
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <div className="mt-3 pb-3 w-full flex justify-between items-center border-b border-gray-300">
                  <div className="text-sm leading-6 text-gray-600">
                    <strong>{comment.length}</strong> / 1000
                  </div>
                  <button className="px-6 py-2 text-sm text-white rounded-md bg-indigo-600 hover:bg-indigo-500">
                    등록
                  </button>
                </div>
              </div>
              {renderComments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

let 테스트_지원정보: [string, number, number][] = [
  ["UI/UX 디자인", 2, 2],
  ["웹프론트엔드", 2, 2],
  ["웹서버", 3, 1],
];

let 테스트_스킬정보 = [
  "Flutter",
  "Python",
  "JavaScript",
  "TypeScript",
  "Django",
];

let 테스트_플랫폼정보 = ["Android", "IOS", "Web"];

let 테스트_리더정보 = {
  userId: "1",
  imageUrl: "/test.jpg",
  nickname: "공기밥",
  field: "웹프론트엔드",
  level: "초보",
  resp: "웹프론트엔드",
};

interface ProfileCard {
  userId: string;
  imageUrl: string;
  nickname: string;
  field: string;
  level: string;
  resp: string;
}

let 테스트_멤버정보: ProfileCard[] = [
  {
    userId: "2",
    imageUrl: "",
    nickname: "한샘",
    field: "웹서버",
    level: "고수",
    resp: "웹백엔드",
  },
  {
    userId: "3",
    imageUrl: "",
    nickname: "HSM",
    field: "웹서버",
    level: "고수",
    resp: "웹백엔드",
  },
];

let 테스트_댓글정보 = [
  {
    commentId: "1",
    nickname: "공기밥",
    imageUrl: "/test.jpg",
    modifiedAt: "23.03.24 11:40",
    content: "혹시 프론트엔드 직군 추가 모집 계획있나요?",
    replies: [
      {
        commentId: "5",
        nickname: "HSM",
        imageUrl: "",
        modifiedAt: "23.03.27 12:12",
        content: "없습니다.",
      },
    ],
  },
  {
    commentId: "3",
    nickname: "한샘",
    imageUrl: "",
    modifiedAt: "23.03.26 17:20",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore, amet fugiat voluptatibus consectetur minima nostrum aperiam quod. Voluptatibus fugiat expedita nulla ratione, fuga beatae eligendi veritatis sequi nisi unde.",
    replies: [
      {
        commentId: "4",
        nickname: "HSM",
        imageUrl: "",
        modifiedAt: "23.03.27 10:12",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore, amet fugiat voluptatibus consectetur minima nostrum aperiam quod. Voluptatibus fugiat expedita nulla ratione, fuga beatae eligendi veritatis sequi nisi unde.",
      },
      {
        commentId: "5",
        nickname: "한샘",
        imageUrl: "",
        modifiedAt: "23.03.27 12:12",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore, amet fugiat voluptatibus consectetur minima nostrum aperiam quod. Voluptatibus fugiat expedita nulla ratione, fuga beatae eligendi veritatis sequi nisi unde.",
      },
    ],
  },
  {
    commentId: "6",
    nickname: "JIN",
    imageUrl: "",
    modifiedAt: "23.03.28 13:40",
    content: "여기 사람있어요...",
    replies: [],
  },
];
