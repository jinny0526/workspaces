import React from "react";
import Form from "../componets/todos/Form";
import Header from "../componets/ui/Header";
import List from "../componets/todos/List";

const Home = () => {
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  );
};

export default Home;
