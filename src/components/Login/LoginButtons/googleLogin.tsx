import { LoginButtonProps } from "../login";
import GoogleIcon from "@/lib/icons/googleIcon";

export default function GoogleLogin({ isLoginMode }: LoginButtonProps) {
  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-gray-900 bg-white 
      hover:bg-gray-900 hover:text-white border border-gray-900
      transition-all ease-in duration-100"
    >
      <GoogleIcon width={5} height={5} />
      <span className="absolute">
        구글 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </span>
    </button>
  );
}
