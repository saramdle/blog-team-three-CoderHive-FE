import Link from "next/link";

type PostCardProps = {
  postId: string;
  type: string;
  field: string;
  title: string;
  location: string;
  skills: string[];
  likes: number;
};

export default function PostCard({
  postId,
  type,
  field,
  title,
  location,
  skills,
  likes,
}: PostCardProps) {
  const renderSkills = skills.map((skill, index) => {
    return <div key={index}>{skill}</div>;
  });

  return (
    <article className="p-4 flex max-w-xl flex-col items-start rounded-md border border-gray-600 hover:shadow-lg hover:ease-in duration-200 hover:-translate-y-1">
      <div className="w-full flex justify-between items-center gap-x-4 text-xs cursor-default">
        <div className="py-2 px-6 font-medium border border-gray-600">
          {type}
        </div>
        <button type="button" className="mx-2 rounded-md text-gray-700">
          <span className="sr-only">Like the post</span>
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className=" h-4 w-4 text-gray-700"
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

      <div className="mt-3 mb-4 flex flex-wrap items-center gap-x-4 text-xs cursor-default">
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
