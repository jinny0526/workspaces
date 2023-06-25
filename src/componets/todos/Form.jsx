import React from "react";
import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

const Form = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();
  //action을 dispatch하면 reducer함수를 호출, component에서 redux에서 관리하고 있는 state에 접근하기 위해 dipatch로 action을 객체로 전달

  return (
    <form
      onSubmit={(event) => {
        if (!title || !body) {
          alert("필수값이 누락되었습니다.");
          return false;
        }
        event.preventDefault();

        dispatch({
          type: "ADD_TODO",
          payload: {
            id: uuid(),
            title: title,
            body: body,
            isDone: false,
          },
        });
        setTitle("");
        setBody("");
      }}
    >
      <div>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>내용</label>
        <input
          type="text"
          name="body"
          value={body}
          onChange={(event) => {
            setBody(event.target.value);
          }}
        />
      </div>
      <button>추가하기</button>
    </form>
  );
};

export default Form;
