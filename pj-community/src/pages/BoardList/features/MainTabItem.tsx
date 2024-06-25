import * as S from "../BoardList.style";

type Props = {
  selected: boolean;
  onSelect: () => void;
  title: string;
};

const MainTabItem = ({ selected, onSelect, title }: Props) => {
  return (
    <S.MainTabItem selected={selected} onClick={onSelect}>
      {title}
    </S.MainTabItem>
  );
};

export default MainTabItem;
