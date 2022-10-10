import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
