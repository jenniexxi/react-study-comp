// ****************************************
// ****************************************

// tanstack query (=react query) 적용 전 버전

// ****************************************
// ****************************************

import { useEffect, useState } from "react";
import MainTabItem from "./MainTabItem";
import * as S from "../BoardList.style";
import { getCategory, Category, getList, List } from "@api/api";
import { useBoardStore } from "@stores/boardStore";

type TAB = "1" | "2" | "3";

type MainTab = {
  title: string;
  id: TAB;
};

// zustand 이전방식
// type Props = {
//   saveList: (list: List[]) => void;
// };

const MAIN_TAB: MainTab[] = [
  { title: "인기", id: "1" },
  { title: "커뮤니티", id: "2" },
  { title: "혜택", id: "3" },
];

// [a, b] = useState   ===  값을 저장하는 변수a, 그 값을 변경해주는 함수b
// zustand 이전방식이고 다행
// const Tab = ({ saveList }: Props) => {
const Tab = () => {
  const [selected, setSelected] = useState<TAB>("1");
  // <Category> 는 api.ts 에서 가져오는 것이다.
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState("1");
  const { setList } = useBoardStore();

  // useEffect 역할
  // 케이스1: [] 만 쓰면 비었을 때 === 최초 1번만 쓰겠다
  // 케이스2: [abc] dependency 가 있을 때 === dependency 가 바뀔 때마다 실행된다.
  useEffect(() => {
    getCategories(selected);
  }, [selected]);

  useEffect(() => {
    getLists(selectedCategories, selected);
  }, [selectedCategories, selected]);

  const getCategories = async (tabId: string) => {
    try {
      const result = await getCategory(tabId);
      setCategories(result);
    } catch (e) {
      console.log("error", e);
    }
  };

  // tabId는 parameter, TAB은 parameter의 typ
  const selectTab = (tabId: TAB) => {
    setSelected(tabId);
  };

  const selectCategory = (categorycd: string) => {
    setSelectedCategories(categorycd);
  };

  const getLists = async (category: string, tab: string) => {
    try {
      const result = await getList(category, tab);
      // zustand 이전방식
      // saveList(result);
      setList(result);
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <S.MainTabList>
      <S.TabWrapper>
        <S.TabWrapperIn>
          {MAIN_TAB.map((item) => (
            <MainTabItem
              key={item.title}
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
        </S.TabWrapperIn>
      </S.TabWrapper>
      {/* && : true 일 때만, 진행해라 */}
      {categories.length > 0 && (
        <S.CategoryWrapper>
          <S.CategoryWrapperIn>
            {categories.map((item) => (
              <S.CategoryTab
                key={item.categorycd}
                selected={selectedCategories === item.categorycd}
                onClick={() => {
                  selectCategory(item.categorycd);
                }}
              >
                {item.cateogrynm}
              </S.CategoryTab>
            ))}
          </S.CategoryWrapperIn>
        </S.CategoryWrapper>
      )}
    </S.MainTabList>
  );
};

export default Tab;
