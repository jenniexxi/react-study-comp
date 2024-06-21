import { useState } from "react";
import MainTabItem from "./MainTabItem";

type TAB = "1" | "2" | "3";

type MainTab = {
  title: string;
  id: TAB;
};

const MAIN_TAB: MainTab[] = [
  { title: "인기", id: "1" },
  { title: "커뮤니티", id: "2" },
  { title: "혜택", id: "3" },
];

const Tab = () => {
  const [selected, setSelected] = useState<TAB>("1");

  const selectTab = (tabId: TAB) => {
    setSelected(tabId);
  };
  return (
    <ul>
      {MAIN_TAB.map((item) => (
        <MainTabItem
          selected={selected === item.id}
          title={item.title}
          onSelect={() => selectTab(item.id)}
        />
      ))}
      {/* <MainTabItem
        selected={selected === "1"}
        title="인기"
        onSelect={() => selectTab("1")}
      />
      <MainTabItem
        selected={selected === "2"}
        title="커뮤니티"
        onSelect={() => selectTab("2")}
      />
      <MainTabItem
        selected={selected === "3"}
        title="혜택"
        onSelect={() => selectTab("3")}
      /> */}
    </ul>
  );
};

export default Tab;
