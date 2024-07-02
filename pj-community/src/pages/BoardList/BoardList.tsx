import { useState } from "react";
import ListItem from "./features/ListItem";
import TopArea from "./features/TopArea";
import { List } from "@api/api";

const BoardList = () => {
  const [list, setList] = useState<List[]>([]);

  const saveList = (listData: List[]) => {
    setList(listData);
  };

  return (
    <>
      <TopArea saveList={saveList} />
      {list.map((item) => (
        <ListItem item={item} />
      ))}
    </>
  );
};

export default BoardList;
