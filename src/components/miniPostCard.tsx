import Link from "next/link";
import Image from "next/image";

import HeartIcon from "@/lib/icons/heartIcon";

export type MiniPostCardProps = {
  postId: string;
  status: string;
  field: string;
  title: string;
  location: string;
  likes: number;
  hasImg: boolean;
};

export default function MiniPostCard({
  postId,
  status,
  field,
  title,
  location,
  likes,
  hasImg,
}: MiniPostCardProps) {
  return (
    <article
      className="relative flex-shrink-0 p-4 flex w-64 h-64 flex-col items-start rounded-md border border-gray-600 
       bg-white overflow-hidden hover:shadow-lg hover:-translate-y-1 ease-in duration-200"
    >
      {hasImg && (
        <div className="absolute inset-0 w-full h-24">
          <Image
            src="/test.jpg"
            alt="이미지"
            fill
            sizes="100%, 100%"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      )}

      <div
        className={`${
          hasImg && "mb-10"
        } w-full flex justify-between items-center gap-x-4 text-xs cursor-default`}
      >
        <div
          className={`${
            hasImg
              ? "text-white bg-gray-800 border-gray-700"
              : "bg-white border-gray-600"
          } z-10 py-2 px-6 font-medium border`}
        >
          {status}
        </div>
        <button type="button" className=" z-10 mx-2 rounded-md">
          <span className="sr-only">Like the post</span>
          <HeartIcon
            width={4}
            height={4}
            stroke={hasImg ? "text-gray-600" : "none"}
            style={hasImg ? "text-white" : "text-gray-600"}
          />
        </button>
      </div>

      <div className="my-auto group relative">
        <h5 className="mt-5 text-sm leading-6 text-gray-600">{field}</h5>
        <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link
            href={{
              pathname: "/post/[id]",
              query: { id: postId },
            }}
          >
            <span className="line-clamp-1">{title}</span>
          </Link>
        </h3>
        <h5 className="mt-3 text-sm leading-6 text-gray-600">{location}</h5>
      </div>

      <div className="relative mt-auto w-full flex justify-between items-center text-xs text-gray-600 cursor-default">
        <div className="flex items-center">
          <HeartIcon width={3} height={3} color="text-gray-700" />
          <span className="ml-1">{likes}</span>
        </div>
        <div>
          <span>모집완료</span>
          <span className="ml-2 text-gray-900">1 / 4</span>
        </div>
      </div>
    </article>
  );
}
