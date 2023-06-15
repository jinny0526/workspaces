import React from "react";
import Todo from "./Todo";
import "../css/main.css";

//삭제버튼 만들기
function List({ todos, setTodos }) {
  const onRemoveHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };

  //편집버튼 만들기
  const onCompleteHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <Todo
                todo={todo}
                setTodos={setTodos}
                key={todo.id}
                onRemoveHanlder={onRemoveHanlder}
                onCompleteHandler={onCompleteHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <Todo
                todo={todo}
                setTodos={setTodos}
                key={todo.id}
                onRemoveHanlder={onRemoveHanlder}
                onCompleteHandler={onCompleteHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default List;
