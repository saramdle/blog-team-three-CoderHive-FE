import HttpRequest from "./httpRequest";

export type GetPostData = {
  content: PostData[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {
    sort: { empty: boolean; sorted: boolean; unsorted: boolean };
    offset: number;
    pageSize: number;
    pageNumber: number;
    paged: boolean;
  };
  size: number;
  sort: { empty: boolean; sorted: boolean; unsorted: boolean };
  totalElements: number;
  totalPages: number;
};

type PostData = {
  id: number;
  likes: number;
  location: string;
  memberLike: boolean;
  postCategory: string;
  postJobTotal: number;
  postStatus: string;
  skills: string[];
  thumbImageUrl: string;
  title: string;
  userApplyPass: number;
};

// /posts?memberId=3&category=project&region=2,3&jobs=1,2&status=모집중
export const PostAPI = {
  getPosts: (url: string) => {
    return HttpRequest.get(url).then((res) => {
      if (res.status !== 200) {
        const error = new Error();
        throw error;
      }

      return res.data;
    });
  },
};
