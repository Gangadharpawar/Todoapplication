import React, { useState } from "react";
import Button from "./Button";

const TodoInput = ({ onAddTodo }) => {
  let [inputValue, setInputValue] = useState();
  const clearinput = () => {
    setInputValue("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Todo Description"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          onAddTodo(inputValue);
          clearinput();
        }}
        label="Add"
      >
        Add
      </Button>
      {inputValue}
    </div>
  );
};

export default TodoInput;
