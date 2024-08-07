import { List } from "@api/api";
import { create } from "zustand";

type State = {
  list: List[];
};

type Actions = {
  setList: (newList: List[]) => void;
};

export const useBoardStore = create<State & Actions>((set) => ({
  list: [],
  setList: (newList: List[]) => set({ list: newList }),
}));
