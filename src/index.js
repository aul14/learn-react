import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer/GlobalReducer";

const redux = require("redux");
const createStore = redux.createStore;

// MEMBUAT REDUX REDUCER DI FOLDER REDUX > REDUCER > GlobalReducer

// MEMBUAT REDUX STORE
const store = createStore(rootReducer);

// MEMBUAT REDUX DISPATCH DI COMPONENT COUNTER (COMPONENT YANG AKAN MENGGUNAKANNYA)

// ROOT RENDER
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);

// MEMBUAT DENGAN FUNCTIONAL COMPONENT
// function HelloComponent() {
//   return <h1>Hello Component!</h1>;
// }

// MEMBUAT DENGAN JS ES6 DAN STATELESS COMPONENT
// const HelloComponent = () => {
//   return <h1>Hello Component!</h1>;
// };

// MEMBUAT DENGAN STATEFULL COMPONENT
// class StateFullComponent extends React.Component {
//   render() {
//     return <h1>State Full Component!</h1>;
//   }
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
