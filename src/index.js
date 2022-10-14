import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./container/Home/Home";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducer/GlobalReducer";

// STATE MANAGEMENT MENGGUNAKAN REDUX
// const redux = require("redux");
// const createStore = redux.createStore;

// // MEMBUAT REDUX REDUCER DI FOLDER REDUX > REDUCER > GlobalReducer

// // MEMBUAT REDUX STORE
// const store = createStore(rootReducer);

// // MEMBUAT REDUX DISPATCH DI COMPONENT COUNTER (COMPONENT YANG AKAN MENGGUNAKANNYA)

// // ROOT RENDER DENGAN REDUX
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <Home />
//   </Provider>
// );

// STATE MANAGEMENT MENGGUNAKAN CONTEXT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
