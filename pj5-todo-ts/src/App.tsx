import { useEffect, useRef, useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import * as S from "./TodoItem.style";

export type ListType = {
  id: string;
  content: string;
  chk: boolean;
};

function App() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState<ListType[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchLists, setSearchLists] = useState<ListType[]>([]);

  const counter = useRef(0);

  useEffect(() => {
    searchItem();
  }, [searchInput]);

  const addTodo = () => {
    const todoItem: ListType = {
      id: counter.current?.toString(),
      content: input,
      chk: false,
    };
    counter.current++;
    setLists((prev) => [...prev, todoItem]);
    setInput("");
    console.log(todoItem);
  };

  const handleDelete = (id: string) => {
    const itemFilter = lists.filter((list) => {
      return id !== list.id;
    });
    setLists(itemFilter);
  };

  const handleUpdate = (id: string, content: string) => {
    const itemUpdate = lists.map((list) => {
      if (list.id === id) {
        list.content = content;
      }
      return list;
    });
    setLists(itemUpdate);
  };

  const searchItem = () => {
    // if (searchInput.length === 0) {
    //   return;
    // }

    const result: ListType[] = lists.filter((item) => {
      return item.content.includes(searchInput);
    });
    setSearchLists(result);
  };

  return (
    <div>
      <h1>todo list</h1>
      <S.InputBox>
        <input
          placeholder="검색어를 입력하세요"
          value={searchInput}
          onChange={(event) => setSearchInput(event?.target.value)}
        />
        <button type="button" onClick={searchItem}>
          검색
        </button>
      </S.InputBox>
      <S.InputBox>
        <input
          type="text"
          placeholder="입력해주세요"
          value={input}
          onChange={(event) => setInput(event?.target.value)}
        />
        <button type="button" onClick={addTodo}>
          추가
        </button>
      </S.InputBox>
      <S.TodoWrapper>
        {searchLists.length > 0
          ? searchLists.map((list) => {
              return (
                <TodoItem
                  key={list.id}
                  list={list}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              );
            })
          : lists.map((list) => {
              return (
                <TodoItem
                  key={list.id}
                  list={list}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                />
              );
            })}
      </S.TodoWrapper>
    </div>
  );
}

export default App;

// 기능: 추가, 삭제, 수정, 완료, 검색
// 추가
// 입력값 받기, 추가 버튼 클릭 -> 목록 리스트 추가

// 삭제
// 선택한 할일을 알아내기, 해당 할일을 목록에서 제거
// 제거할 때 li 에 key 값을 넣어줘야 하는데 이 부분 찾아봄

// 수정
// 수정버튼 클릭 : 기존의 내용 그대로 놔두는 기능
// 완료버튼 클릭 : 새로 적은 내용이 들어가는 기능
// 수정하려는 목록 알아내기, span -> input 태그로 바꿔주기
// 수정 버튼 텍스트 -> 완료로 바꿔주기
// 완료 누르면 바뀐 텍스트로 목록에 저장
// 수정버튼 클릭시, input으로 바뀌고 글자까지 써지는데 -> 완료버튼이 눌리지 않음
// updateMode의 역할은 조건에 따라 달라짐 (isActive가 ture-false 일때)
// 제일 처음에 수정 버튼을 클릭하면, 원래 내용이 안보이고 "" 으로 보였는데 두번쨰부터는 보임
// 찾아보니, const [input, setInput] = useState(""); 이떄, ""으로 초기화해서 그랬음

// 완료
// 완료했을 때의 스타일 만들고, 체크버튼 클릭시, 스타일 추가
// 체크박스에 체크했을 때 content에 스타일이 적용되어야 하는 조건 추가 방법 찾아봄
// 체크가 되었는지 안되었는지를 state로 관리

// 검색
// 검색 입력 박스로부터 검색 입력값 얻기
// 목록에 있는 내용이 있는지 체크
// 해당되는 목록을 다 보여줌
// 해지 버튼 클릭할 때 원래대로 돌리기
// length 이용해서

// ? (옵셔널 체이닝)
// 객체의 속성에 접근할 때, 속성이나 객체가 null 또는 undefined 일 경우 에러를 발생시키지 않고 undefined를 반환하도록한다.
