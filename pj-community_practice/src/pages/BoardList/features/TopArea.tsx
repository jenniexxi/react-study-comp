import Search from "./Search";
import Tab from "./Tab";
import * as S from "../BoardList.style";
// import { List } from "@api/api";

// zustand 이전방식
// type Props = {
//   // 함수
//   saveList: (list: List[]) => void;
// };

// const TopArea = ({ saveList }: Props) => {
//   return (
//     <S.BoardListWrapper>
//       <Search />
//       <Tab saveList={saveList} />
//     </S.BoardListWrapper>
//   );
// };

// type Props = {
//   saveList: (item: List[]) => void;
// };

const TopArea = () => {
  return (
    <S.BoardListWrapper>
      <Search />
      <Tab />
    </S.BoardListWrapper>
  );
};

export default TopArea;
