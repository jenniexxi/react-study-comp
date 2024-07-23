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

// === const WriteAPI = async (body:WriteInfo): Promise<void> => {
const WriteAPI = {
  sendWrite: async (
    title: string,
    content: string,
    paytype: string,
    store: string,
    userseq: string,
    type: string,
    tab: string
  ): Promise<boolean> => {
    const body = { title, content, paytype, userseq, store, type, tab };
    const result = await axiosInstance.post(`/write`, body);
    return result.data;
  },
};
export default WriteAPI;
