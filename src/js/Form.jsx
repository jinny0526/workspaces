import React, { useState } from "react";
import "../css/main.css";
//입력 양식 전부를 감싸는 것

function Form({ todos }) {
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
    setTodo({ ...todo, [name]: value });
  }
  return (
    <div className="add-form">
      y
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
      추가하기
    </div>
  );
}

export default Form;
