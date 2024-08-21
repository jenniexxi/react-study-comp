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
  // user_id 는 2 라는 값으로 정했기 때문에 아래에서만 정의
  const body = { content, date, user_id: 2 };

  const result = await axiosInstance.post(`todos`, body);

  return result.data;
};

export const getTodosList = async (
  // user_id: number,
  // date 는 있을지 없을지 모르니까 ? (옵셔널) 처리
  date?: Date
): Promise<TodosList[]> => {
  const query = new URLSearchParams();

  // query.append("user_id", user_id.toString());

  // if (date) {
  //   query.append("date", dayjs(date).format("YYYY-MM-DD"));
  // }

  query.append("user_id", "2");

  if (date) {
    query.append("date", dayjs(date).format("YYYY-MM-DD"));
  }

  console.log(query.toString());
  const result = await axiosInstance.get(`todos?${query.toString()}`);
  // const result = await axiosInstance.get(`todos?user_id=${user_id}&date=${date}`);

  return result.data;
};

export const updateTodosList = async (body: TodosList): Promise<TodosList> => {
  console.log(body);
  const result = await axiosInstance.put(`todos`, body);

  return result.data;
};

export const deleteTodosList = async (
  id: string,
  user_id: number
): Promise<TodosList> => {
  const result = await axiosInstance.delete(
    `todos?id=${id}&user_id=${user_id}`
  );

  return result.data;
};

export const searchTodosList = async (
  user_id: number,
  q: string
): Promise<TodosList[]> => {
  const result = await axiosInstance.get(
    `todos/search?user_id=${user_id}&q=${q}`
  );

  return result.data;
};
