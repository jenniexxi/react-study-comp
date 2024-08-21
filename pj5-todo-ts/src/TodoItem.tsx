import { useState } from "react";
import * as S from "./TodoItem.style";
import { TodosList } from "./api/api";

type Props = {
  list: TodosList;
  handleDelete: (id: string) => void;
  //handleUpdate: (id: string, content: string) => void;
  handleUpdate: (item: TodosList) => void;
};

const TodoItem = ({ list, handleDelete, handleUpdate }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState(list.content);
  const [isChecked, setIsChecked] = useState(false);

  const updateMode = () => {
    if (isActive) {
      setIsActive(false);
      // handleUpdate(list.id, input);
      // 
      handleUpdate({ ...list, content: input });

    } else {
      setIsActive(true);
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <S.TodoItemList key={list.id}>
      <S.TodoItem>
        <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
        {isActive ? (
          <S.ActiveInput
            type="text"
            value={input}
            onChange={(event) => setInput(event?.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: isChecked ? "line-through" : "none",
              color: isChecked ? "#f00" : "#000",
            }}
          >
            {list.content}
          </span>
        )}
      </S.TodoItem>
      <S.ButtonBox>
        <button type="button" onClick={updateMode}>
          {isActive ? "완료" : "수정"}
        </button>
        <button type="button" onClick={() => handleDelete(list.id)}>
          삭제
        </button>
      </S.ButtonBox>
    </S.TodoItemList>
  );
};

export default TodoItem;
