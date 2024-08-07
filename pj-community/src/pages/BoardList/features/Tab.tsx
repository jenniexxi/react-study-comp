import { useEffect, useState } from "react";
import MainTabItem from "./MainTabItem";
import * as S from "../BoardList.style";
import { getCategory, getList, List } from "@api/api";
import { useBoardStore } from "@stores/boardStore";
import { useQuery } from "@tanstack/react-query";

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
  const [selectedCategories, setSelectedCategories] = useState("1");
  const { setList } = useBoardStore();

  // 필요에 따라 isLoading, error
  // useState, useEffect, getCategories 가 삭제되고 아래 query 로 해결
  // render 되는 곳에서도 categories => data 로 수정 (이름 바꿔서 쓸 수 있음, 아래 설명)
  // data: categories 는 data를 categories 라는 이름으로 쓰겠다
  // 카테고리는 get 방식으로 되어 있어서 react query 사용
  // queryKey 에서 "category" 는 임의로 지어준 이름이고, selected 를 넣어주겠다.
  const { data: categories } = useQuery({
    queryKey: ["category", selected],
    queryFn: () => getCategory(selected),
  });

  // 카테고리는 post 방식으로 되어 있어서
  const { data: boardlists } = useQuery({
    queryKey: ["boardlist", selectedCategories, selected],
    queryFn: () => getList(selectedCategories, selected),
    // queryFn: () => getLists(selectedCategories, selected),
    // getLists 를 쓰면, useEffect를 쓰지 않아도 된다. 이미 setList에서 저장해주고 있기 때문에
    // useEffect 방식을 쓴 이유는, 화면이 바뀔 때마다 저장된 값을 불러와야 하기 때문에
  });
  // console.log(boardlists);

  useEffect(() => {
    if (boardlists && boardlists?.length > 0) {
      setList(boardlists);
    }
  }, [boardlists]);



  // useEffect 역할
  // 케이스1: [] 만 쓰면 비었을 때 === 최초 1번만 쓰겠다
  // 케이스2: [abc] dependency 가 있을 때 === dependency 가 바뀔 때마다 실행된다

  // tabId는 parameter, TAB은 parameter의 typ
  const selectTab = (tabId: TAB) => {
    setSelected(tabId);
  };

  const selectCategory = (categorycd: string) => {
    setSelectedCategories(categorycd);
  };

  // const getLists = async (category: string, tab: string) => {
  //   try {
  //     const result = await getList(category, tab);
  //     // zustand 이전방식
  //     // saveList(result);
  //     setList(result);
  //   } catch (err) {
  //     console.log("error", err);
  //   }
  // };

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
      {categories && categories.length > 0 && (
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
                {item.categorynm}
              </S.CategoryTab>
            ))}
          </S.CategoryWrapperIn>
        </S.CategoryWrapper>
      )}
    </S.MainTabList>
  );
};

export default Tab;
