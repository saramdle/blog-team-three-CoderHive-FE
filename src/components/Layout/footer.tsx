import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="mt-8 px-8 py-4 w-full h-60 flex justify-between border-t border-gray-200">
      <div className="pb-6 flex flex-col justify-between text-xs text-gray-600">
        <div className="relative w-40 h-20">
          <Image
            src="/coderhive.svg"
            alt="CoderHive logo"
            fill
            sizes="100%"
            priority
          />
        </div>
        <div>
          <h3>
            Copyright ⓒ 2023 Team 허무한 샘, from Saramdle. All rights reserved.
          </h3>
        </div>
      </div>

      <div className="p-8 grid grid-cols-3 gap-x-14 text-sm leading-6 text-gray-900 max-lg:hidden">
        <div className="flex flex-col items-center gap-y-2">
          <h3 className="mb-2 text-base font-bold">바로가기</h3>
          <Link
            href="/study"
            className="hover:-translate-y-[2px] duration-100 ease-in"
          >
            스터디
          </Link>
          <Link
            href="/project"
            className="hover:-translate-y-[2px] duration-100 ease-in"
          >
            프로젝트
          </Link>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <h3 className="mb-2 text-base font-bold">관련 사이트</h3>
          <Link
            href="https://letspl.me/"
            className="hover:-translate-y-[2px] duration-100 ease-in"
          >
            렛플
          </Link>
          <Link
            href="https://github.com/saramdle/blog-team-three-coderhive-fe"
            className="hover:-translate-y-[2px] duration-100 ease-in"
          >
            프론트 깃허브
          </Link>
          <Link
            href="https://github.com/saramdle/blog-team-three-coderhive-be"
            className="hover:-translate-y-[2px] duration-100 ease-in"
          >
            백엔드 깃허브
          </Link>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <h3 className="mb-2 text-base font-bold">이용약관</h3>
          <button className="hover:-translate-y-[2px] duration-100 ease-in">
            이용약관
          </button>
          <button className="hover:-translate-y-[2px] duration-100 ease-in">
            개인정보취급방침
          </button>
        </div>
      </div>
    </div>
  );
}
