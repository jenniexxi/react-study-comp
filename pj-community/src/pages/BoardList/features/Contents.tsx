import { List } from "@api/api";
// import { Link } from "react-router-dom";
import ListItem from "./ListItem";

type Props = {
  list: List[];
};

const Contents = ({ list }: Props) => {
  return (
    <div>
      {list.map((item) => (
        // <Link to={`/detail/${item.boardid}`}>
        <ListItem key={item.boardid} item={item} />
        // </Link>
      ))}
    </div>
  );
};

export default Contents;
