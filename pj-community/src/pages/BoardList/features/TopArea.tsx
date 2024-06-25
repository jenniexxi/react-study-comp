import Search from "./Search";
import Tab from "./Tab";
import * as S from "../BoardList.style";

const TopArea = () => {
  return (
    <S.BoardListWrapper>
      <Search />
      <Tab />
    </S.BoardListWrapper>
  );
};

export default TopArea;