import axios from "axios";

// axios url 써주기
const axiosInstance = axios.create({
  baseURL: "http://192.168.13.54:3030",
  // baseURL: import.meta.env.VITE_SERVER_ADDR,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export type Category = {
  categorycd: string;
  cateogrynm: string;
};
export const getCategory = async (tabId: string): Promise<Category[]> => {
  const result = await axiosInstance.get(`/category?tabid=${tabId}`);
  // tabid 는 api 에서 정해준 이름값

  return result.data;
};

// export 만 쓰는것은, 여러개의 api를 가져와야 할 수도 있기 때문에.
// object 방식으로 여러개 가져올 수도 있음.
// axios 로 하면 json 으로 안 바꿔줘도 됨
// fetch는 json 형식으로 안 주기 때문에 우리가 바꿔줘야함
