import Search from "./Search";
import Tab from "./Tab";
import * as S from "../BoardList.style";
import { List } from "@api/api";

type Props = {
  saveList: (list: List[]) => void;
};

const TopArea = ({ saveList }: Props) => {
  return (
    <S.BoardListWrapper>
      <Search />
      <Tab saveList={saveList} />
    </S.BoardListWrapper>
  );
};

export default TopArea;
