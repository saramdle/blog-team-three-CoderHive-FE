import { LoginButtonProps } from "../login";
import FacebookIcon from "@/lib/icons/facebookIcon";

export default function FacebookLogin({ isLoginMode }: LoginButtonProps) {
  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-white bg-blue-600 
      hover:bg-gray-50 hover:text-blue-600 hover:border hover:border-blue-600
      transition-all ease-in duration-100"
    >
      <FacebookIcon width={6} height={6} />
      <span className="absolute">
        페이스북 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </span>
    </button>
  );
}
