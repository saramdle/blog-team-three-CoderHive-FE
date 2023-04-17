import { MemberAPI } from "@/api/memberAPI";
import { setIsLoginModalOpen } from "@/store/app/appSlice";
import { useAppDispatch } from "@/store/hooks";

import { LoginButtonProps } from "../login";

export default function GoogleLogin({ isLoginMode }: LoginButtonProps) {
  const dispatch = useAppDispatch();

  const onLoginClicked = async () => {
    MemberAPI.login("google");

    // console.log(res);
    dispatch(setIsLoginModalOpen(false));
  };

  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-gray-900 bg-white border-gray-900
      hover:bg-gray-900 hover:text-white border 
      transition-all ease-in duration-100"
      onClick={onLoginClicked}
    >
      <svg
        className="mr-auto h-5 w-5 text-inherit"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path d="M15.545 6.558a9.42 9.42 0 01.139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 118 0a7.689 7.689 0 015.352 2.082l-2.284 2.284A4.347 4.347 0 008 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 000 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 001.599-2.431H8v-3.08h7.545z" />
      </svg>
      <span className="absolute">
        구글 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </span>
    </button>
  );
}
