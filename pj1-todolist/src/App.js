import { useState } from 'react';
import TodoItem from './TodoItem';


// 컴포넌트 안하고 내부에서 사용할 때
// TodoItem === 컴포넌트
// function TodoItem ({item, i, deleteTodo}) {
//   const [isValidCheck, setIsValidCheck] = useState(false);
  
//   const changeCheck = () => {
//     setIsValidCheck(!isValidCheck); // 기존 값에 반대
//   }

//   const onClickDelete = () => {
//     deleteTodo(i)
//   }
  
//   return (
//     <li>
//       <input type="checkbox" value={isValidCheck} onChange={changeCheck}/>
//       <span style={{ textDecoration: isValidCheck?'line-through':'none',color:isValidCheck?'red':'#000' }}>{item}</span>
//       <button type="button" onClick={onClickDelete}>삭제</button>
//     </li>
//   )
// }


function App() {
  
  const [inputValue, setInputValue] = useState('');
  const [inputList, setInputList] = useState([]);
  
  const changeTodoInput = (e) => {
    setInputValue (e.target.value);
  }

  const addTodo = () => {
    setInputList([...inputList, inputValue]);
    setInputValue('');
  }

  const deleteTodo = (index) => {
    console.log(index)
    setInputList(inputList.filter((item, i) => {
      return index !== i
      // if (index === i) {
      //   return false
      // }else{
      //   return true
      // }
    }))
  }

  // const onClickDelete = (i) => {
  //   deleteTodo(i)
  // }

  return (
    <div className="App">
      <div>
        <input type="input" value={inputValue} onChange={changeTodoInput}/>
        <button type="button" onClick={addTodo}>등록</button>
      </div>
      <ul className="content-list">
        {inputList.map((item, i) => {
          return (
            <TodoItem key={i} item={item} i={i} deleteTodo={deleteTodo}/>
          )
          // return (
          //   <li>
          //   <input type="checkbox"/>
          //     <span>{item}</span>
          //     <button type="button" onClick={(e)=>{onClickDelete(i)}}>삭제</button>
          //   </li>
          // )
        })}
      </ul>
    </div>
  );
}

export default App;


// input 입력값 받아 -> 어딘가에 업데이트
// 입력값 받아
// 등록 버튼 클릭 -> 저장
// 입력값 배열로 저장(리스트로 저장)
// input 저장한 값을 어딘가에 뿌려줘야지 (보여줘)
// 뿌려진 목록에서 원하는 값을 선택(checkboxk) 해서 삭제