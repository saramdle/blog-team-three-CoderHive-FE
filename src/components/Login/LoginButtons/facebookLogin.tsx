import { LoginButtonProps } from "../login";

export default function FacebookLogin({ isLoginMode }: LoginButtonProps) {
  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-white bg-blue-600 
      hover:bg-gray-50 hover:text-blue-600 hover:border hover:border-blue-600
      transition-all ease-in duration-100"
    >
      <svg
        className="mr-auto h-6 w-6 text-inherit"
        fill="currentColor"
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
      </svg>
      <span className="absolute">
        페이스북 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </span>
    </button>
  );
}
