import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
//import Posts from "./components/Posts";
//import Postform from "./components/Postform";
import UserManage from "./components/userManage";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <UserManage></UserManage>
      </div>
    </Provider>
  );
}

export default App;
