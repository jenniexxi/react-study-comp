import * as S from "../BoardList.style";

// selected 는 M
const MainTabItem = () => {
  return (
    // selected 는 기본으로 제공하는 props가  아니고 tsx 에서 style을 준 값을 말하며
    // 값을 넘겨주려고 여기에 가져옴
    <S.MainTabItem>
      title 타이틀
    </S.MainTabItem>
  );
};

export default MainTabItem;
