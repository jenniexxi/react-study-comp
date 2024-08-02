// import MainTabItem from "./MainTabItem";
import { useState } from "react";
import * as S from "../BoardList.style";

type TAB = "1" | "2" | "3";

const Tab = () => {
  const [selected, setSelected] = useState<TAB>("1");
  const [selectedCategories, setSelectedCategories] = useState("1");

  const selectTab = (tabId: TAB) => {
    setSelected(tabId);
  }

  const selectCategory = (categorycd: string) => {
    setSelectedCategories(categorycd);
  }

  return (
    <S.MainTabList>
      <S.TabWrapper>
        <S.TabWrapperIn>
          {/* {MAIN_TAB.map((item) => (
            <MainTabItem
              key={item.title}
              selected={selected === item.id}
              title={item.title}
              onSelect={() => selectTab(item.id)}
            />
          ))} */}
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
      {/* {categories && categories.length > 0 && (
        <S.CategoryWrapper>
          <S.CategoryWrapperIn>
            {categories?.map((item) => (
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
      )} */}
    </S.MainTabList>
  );
};

export default Tab;
