import axios from "axios";
import dayjs from "dayjs";

// axios url 써주기
export const axiosInstance = axios.create({
  // baseURL: "http://192.168.13.54:3000",
  baseURL: import.meta.env.VITE_API_SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export type TodosList = {
  id: string;
  title: string;
  content: string;
  date: Date;
  completed: boolean;
  user_id: number;
};

export const addTodosList = async (
  content: string,
  date: Date
): Promise<TodosList> => {
  const body = { content, date, user_id: 2 };

  const result = await axiosInstance.post(`todos`, body);

  return result.data;
};

export const getTodosList = async (
  // user_id: number,
  date?: Date
): Promise<TodosList[]> => {
  const query = new URLSearchParams();

  // query.append("user_id", user_id.toString());

  // if (date) {
  //   query.append("date", dayjs(date).format("YYYY-MM-DD"));
  // }

  query.append("user_id","2");

  if (date) {
    query.append("date", dayjs(date).format("YYYY-MM-DD"));
  }

  console.log(query.toString());
  const result = await axiosInstance.get(`todos?${query.toString()}`);
  // const result = await axiosInstance.get(`todos?user_id=${user_id}&date=${date}`);

  return result.data;
};
