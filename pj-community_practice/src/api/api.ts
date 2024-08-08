import axios from "axios";

// axios url 써주기
export const axiosInstance = axios.create({
  // baseURL: "http://192.168.13.54:3030",
  baseURL: import.meta.env.VITE_API_SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export type Category = {
  categorycd: string;
  categorynm: string;
};

export const getCategory = async (tabId: string): Promise<Category[]> => {
  const result = await axiosInstance.get(`/category?tabid=${tabId}`);
  return result.data;
};

export type List = {
  boardid: string;
  title: string;
  content: string;
  name: string;
  profileimage: string;
  like: string;
  viewer: string;
  type: string;
  createtime: string;
};

export const getList = async (
  category: string,
  tab: string
): Promise<List[]> => {
  const body = { category: category, tab: tab };

  const result = await axiosInstance.post(`/list`, body);
  return result.data;
};

export type ListContentsDetail = {
  boardid: string;
  title: string;
  content: string;
  viewer: number;
  like: number;
  name: string;
  profileimage: string;
  type: string;
  createtime: string;
  paytype: string;
  store: string;
  userseq: string;
};

export const getDetail = async (
  boardid: string
): Promise<ListContentsDetail> => {
  const result = await axiosInstance.get(`/detail?boardid=${boardid}`);

  return result.data;
};
