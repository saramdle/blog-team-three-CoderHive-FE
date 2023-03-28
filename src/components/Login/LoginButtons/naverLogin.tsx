import { useRouter } from "next/router";

import { useAppDispatch } from "@/store/hooks";
import { setIsLoginModalOpen } from "@/store/app/appSlice";
import { LoginButtonProps } from "../login";
import NaverIcon from "@/lib/icons/naverIcon";

export default function NaverLogin({ isLoginMode }: LoginButtonProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onLoginClicked = () => {
    router.push("/register");

    document.documentElement.style.overflowY = "auto";

    dispatch(setIsLoginModalOpen(false));
  };

  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-white bg-green-600
      hover:bg-gray-50 hover:text-green-600 hover:border hover:border-green-600
      transition-all ease-in duration-100"
      onClick={onLoginClicked}
    >
      <NaverIcon width={5} height={5} />
      <span className="absolute">
        네이버 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </span>
    </button>
  );
}
