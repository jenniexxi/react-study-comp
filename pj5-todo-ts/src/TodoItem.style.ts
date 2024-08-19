import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  input {
    width: 100%;
    height: 40px;
    border: 1px solid #c1c1c1;
    padding-left: 10px;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 16px;
  }
  > button {
    width: 70px;
    height: 40px;
    padding: 0;
  }
`;

export const TodoWrapper = styled.ul`
  padding: 0;
  margin-top: 20px;
`;

export const TodoItemList = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const TodoItem = styled.div`
  span {
    margin-left: 10px;
  }
`;

export const ButtonBox = styled.div`
  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`;
