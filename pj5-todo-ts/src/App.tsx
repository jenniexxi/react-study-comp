import { useEffect, useRef, useState } from "react";
import "./App.css";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import * as S from "./TodoItem.style";
import DayCalendar from "./DayCalendar";
import Calendar from "react-calendar";
import Portal from "./Portal";
import Modal from "./Modal";
import {
  addTodosList,
  deleteTodosList,
  getTodosList,
  searchTodosList,
  TodosList,
  updateTodosList,
} from "./api/api";

import "react-calendar/dist/Calendar.css";
import "./calendar.style.css";

type DatePiece = Date | null;
type SelectedDate = DatePiece | [DatePiece, DatePiece];

function App() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState<TodosList[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchLists, setSearchLists] = useState<TodosList[]>([]);
  const [selectedDate, setSelectedDate] = useState<SelectedDate>(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const counter = useRef(0);

  useEffect(() => {
    showTodoList();
  }, [selectedDate]);

  useEffect(() => {
    searchItem();
  }, [searchInput]);

  // ver.1
  // const addTodo = () => {
  //   const todoItem: ListType = {
  //     id: counter.current?.toString(),
  //     content: input,
  //     chk: false,
  //   };
  //   counter.current++;
  //   setLists((prev) => [...prev, todoItem]);
  //   setInput("");
  //   console.log(todoItem);
  // };

  // ver.2
  const addTodo = async () => {
    try {
      const newTodo = await addTodosList(input, selectedDate as Date);
      counter.current++;
      setLists((prev) => [newTodo, ...prev]);
      setInput("");
      console.log(newTodo);
    } catch (e) {
      console.error("error", e);
    }
  };

  const handleDelete = async (id: string) => {
    // const itemFilter = lists.filter((list) => {
    //   return id !== list.id;
    // });
    // setLists(itemFilter);

    try {
      await deleteTodosList(id, 2);
      setLists((lists) => lists.filter((list) => id !== list.id));
    } catch (e) {
      console.error("error", e);
    }
  };

  // ver.1
  // const handleUpdate = (id: string, content: string) => {
  //   const itemUpdate = lists.map((list) => {
  //     if (list.id === id) {
  //       list.content = content;
  //     }
  //     return list;
  //   });
  //   setLists(itemUpdate);
  // };

  // ver.2
  const handleUpdate = async (item: TodosList) => {
    try {
      const updatedTodo = await updateTodosList(item);
      setLists((prev) =>
        prev.map((list) => (list.id === item.id ? updatedTodo : list))
      );
    } catch (e) {
      console.error("error", e);
    }
  };

  // ver.1
  // const searchItem = () => {
  //   // if (searchInput.length === 0) {
  //   //   return;
  //   // }

  //   const result: TodosList[] = lists.filter((item) => {
  //     return item.content.includes(searchInput);
  //   });
  //   setSearchLists(result);
  // };

  // ver.2
  const searchItem = async () => {
    try {
      const searchedTodo = await searchTodosList(2, searchInput);
      setSearchLists(searchedTodo);
    } catch (e) {
      console.error("error", e);
    }
  };

  // ver.3 - then 방식
  // const searchItem2 = () => {
  //   try {
  //     searchTodosList(2, searchInput)
  //       .then((todos) => setSearchLists(todos))
  //       .catch((error) => console.log(error));
  //   } catch (e) {
  //     console.error("error", e);
  //   }
  // };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const showTodoList = async () => {
    try {
      const originTodo = await getTodosList(selectedDate as Date);
      setLists(originTodo);
      console.log(originTodo);
    } catch (e) {
      console.error("error", e);
    }
  };

  const onDateChange = (newData: SelectedDate) => {
    setSelectedDate(newData);
  };

  return (
    <div>
      <h1>todo list</h1>
      <DayCalendar
        selectedDate={selectedDate as Date}
        toggleCalendar={toggleCalendar}
        onDateChange={onDateChange}
      />
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
        {searchInput.length > 0
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
      {showCalendar && (
        <Portal>
          <Modal
            type="center"
            onClickBackDrop={() => setShowCalendar(false)}
            backDropAnimation={false}
          >
            <CalendarView>
              <Calendar
                onChange={(value) => {
                  setSelectedDate(value);
                  setShowCalendar(false);
                }}
                value={selectedDate}
              />
            </CalendarView>
          </Modal>
        </Portal>
      )}
    </div>
  );
}

export default App;

const CalendarView = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: #ffffff;
`;

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

// dayjs
// <, > 버튼 클릭했을 때 날짜를 변경해주는 값이 필요
// prev, next 버튼 클릭 시, 날짜 변경
// 날짜 관리는 useState

// 가운데 날짜 보여주는 텍스트 클릭했을 때 캘린터가 보여지고, 선택한 날짜로 변경해주는 값이 필요
// 캘린더에서 날짜를 선택하면 보여주는 부분의 텍스트가 변경되어야함
// 선택한 텍스트 관리해야함
// 캘린더 토글 팝업 띄우기

// ----
// CURD 작업
// Create 작업 위해 api 작성
// 추가되는 함수에 api 연결하기 try-catch (try-then 등)

// Update 작업
// Update 작업 위해 api 작성
// 추가되는 함수에 api 연결하기 try-catch (try-then 등)

// Read 작업
// Read 작업 위해 api 작성
// 추가되는 함수에 api 연결하기 try-catch (try-then 등)

// Delete 작업
// Delete 작업 위해 api 작성
// 추가되는 함수에 api 연결하기 try-catch (try-then 등)

// 완료 작업
// 기존 : todoItem 에 isChecked 로 되어 있음 => TodosList 안에 completed 로 바꿔야함
// 기존 isChecked 를 삭제, completed 로 교체 (TodoItem 에서 isChecked 들어간 부분 수정)
// setIsChecked 를 completedUpdate 로 바꿈 (api 에서는 update api put todos 로 바꿈)
