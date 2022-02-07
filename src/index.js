import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./components/Redux/State";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <App store={store} dispatch={store.dispatch.bind(store)} />,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.state);
store.subscribe(rerenderEntireTree);
