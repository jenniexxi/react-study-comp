import { useState } from "react";
// import ListItem from "./features/ListItem";
import TopArea from "./features/TopArea";
import { List } from "@api/api";
// import { Link } from "react-router-dom";
import Contents from "./features/Contents";

const BoardList = () => {
  const [list, setList] = useState<List[]>([]);

  const saveList = (listData: List[]) => {
    setList(listData);
  };

  return (
    <>
      <TopArea saveList={saveList} />
      <Contents list={list} />
      {/* {list.map((item) => (
        <Link to={`/detail/${item.boardid}`}>
          <ListItem item={item} />
        </Link>
      ))} */}
    </>
  );
};

export default BoardList;

