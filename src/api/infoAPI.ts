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
  id: number;
  detail: string;
};

export const InfoAPI = {
  getLocationURL: "/info/locations",
  getPlatformURL: "/info/platforms",
  getJobURL: "/info/jobs",
  getLevelURL: "/info/levels",
  getCareerURL: "/info/careers",
};
