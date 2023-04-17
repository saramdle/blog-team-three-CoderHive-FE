import HttpRequest from "./httpRequest";

export type MyPostData = {
  id: number;
  content: string;
  job: { main: string; detail: string };
  likeBoolean: true;
  likes: 11;
  location: string;
  platforms: string;
  postCategory: string;
  postStatus: string;
  skills: string[];
  thumbImageUrl: string;
  title: string;
};

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
  appliedPosts: MyPostData[];
  hostingPosts: MyPostData[];
  participatedPosts: MyPostData[];
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
  participatedPosts: MyPostData[];
};

export const MemberAPI = {
  login: (type: string) => {
    return HttpRequest.get(`/oauth2/authorization/${type}`).then((res) => {
      if (res.status !== 200) {
        const error = new Error("서버와의 통신 중에 오류가 발생했습니다.");
        throw error;
      }

      return res.data;
    });
  },
  getMyProfile: (memberId: number) => `/members/my?memberId=${memberId}`,
  getMember: (memberId: number, searchId: number) =>
    `/members?memberId=${memberId}&searchMemberId=${searchId}`,
  editProfile: (data: FormData) => {
    return HttpRequest.patch("/members/my", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res) => {
      if (res.status !== 200) {
        const error = new Error("서버와의 통신 중에 오류가 발생했습니다.");
        throw error;
      }

      return res.data;
    });
  },
};
