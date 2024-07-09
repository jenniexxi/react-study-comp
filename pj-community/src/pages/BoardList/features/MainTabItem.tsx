import * as S from "../BoardList.style";

type Props = {
  selected: boolean;
  onSelect: () => void;
  title: string;
};

// selected 는 M
const MainTabItem = ({ selected, onSelect, title }: Props) => {
  return (
    // selected 는 기본으로 제공하는 props가  아니고 tsx 에서 style을 준 값을 말하며
    // 값을 넘겨주려고 여기에 가져옴
    <S.MainTabItem selected={selected} onClick={onSelect}>
      {title}
    </S.MainTabItem>
  );
};

export default MainTabItem;
