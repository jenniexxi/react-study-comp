import { axiosInstance } from "./api";

export type WriteInfo = {
  title: string;
  content: string;
  paytype: string;
  store: string;
  userseq: string;
  type: string;
  tab: string;
};

export type BoardUpdate = WriteInfo & {
  boardid: string;
};

const WriteAPI = {
  sendWrite: async (body: WriteInfo): Promise<boolean> => {
    return await axiosInstance.post(`/write`, body);
  },
};

export default WriteAPI;
