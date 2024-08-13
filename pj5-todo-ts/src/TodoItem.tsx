import { useState } from "react";
import { ListType } from "./App";
// import * as S from "./TodoItem.style";

type Props = {
  list: ListType;
  handleDelete: (id: string) => void;
  handleUpdate: (id: string, content: string) => void;
};

const TodoItem = ({ list, handleDelete, handleUpdate }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState(list.content);
  const [isChecked, setIsChecked] = useState(false);

  const updateMode = () => {
    if (isActive) {
      setIsActive(false);
      handleUpdate(list.id, input);
    } else {
      setIsActive(true);
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li key={list.id}>
      <div>
        <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} />
        {isActive ? (
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event?.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: isChecked ? "line-through" : "none",
              color: isChecked ? "#f00" : "#fff",
            }}
          >
            {list.content}
          </span>
        )}
      </div>
      <div>
        <button type="button" onClick={updateMode}>
          {isActive ? "완료" : "수정"}
        </button>
        <button type="button" onClick={() => handleDelete(list.id)}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
