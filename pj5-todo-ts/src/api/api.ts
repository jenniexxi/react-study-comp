import axios from "axios";

// axios url 써주기
export const axiosInstance = axios.create({
  // baseURL: "http://192.168.13.54:3000",
  baseURL: import.meta.env.VITE_API_SERVER,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
