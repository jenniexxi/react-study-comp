import { useEffect, useState } from "react";
import MainTabItem from "./MainTabItem";
import * as S from "../BoardList.style";
import { getCategory, Category } from "@api/api";

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
  // <Category> 는 api.ts 에서 가져오는 것이다.
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategories, setSelectedCategories] = useState("1");

  useEffect(() => {
    getCategories(selected);
  }, [selected]);

  const getCategories = async (tabId: string) => {
    try {
      const result = await getCategory(tabId);
      console.log(result);
      setCategories(result);
    } catch (e) {
      console.log("error", e);
    }
  };

  const selectTab = (tabId: TAB) => {
    setSelected(tabId);
  };

  const selectCategory = (categorycd: string) => {
    setSelectedCategories(categorycd);
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
