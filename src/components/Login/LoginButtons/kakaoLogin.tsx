import { MemberAPI } from "@/api/memberAPI";
import { setIsLoginModalOpen } from "@/store/app/appSlice";
import { useAppDispatch } from "@/store/hooks";

import { LoginButtonProps } from "../login";

export default function KakaoLogin({ isLoginMode }: LoginButtonProps) {
  const dispatch = useAppDispatch();

  const onLoginClicked = async () => {
    MemberAPI.login("kakao");

    // console.log(res);
    dispatch(setIsLoginModalOpen(false));
  };

  return (
    <button
      type="button"
      className="mb-4 p-4 w-full h-12 flex justify-center items-center rounded-md 
      text-sm font-semibold text-yellow-400 bg-white border border-yellow-400 
      hover:bg-yellow-400 hover:text-white
      transition-all ease-in duration-100"
      onClick={onLoginClicked}
    >
      <svg
        className="mr-auto h-7 w-7 text-inherit"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 00-.656-.678l-1.928 1.866V9.282a.472.472 0 00-.944 0v2.557a.471.471 0 000 .222V13.5a.472.472 0 00.944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 10.773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 00-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 100-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 00-.127-.32l-1.046-2.8a.69.69 0 00-.627-.474.696.696 0 00-.653.447l-1.661 4.075a.472.472 0 00.874.357l.33-.813h2.07l.299.8a.472.472 0 10.884-.33l-.345-.926zM8.293 9.302a.472.472 0 00-.471-.472H4.577a.472.472 0 100 .944h1.16v3.736a.472.472 0 00.944 0V9.774h1.14a.472.472 0 00.472-.472z" />
      </svg>
      <span className="absolute">
        카카오 계정으로 {isLoginMode ? "로그인" : "회원가입"}
      </span>
    </button>
  );
}
