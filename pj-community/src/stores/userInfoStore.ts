import { userInfo } from "@api/User";
import { create } from "zustand";

// 변수 타입 정의
type State = {
  userInfo: userInfo | undefined;
};

// 함수 타입 정의
type Actions = {
  setUserInfoList: (userInfoList: userInfo) => void;
};

// 변수 초기화 및 함수 정의
export const userInfoStore = create<State & Actions>((set) => ({
  userInfo: undefined,
  setUserInfoList: (userInfoList: userInfo) => set({ userInfo: userInfoList }),
}));
