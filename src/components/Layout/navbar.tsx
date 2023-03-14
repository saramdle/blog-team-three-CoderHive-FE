import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const onMenuOpenClicked = () => {
    setIsMenuOpen(true);
  };

  const onMenuCloseClicked = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 bg-gray-100 z-30 border-b border-gray-600">
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
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            스터디
          </Link>
          <Link
            href="/projects"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            프로젝트
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/login"
            className=" text-xs font-semibold leading-6 text-gray-600"
          >
            로그인 <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="lg:hidden flex flex-1 justify-end">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={onMenuOpenClicked}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
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
      {/* <!-- 모바일 메뉴 --> */}
      {isMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                onClick={onMenuCloseClicked}
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
                    href="/"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    스터디
                  </Link>
                  <Link
                    href="/projects"
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    프로젝트
                  </Link>
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    로그인
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
