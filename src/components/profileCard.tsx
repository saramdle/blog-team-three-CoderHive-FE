import ProfileIcon from "@/lib/icons/profileIcon";
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
            <ProfileIcon width="full" height="full" color="text-gray-700" />
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
