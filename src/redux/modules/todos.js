import uuid from "react-uuid";

const initialState = [
  {
    id: uuid(),
    title: "리액트 공부하기",
    body: "리액트 기초를 공부해봅시다.",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리액트 공부하기",
    body: "리액트 기초를 공부해봅시다.",
    isDone: true,
  },
];
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case SWITCH_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    default:
      return state;
  }
};

export default todos;
