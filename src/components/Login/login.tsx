import { useState } from "react";

import { setIsLoginModalOpen } from "@/store/app/appSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import FacebookLogin from "./facebookLogin";
import GoogleLogin from "./googleLogin";
import KakaoLogin from "./kakaoLogin";
import NaverLogin from "./naverLogin";

export type LoginButtonProps = {
  isLoginMode: boolean;
};

export default function Login() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const isLoginModalOpen = useAppSelector(
    (state) => state.app.isLoginModalOpen
  );
  const dispatch = useAppDispatch();

  const onModalCloseClicked = (e: React.MouseEvent<Element>) => {
    e.stopPropagation();
    document.documentElement.style.overflowY = "auto";
    dispatch(setIsLoginModalOpen(false));
    setIsLoginMode(true);
  };

  const toggleLoginMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div
      className={`${
        isLoginModalOpen ? "visible" : "invisible opacity-0"
      } relative z-50 transition-all ease-in duration-200`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`${
          isLoginModalOpen ? "visible" : "invisible opacity-0"
        } fixed inset-0 bg-gray-500 bg-opacity-75 transition-all ease-in duration-200`}
      ></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="flex min-h-full items-center justify-center p-4 text-center 
            sm:items-center sm:p-0"
          onClick={(e) => onModalCloseClicked(e)}
        >
          <div
            className="relative my-8 w-full max-w-lg transform overflow-hidden 
              rounded-lg bg-white text-left shadow-xl transition-all"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div
              className="bg-gray-50 px-4 py-3 flex justify-between items-center 
                border-b border-gray-200"
            >
              <h3
                className="ml-2 text-xl font-bold font leading-6 text-gray-900"
                id="modal-title"
              >
                {isLoginMode ? "로그인" : "회원가입"}
              </h3>
              <button
                type="button"
                className=" rounded-md bg-white p-1 text-sm font-semibold text-gray-900 
                  shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={(e) => onModalCloseClicked(e)}
              >
                <span className="sr-only">Close login</span>
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

            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center">
                <div className="mt-2 ">
                  <NaverLogin isLoginMode={isLoginMode} />
                  <KakaoLogin isLoginMode={isLoginMode} />
                  <FacebookLogin isLoginMode={isLoginMode} />
                  <GoogleLogin isLoginMode={isLoginMode} />
                </div>
                <button
                  className="mt-4 px-8 py-2 text-sm text-gray-500
                    hover:text-gray-900
                    transition-all ease-in duration-100"
                  onClick={toggleLoginMode}
                >
                  {isLoginMode ? "회원가입" : "로그인"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
