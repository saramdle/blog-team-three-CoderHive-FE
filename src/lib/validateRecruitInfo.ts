import { Dispatch, SetStateAction } from "react";

export default function validateRecruitInfo(
  recruitInfo: string[][] | null,
  setValueError: Dispatch<SetStateAction<string>>,
  errorMsg?: string
) {
  let isValid = true;

  recruitInfo?.forEach((info) => {
    if (info[0] === "" || info[1] === "") {
      isValid = false;
      return;
    }
  });

  if (!isValid) {
    setValueError(errorMsg ? errorMsg : "모든 분야와 하위분야를 선택해 주세요");
    return false;
  } else {
    setValueError("");
    return true;
  }
}
