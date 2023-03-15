import { LoginButtonProps } from "./login";

export default function NaverLogin({ isLoginMode }: LoginButtonProps) {
  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-white bg-green-600 
      hover:bg-gray-50 hover:text-green-600 hover:border hover:border-green-600
      transition-all ease-in duration-100"
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
