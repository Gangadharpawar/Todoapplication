import React, { useState } from "react";
import Button from "./Button";
import "../css/Tab.css";
import Counter from "./Counter";
import TodoApp from "./TodoApp";
import Info from "./Info";
import Timer from "./Timer";
import Calculater from "./Calculater";
import NotesApp from "./NotesApp";
export default function Tab(timeRemaining) {
  // const content = ["Tab 1 content", "Tab 2 content", "Tab 3 content"];
  const [tabIndex, setTabindex] = useState(0);
  return (
    <>
      {" "}
      <div id="tabs">
        <menu>
          <Button
            className={tabIndex === 0 ? "active" : " "}
            onClick={() => {
              setTabindex(0);
            }}
            label="Info"
          ></Button>
          <Button
            className={tabIndex === 1 ? "active" : " "}
            onClick={() => {
              setTabindex(1);
            }}
            label="TodoApp"
          ></Button>
          <Button
            className={tabIndex === 2 ? "active" : " "}
            onClick={() => {
              setTabindex(2);
            }}
            label="Counter"
          ></Button>
          <Button
            className={tabIndex === 3 ? "active" : " "}
            onClick={() => {
              setTabindex(3);
            }}
            label="Calculater"
          ></Button>
          <Button
            className={tabIndex === 4 ? "active" : " "}
            onClick={() => {
              setTabindex(4);
            }}
            label="Timer"
          ></Button>
          <Button
            className={tabIndex === 5 ? "active" : ""}
            onClick={() => {
              setTabindex(5);
            }}
            label="Notes"
          ></Button>
        </menu>
      </div>
      <div id="tab-content">
        {tabIndex === 0 ? (
          <Info></Info>
        ) : tabIndex === 1 ? (
          <TodoApp></TodoApp>
        ) : tabIndex === 2 ? (
          <Counter></Counter>
        ) : tabIndex === 3 ? (
          <Calculater></Calculater>
        ) : tabIndex === 4 ? (
          <Timer></Timer>
        ) : (
          <NotesApp></NotesApp>
        )}
      </div>
    </>
  );
}
