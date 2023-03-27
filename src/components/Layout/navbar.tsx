import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useAppDispatch } from "@/store/hooks";
import { setIsLoginModalOpen } from "@/store/app/appSlice";
import SideBar from "./sidebar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string>(""); // 임시 로그인 확인 변수
  const [profile, setProfile] = useState<string>("/test.jpg"); // 임시 유저 프로필사진
  const dispatch = useAppDispatch();

  const onModalOpenClicked = () => {
    document.documentElement.style.overflowY = "hidden";
    dispatch(setIsLoginModalOpen(true));
  };

  return (
    <header className="sticky top-0 bg-gray-100 z-50 border-b border-gray-600">
      <nav
        className="flex items-center justify-between mx-auto max-w-7xl p-6 lg:px-8 h-14 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/logo_text.svg"
              alt="CoderHive logo"
              className="h-10 w-auto"
              width="0"
              height="0"
              sizes="100vw"
              priority
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-14">
          <Link
            href="/study"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            스터디
          </Link>
          <Link
            href="/project"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            프로젝트
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!user ? (
            <button
              className="text-xs font-semibold leading-6 text-gray-700"
              onClick={() => setUser("공기밥")}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M14 8V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7a2 2 0 002-2v-2" />
                <path d="M20 12H7l3-3m0 6l-3-3" />
              </svg>
            </button>
          ) : (
            <button
              className="relative w-7 h-7 rounded-full overflow-hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              {profile ? (
                <Image
                  src={profile}
                  alt="Image"
                  fill
                  sizes="100%, 100%"
                  style={{ objectFit: "cover" }}
                  priority
                />
              ) : (
                <svg
                  className="w-full h-full text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm7 4v2a3 3 0 106 0V6a3 3 0 10-6 0zm11 9.14A15.93 15.93 0 0010 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
                </svg>
              )}
            </button>
          )}
        </div>
        <div className="lg:hidden flex flex-1 justify-end">
          <button
            type="button"
            className="-m-2.5 p-2.5 rounded-md text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 512 512"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit={10}
                strokeWidth={32}
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
          </button>
        </div>
      </nav>
      <SideBar
        user={user}
        setUser={setUser}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
}
