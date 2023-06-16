import React, { useState } from "react";
import "../css/main.css";
//입력 양식 전부를 감싸는 것
let number = 0;
function Form({ todos, setTodos }) {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  console.log(todos);

  const [todo, setTodo] = useState(initialState);
  function onChangeHandler(event) {
    const { name, value } = event.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  }

  //trim 공백값 지워주기 조건을 걸고 사용
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todo.title.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    number++;
  };

  //return 중지 아래의 코드가 실행이 안됨
  //... 기존의 데이터를 전부 넣는다.
  //consloe.log로 확인하기
  // setTodo(initialState); 없을때랑 있을 때 비교해봤는데 아무 문제 없어보여서 일단은 뺌
  return (
    <form onSubmit={onSubmitHandler} className="add-form">
      <div className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            className="add-input input-body"
            onChange={onChangeHandler}
          />

          <label className="form-label">내용</label>
          <input
            type="text"
            name="body"
            value={todo.body}
            className="add-input"
            onChange={onChangeHandler}
          />
        </div>
        <button className="add-button">추가하기</button>
      </div>
    </form>
  );
}

export default Form;
