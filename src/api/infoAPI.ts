import HttpRequest from "./httpRequest";

export type LocationData = {
  locations: [
    {
      id: number;
      region: string;
    }
  ];
};

export type JobData = {
  jobs: [
    {
      main: string;
      details: [
        {
          jobId: number;
          field: string;
        }
      ];
    }
  ];
};

export type SkillData = {
  skills: [
    {
      id: number;
      detail: string;
    }
  ];
};

export const InfoAPI = {
  getLocationURL: "/info/locations",
  getPlatformURL: "/info/platforms",
  getJobURL: "/info/jobs",
  getLevelURL: "/info/levels",
  getCareerURL: "/info/careers",
  getSkills: (query: string) => {
    return HttpRequest.get(`/info/skills?keyword=${query}`).then((res) => {
      if (res.status !== 200) {
        const error = new Error("서버와의 통신 중에 오류가 발생했습니다.");
        throw error;
      }

      return res.data;
    });
  },
};
