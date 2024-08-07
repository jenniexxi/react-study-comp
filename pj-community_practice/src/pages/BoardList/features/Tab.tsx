import { useEffect, useState } from "react";
import MainTabItem from "./MainTabItem";
import * as S from "../BoardList.style";
import { Category, getCategory, getList, List } from "@api/api";

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

type Props = {
  saveList: (item: List[]) => void;
}

const Tab = ({saveList}: Props) => {
  const [selected, setSelected] = useState<TAB>("1");
  const [selectedCategories, setSelectedCategories] = useState("1");
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getLists(selected, selectedCategories);
  }, [selected, selectedCategories])

  useEffect(() => {
    getCategories(selected);
  }, [selected]);

  const selectTab = (tabId: TAB) => {
    setSelected(tabId);
  };

  const selectCategory = (categorycd: string) => {
    setSelectedCategories(categorycd);
  };

  const getCategories = async (tabId: string) => {
    try {
      const result = await getCategory(tabId);
      console.log(result);
      setCategories(result);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getLists = async (category: string, tab: string) => {
    try {
      const result = await getList(category, tab);
      saveList(result);
    } catch (e) {
      console.log("error", e);
    }
  }

  return (
    <S.MainTabList>
      <S.TabWrapper>
        <S.TabWrapperIn>
          {MAIN_TAB.map((item) => (
            <MainTabItem
              key={item.title}
              title={item.title}
              selected={selected === item.id}
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
      {categories && categories.length > 0 && (
        <S.CategoryWrapper>
          <S.CategoryWrapperIn>
            {categories?.map((item) => {
              console.log(item)
              return (
                <S.CategoryTab
                  key={item.categorycd}
                  selected={selectedCategories === item.categorycd}
                  onClick={() => {
                    selectCategory(item.categorycd);
                  }}
                >
                  {item.categorynm}
                </S.CategoryTab>
              );
            })}
          </S.CategoryWrapperIn>
        </S.CategoryWrapper>
      )}
    </S.MainTabList>
  );
};

export default Tab;
