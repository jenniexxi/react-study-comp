import { axiosInstance } from "./api";

export type userInfo = {
  userid: string;
  name: string;
  profileimage: string;
};

const UserAPI = {
  getUserInfo: async (): Promise<userInfo> => {
    const resp = await axiosInstance.get("/user");
    return resp.data;
  },
};

export default UserAPI;
