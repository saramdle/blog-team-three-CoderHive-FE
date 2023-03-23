import ProfileIcon from "@/lib/icons/profileIcon";
import Image from "next/image";
import Link from "next/link";

type ProfileCardProps = {
  userId: string;
  imageUrl: string;
  nickname: string;
  field: string;
  level: string;
  resp: string;
};

export default function ProfileCard({
  userId,
  imageUrl,
  nickname,
  field,
  level,
  resp,
}: ProfileCardProps) {
  return (
    <div
      className="w-fit p-4 rounded-md border border-gray-600
        hover:shadow-lg hover:-translate-y-1 ease-in duration-200"
    >
      <div className="flex items-center">
        <div className="relative w-20 h-20 rounded-md overflow-hidden">
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
            <ProfileIcon width="full" height="full" color="text-gray-700" />
          )}
        </div>
        <div className="ml-4 flex flex-col">
          <Link
            href={{
              pathname: "/profile/[id]",
              query: { id: userId },
            }}
            className="text-xl"
          >
            {nickname}
          </Link>
          <span className="font-normal text-sm text-gray-600">
            {field} {level}
          </span>
          <span className="mt-2 font-normal text-sm">
            <strong>담당 분야 : </strong>
            {resp}
          </span>
        </div>
      </div>
    </div>
  );
}
