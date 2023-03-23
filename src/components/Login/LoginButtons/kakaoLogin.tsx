import { LoginButtonProps } from "../login";
import KakaoIcon from "@/lib/icons/kakaoIcon";

export default function KakaoLogin({ isLoginMode }: LoginButtonProps) {
  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-white bg-yellow-400 
      hover:bg-gray-50 hover:text-yellow-400 hover:border hover:border-yellow-400 
      transition-all ease-in duration-100"
    >
      <KakaoIcon width={7} height={7} />
      <span className="absolute">
        카카오 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </span>
    </button>
  );
}
