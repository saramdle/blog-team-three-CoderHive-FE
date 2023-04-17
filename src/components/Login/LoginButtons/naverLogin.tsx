import { MemberAPI } from "@/api/memberAPI";
import { setIsLoginModalOpen } from "@/store/app/appSlice";
import { useAppDispatch } from "@/store/hooks";

import { LoginButtonProps } from "../login";

export default function NaverLogin({ isLoginMode }: LoginButtonProps) {
  const dispatch = useAppDispatch();

  const onLoginClicked = async () => {
    MemberAPI.login("naver");

    // console.log(res);
    dispatch(setIsLoginModalOpen(false));
  };

  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-green-600 bg-white border border-green-600
      hover:bg-green-600 hover:text-white
      transition-all ease-in duration-100"
      onClick={onLoginClicked}
    >
      <svg
        className="mr-auto ml-1 h-5 w-5 text-inherit"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727v12.845z" />
      </svg>
      <span className="absolute">
        네이버 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </span>
    </button>
  );
}
