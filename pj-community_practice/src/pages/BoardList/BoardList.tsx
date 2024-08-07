// import { useState } from "react";
// import ListItem from "./features/ListItem";
import TopArea from "./features/TopArea";
// import { Link } from "react-router-dom";
import Contents from "./features/Contents";
// import { List } from "@api/api";

const BoardList = () => {
  // const [list, setList] = useState<List[]>([]);

  // const saveList = (item: List[]) => {
  //   setList(item);
  // }

  return (
    <div>
      <TopArea />
      <Contents />
    </div>
  );
};

export default BoardList;

