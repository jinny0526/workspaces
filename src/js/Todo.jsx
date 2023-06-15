import React from "react";
import "../css/main.css";
//삭제버튼 만들기
function Todo({ todo, onRemoveHanlder, onCompleteHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onRemoveHanlder(todo.id)}
        >
          삭제
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onCompleteHandler(todo.id)}
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
