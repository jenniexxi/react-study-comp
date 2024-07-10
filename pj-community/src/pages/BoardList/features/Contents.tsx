import { List } from "@api/api";
// import { Link } from "react-router-dom";
import ListItem from "./ListItem";
import { useBoardStore } from "@stores/boardStore";

// zustand 이전 방식
// type Props = {
//   list: List[];
// };

// const Contents = ({ list }: Props) => {
//   return (
//     <div>
//       {list.map((item) => (
//         // <Link to={`/detail/${item.boardid}`}>
//         <ListItem key={item.boardid} item={item} />
//         // </Link>
//       ))}
//     </div>
//   );
// };

const Contents = () => {
  // zustand 방식으로 추가된 부분이고,
  // return 안에 list 와 이름이 같아서 변경점이 없어보임.
  const { list } = useBoardStore();
  
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
