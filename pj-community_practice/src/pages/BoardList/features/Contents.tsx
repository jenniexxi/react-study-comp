// import { Link } from "react-router-dom";
import { List } from "@api/api";
import ListItem from "./ListItem";

type Props = {
  list: List[];
};

const Contents = ({ list }: Props) => {
  // zustand 방식으로 추가된 부분이고,
  // return 안에 list 와 이름이 같아서 변경점이 없어보임.

  return (
    <div>
      {list.map((item) => (
        <ListItem key={item.boardid} item={item} />
      ))}
    </div>
  );
};

export default Contents;
