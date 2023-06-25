import { useSelector } from "react-redux";
import "./App.css";
import Router from "./shared/Router";

function App() {
  const todos = useSelector(function (state) {
    return state.todos;
  });
  return <div>Reduc TodoList</div>;
}
//useSelector내부는 인자로 콜백함수를 넣어야됨
export default App;
