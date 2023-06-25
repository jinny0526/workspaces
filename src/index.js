import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import "./index.css";
=======
>>>>>>> 2c5a407f20cf39c2c92c4925a5f5d2ebba416d64
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
=======
  <Provider store={store}>
    <App />
  </Provider>
>>>>>>> 2c5a407f20cf39c2c92c4925a5f5d2ebba416d64
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
