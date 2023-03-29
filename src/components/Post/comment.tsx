import { useState } from "react";
import Image from "next/image";

type Reply = {
  commentId: string;
  nickname: string;
  imageUrl: string;
  modifiedAt: string;
  content: string;
};

type CommentProps = {
  commentId: string;
  nickname: string;
  imageUrl: string;
  modifiedAt: string;
  content: string;
  replies: Reply[];
};

export default function Comment({
  commentId,
  nickname,
  imageUrl,
  modifiedAt,
  content,
  replies,
}: CommentProps) {
  const [isWriteOpen, setIsWriteOpen] = useState<boolean>(false);
  const [comment, setComment] = useState<string>("");
  const [isReplyOpen, setIsReplyOpen] = useState<boolean>(false);

  const renderReplies = replies.map((reply) => {
    return (
      <div key={reply.commentId} className="mt-4">
        <div className="w-full flex">
          <div className="relative w-14 h-14 rounded-md overflow-hidden">
            {reply.imageUrl ? (
              <Image
                src={reply.imageUrl}
                alt="User Profile"
                fill
                sizes="100%, 100%"
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <svg
                className="h-full w-full text-gray-700"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm7 4v2a3 3 0 106 0V6a3 3 0 10-6 0zm11 9.14A15.93 15.93 0 0010 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
              </svg>
            )}
          </div>
          <div className="w-full">
            <div className="w-full flex justify-between items-center">
              <span className="ml-4 font-bold">{reply.nickname}</span>
              <span className="font-light text-xs text-gray-400">
                {reply.modifiedAt}
              </span>
            </div>
            <p className="ml-4 mt-2 text-sm">{reply.content}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="py-8 border-b border-gray-300">
      <div className="w-full flex">
        <div className="relative w-14 h-14 rounded-md overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt="User Profile"
              fill
              sizes="100%, 100%"
              style={{ objectFit: "cover" }}
              priority
            />
          ) : (
            <svg
              className="h-full w-full text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm7 4v2a3 3 0 106 0V6a3 3 0 10-6 0zm11 9.14A15.93 15.93 0 0010 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
            </svg>
          )}
        </div>
        <div className="w-full">
          <div className="w-full flex justify-between items-center">
            <span className="ml-4 font-bold">{nickname}</span>
            <span className="font-light text-xs text-gray-400">
              {modifiedAt}
            </span>
          </div>

          <div className="ml-4 mt-2">
            <p className="text-sm">{content}</p>

            <div className="mt-4 flex items-center text-xs ">
              {replies.length > 0 && (
                <button
                  className="mr-4 flex items-center hover:-translate-y-[1px] duration-200"
                  onClick={() => setIsReplyOpen(!isReplyOpen)}
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    className={`${
                      isReplyOpen ? "rotate-180" : "rotate-0"
                    } w-3 h-3 ease-in duration-200`}
                  >
                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" />
                  </svg>
                  <span className="ml-1">댓글 {replies.length}개</span>
                </button>
              )}

              <button
                className={`px-4 py-1.5 rounded-lg hover:bg-gray-100`}
                onClick={() => setIsWriteOpen(!isWriteOpen)}
              >
                답글 {isWriteOpen && "닫기"}
              </button>
            </div>
            {isWriteOpen && (
              <div className="mt-2">
                <textarea
                  id="comment"
                  name="comment"
                  rows={2}
                  className="block px-3 py-2 w-full text-sm leading-6 text-gray-900 
                    rounded-md border border-gray-400 shadow-sm !outline-none"
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                ></textarea>
                <div className="mt-3 pb-3 w-full flex justify-between items-center text-xs">
                  <div className=" leading-6 text-gray-600">
                    <strong>{comment.length}</strong> / 1000
                  </div>
                  <div>
                    <button
                      className="px-4 py-1.5 rounded-md hover:bg-gray-100"
                      onClick={() => {
                        setComment("");
                        setIsWriteOpen(false);
                      }}
                    >
                      취소
                    </button>
                    <button className="ml-4 px-4 py-1.5 text-white rounded-md bg-indigo-600 hover:bg-indigo-500">
                      등록
                    </button>
                  </div>
                </div>
              </div>
            )}
            {isReplyOpen && renderReplies}
          </div>
        </div>
      </div>
    </div>
  );
}
