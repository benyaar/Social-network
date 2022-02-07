import React from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/Profile"
              element={
                <Profile
                  newPostText={props.store.state.profilePage.newPostText}
                  postData={props.store.state.profilePage.postData}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/Dialogs/*"
              element={
                <Dialogs
                  dialogData={props.store.state.dialogPage.dialogData}
                  messageData={props.store.state.dialogPage.messageData}
                  dispatch={props.dispatch}
                  newMessageText={props.store.state.dialogPage.newMessageText}
                />
              }
            />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
