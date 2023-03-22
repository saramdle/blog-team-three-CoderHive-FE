import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { useAppDispatch } from "@/store/hooks";
import { setIsLoginModalOpen } from "@/store/app/appSlice";
import MenuIcon from "@/lib/icons/menuIcon";
import LoginIcon from "@/lib/icons/loginIcon";
import ProfileIcon from "@/lib/icons/profileIcon";
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
              <LoginIcon width={6} height={6} />
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
                <ProfileIcon width="full" height="full" color="text-gray-400" />
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
            <MenuIcon width={6} height={6} />
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
