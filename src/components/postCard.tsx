import Link from "next/link";
import Image from "next/image";

type PostCardProps = {
  postId: string;
  type: string;
  status: string;
  field: string;
  title: string;
  location: string;
  skills: string[];
  likes: number;
  hasImg: boolean;
};

export default function PostCard({
  postId,
  type,
  status,
  field,
  title,
  location,
  skills,
  likes,
  hasImg,
}: PostCardProps) {
  const renderSkills = skills.map((skill, index) => {
    return (
      <div key={index} className="px-2 py-1 rounded-md bg-gray-100">
        {skill}
      </div>
    );
  });

  return (
    <article
      className="relative p-4 flex max-w-xl flex-col items-start rounded-md border border-gray-600 overflow-hidden
        hover:shadow-lg hover:-translate-y-1 ease-in duration-200"
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
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            stroke={hasImg ? "white" : "none"}
            className=" h-4 w-4 text-gray-600"
          >
            <path
              fill="currentColor"
              d="M11.8 1c-1.682 0-3.129 1.368-3.799 2.797C7.33 2.368 5.883 1 4.201 1a4.202 4.202 0 00-4.2 4.2c0 4.716 4.758 5.953 8 10.616 3.065-4.634 8-6.05 8-10.616 0-2.319-1.882-4.2-4.2-4.2z"
            />
          </svg>
        </button>
      </div>

      <div className="group relative">
        <h5 className="mt-5 text-sm leading-6 text-gray-600">{field}</h5>
        <h3 className="mt-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link
            href={{
              pathname: "/post/[id]",
              query: { id: postId },
            }}
          >
            <span className="absolute inset-0"></span>
            {title}
          </Link>
        </h3>
        <h5 className="mt-3 text-sm leading-6 text-gray-600">{location}</h5>
      </div>

      <div
        className="mt-3 mb-4 h-full flex flex-wrap items-center content-center gap-x-2 gap-y-2 
          text-xs cursor-default"
      >
        {renderSkills}
      </div>

      <div className="relative mt-auto w-full flex justify-between items-center text-xs text-gray-600 cursor-default">
        <div className="flex items-center">
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className=" h-3 w-3 text-gray-700"
          >
            <path
              fill="currentColor"
              d="M11.8 1c-1.682 0-3.129 1.368-3.799 2.797C7.33 2.368 5.883 1 4.201 1a4.202 4.202 0 00-4.2 4.2c0 4.716 4.758 5.953 8 10.616 3.065-4.634 8-6.05 8-10.616 0-2.319-1.882-4.2-4.2-4.2z"
            />
          </svg>
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
