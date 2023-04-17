export type PostData = {
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

export const PostAPI = {
  getPostURL: (
    memberId: number,
    isStudy: boolean = true,
    locations: number[],
    jobs: number[],
    showHiring: boolean
  ) => {
    return `/posts?memberId=${memberId}&postCategory=${
      isStudy ? "STUDY" : "PROJECT"
    }${locations.length > 0 ? `&regions=${locations.join(",")}` : ""}${
      jobs.length > 0 ? `&jobs=${jobs.join(",")}` : ""
    }${showHiring ? "&postStatus=HIRING" : ""}`;
  },
};
