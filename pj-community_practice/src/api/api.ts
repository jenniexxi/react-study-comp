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
}

export const getCategory = async (tabId: string): Promise<Category[]> => {
  const result = await axiosInstance.get(`/category?tabid=${tabId}`);
  return result.data;
}
