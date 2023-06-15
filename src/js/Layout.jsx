import React from "react";
import "../css/main.css";
//props children 용도
//Layout 컴포넌트가 쓰여지는 모든 곳에서 <Layout>…</Layout> 안에 있는 정보를 받아서 가져올 수 있다.
const Layout = (props) => {
  return <div className="layout">{props.children}</div>;
};

export default Layout;
