import HttpRequest from "./httpRequest";

import { PostCardData } from "./postAPI";

export type MyProfileData = {
  memberId: number;
  email: string;
  nickname: string;
  job: {
    main: string;
    detail: string;
  };
  career: string;
  level: string;
  skills: string[];
  introduction: string;
  profileImageUrl: string;
  appliedPosts: PostCardData[];
  hostingPosts: PostCardData[];
  participatedPosts: PostCardData[];
};

export type MemberData = {
  memberId: number;
  email: string;
  nickname: string;
  job: {
    main: string;
    detail: string;
  };
  career: string;
  level: string;
  skills: string[];
  introduction: string;
  profileImageUrl: string;
  participatedPosts: PostCardData[];
};

export const MemberAPI = {
  getMember: (url: string) => {
    return HttpRequest.get(url).then((res) => {
      if (res.status !== 200) {
        const error = new Error("서버와의 통신 중에 오류가 발생했습니다.");
        throw error;
      }

      return res.data;
    });
  },
  getMyProfile: (url: string) => {
    return HttpRequest.get(url).then((res) => {
      if (res.status !== 200) {
        const error = new Error("서버와의 통신 중에 오류가 발생했습니다.");
        throw error;
      }

      return res.data;
    });
  },
  patchEditProfile: (data: FormData) => {
    return HttpRequest.patch("/members/my", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      if (res.status !== 200) {
        const error = new Error("서버와의 통신 중에 오류가 발생했습니다.");
        throw error;
      }

      return res.status;
    });
  },
};
