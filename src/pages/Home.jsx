import React from "react";
<<<<<<< HEAD
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
=======
import Form from "../js/Form";
import Header from "../js/Header";
import Layout from "../js/Layout";
import List from "../js/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
>>>>>>> 2c5a407f20cf39c2c92c4925a5f5d2ebba416d64
  );
};

export default Home;
