import { axiosInstance } from "./api";

export type UserInfo = {
  username: string;
  email: string;
  address1: string;
  address2: string;
  zipcode: string;
};

export type UserUpdateInfo = UserInfo & {
  password: string;
};

export type UserList = {
  id: string;
  username: string;
};

export type UserLoginResp = UserInfo & {
  id: string;
  userid: string;
};

export type UserJoin = UserInfo & {
  userid: string;
  password: string;
};

export type UserLogin = {
  userid: string;
  userpassword: string;
};

export type UserDetail = UserInfo & UserList;

const UsersAPI = {
  userJoin: async (body: UserJoin): Promise<void> => {
    try {
      const result = await axiosInstance.post(`/users`, body);
      return result.data;
    } catch (e) {
      console.log("error", e);
      throw e;
    }
  },
  // body 에 넣어서 요청 (요청할 내용은 userid, userpassword 2개이지만, body로 묶어서 다 넘김)
  // body는 UserLogin 로 요청, response 받는 타입은 UserLogin 로 지정
  userLogin: async (body: UserLogin): Promise<UserLoginResp> => {
    try {
        console.log(body)
      const result = await axiosInstance.post(`/login`, body);
      // 위에는 request / return 부터는 response
      return result.data;
    } catch (e) {
      console.log("error", e);
      throw e;
    }
  },
};

export default UsersAPI;
