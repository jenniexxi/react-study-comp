import { List } from "@api/api";
import { create } from "zustand";

// BpardList에서 사용했던 const [list, setList] = useState<List[]>와 동일
// 변수 타입 정의
type State = {
  list: List[];
};

// 함수 타입 정의
type Actions = {
  setList: (newList: List[]) => void;
};

// 변수 초기화 및 함수 정의
export const useBoardStore = create<State & Actions>((set) => ({
  list: [],
  setList: (newList: List[]) => set({ list: newList }),
}));
