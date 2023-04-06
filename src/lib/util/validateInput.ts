import { Dispatch, SetStateAction } from "react";

export default function validateInput(
  value: string,
  setValueError: Dispatch<SetStateAction<string>>,
  errorMsg?: string
) {
  if (!value) {
    setValueError(errorMsg ? errorMsg : "필수 입력란 입니다");
    return false;
  } else {
    setValueError("");
    return true;
  }
}
