import React, { useState } from "react";
import Form from "../js/Form";
import Header from "../js/Header";
import Layout from "../js/Layout";
import List from "../js/List";

const TodoList = () => {
  // 화면에서 자주 변경되는 데이터를 useState로 관리하세요
  const [todos, setTodos] = useState([
    // 초기 데이터
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);
  return (
    <Layout>
      <Header />
      <Form setTodos={setTodos} todos={todos} />
      <List todos={todos} setTodos={setTodos} />
    </Layout>
  );
};

export default TodoList;
