import { axiosInstance } from "./api";

export type WriteInfo = {
  title: string;
  content: string;
  paytype: string;
  store: string;
  userseq: string;
  type: string;
  tab: string;
  boardid: string;
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
  sendWriteModify: async (
    boardid: string,
    title: string,
    content: string,
    paytype: string,
    store: string,
    userseq: string,
    type: string,
    tab: string
  ): Promise<boolean> => {
    const body = {
      boardid,
      title,
      content,
      paytype,
      userseq,
      store,
      type,
      tab,
    };
    const result = await axiosInstance.post(`/modifyBoard`, body);
    return result.data;
  },
};

export default WriteAPI;
