import React from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";
// import { ColorRing } from "react-loader-spinner";
import { ProgressBar } from "react-loader-spinner";
function Todolist({ todos, Deletetodo, onUpdateTodo, Showloader }) {
  const tablestyle = {
    border: "2px solid green",
  };
  return (
    <>
      {Showloader ? (
        // <ColorRing
        //   visible={true}
        //   height="80"
        //   width="80"
        //   ariaLabel="color-ring-loading"
        //   wrapperStyle={{}}
        //   wrapperClass="color-ring-wrapper"
        //   colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        // />
        <div>
          <ProgressBar
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          Loadding.....
        </div>
      ) : (
        <table style={tablestyle}>
          <thead>
            <tr>
              <td> ID</td>
              <td>Description</td>
              <td>Operataion</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                description={todo.description}
                /* <td>{<Button label="Edit">Edit</Button>}{<Button label="Delete">Delete</Button>}</td> */
                onUpdateTodo={onUpdateTodo}
                Deletetodo={Deletetodo}
              ></TodoItem>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
export default Todolist;
