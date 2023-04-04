import Image from "next/image";
import Link from "next/link";

type ProfileCardProps = {
  userId: string | number;
  imageUrl: string;
  nickname: string;
  field: string;
  level: string;
};

export default function ProfileCard({
  userId,
  imageUrl,
  nickname,
  field,
  level,
}: ProfileCardProps) {
  return (
    <div
      className="w-48 p-3 rounded-md border border-gray-600
        hover:shadow-lg hover:-translate-y-1 ease-in duration-200"
    >
      <div className="flex items-center">
        <div className="relative w-12 h-12 rounded-md overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={"User Profile"}
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
        <div className="ml-4 flex flex-col gap-y-1">
          <Link
            href={{
              pathname: "/profile/[id]",
              query: { id: userId },
            }}
            className="text-lg"
          >
            {nickname}
          </Link>
          <span className="font-normal text-xs text-gray-600">
            {field} {level}
          </span>
        </div>
      </div>
    </div>
  );
}
