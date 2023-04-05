import HttpRequest from "./httpRequest";

export type PostCardData = {
  postId: 76;
  status: string;
  title: string;
  location: string;
  category: string;
  skills: string[];
  work: string;
  likeBoolean: boolean;
  likes: number;
  thumbImageUrl: string;
};

// /posts?memberId=3&category=project&region=2,3&jobs=1,2&status=모집중
export const PostAPI = {
  getPosts: (url: string) => {
    return HttpRequest.get(url).then((res) => {
      if (res.status !== 200) {
        const error = new Error("서버와의 통신 중에 오류가 발생했습니다.");
        throw error;
      }

      return res.data;
    });
  },
};
