import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";

type SideBarProps = {
  user: string;
  setUser: Dispatch<SetStateAction<string>>;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SideBar({
  user,
  setUser,
  isMenuOpen,
  setIsMenuOpen,
}: SideBarProps) {
  const onLogoutClicked = () => {
    setUser("");
    setIsMenuOpen(false);
  };

  return (
    <aside
      role="dialog"
      aria-modal="true"
      className={`${
        isMenuOpen ? "translate-0" : "translate-x-full"
      } fixed top-0 right-0 z-50 px-6 py-6 w-full h-screen overflow-y-auto bg-white
        sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform ease-in`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="-m-1.5 p-1.5">
          <Image
            src="/logo_text.svg"
            alt="CoderHive logo"
            className="h-10 w-auto"
            width="0"
            height="0"
            sizes="100vw"
          />
        </Link>
        <button
          type="button"
          className="-m-2.5 rounded-md p-2.5 text-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <Link
              href="/study"
              className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              스터디
            </Link>
            <Link
              href="/project"
              className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              프로젝트
            </Link>
          </div>
          <div className="space-y-2 py-6">
            {!user ? (
              <button
                className="-mx-3 py-2 px-3 w-full text-left text-base font-semibold leading-7
                    rounded-lg text-gray-900 hover:bg-gray-50"
                onClick={() => setUser("공기밥")}
              >
                로그인
              </button>
            ) : (
              <>
                <Link
                  href={"/my"}
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  마이페이지
                </Link>
                <button
                  className="-mx-3 py-2 px-3 w-full text-left text-base font-semibold leading-7
                      rounded-lg text-gray-900 hover:bg-gray-50"
                  onClick={onLogoutClicked}
                >
                  로그아웃
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
}
