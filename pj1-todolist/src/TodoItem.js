import { useEffect, useState } from 'react';

// TodoItem === 컴포넌트
function TodoItem ({item, i, deleteTodo}) {
    const [isValidCheck, setIsValidCheck] = useState(false);
    

    const changeCheck = () => {
      setIsValidCheck(!isValidCheck); // 기존 값에 반대
    }

    const onClickDelete = () => {
        deleteTodo(i)
        
    }
    
    return (
        <li>
            <input type="checkbox" value={isValidCheck} onChange={changeCheck}/>
            <span style={{ textDecoration: isValidCheck?'line-through':'none',color:isValidCheck?'red':'#000' }}>{item}</span>
            <button type="button" onClick={onClickDelete}>삭제</button>
        </li>
    )
}

export default TodoItem;