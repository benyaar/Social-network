import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/reduxStore";

export let rerenderEntireTree = (state) => {
 
  ReactDOM.render(
    <App store={store} dispatch={store.dispatch.bind(store)} state ={state}/>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(()=>{rerenderEntireTree(store.getState())});
