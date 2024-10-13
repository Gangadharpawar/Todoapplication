import React from "react";
import { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import Todolist from "./Todolist";
var count = 31;
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [Showloader, SetShowloader] = useState(true);
  // {
  //   id: 1,
  //   description: "Learn HTML",
  // },
  // {
  //   id: 2,
  //   description: "Learn CSS",
  // },
  // {
  //   id: 3,
  //   description: "Learn JS",
  // },
  // {
  //   id: 4,
  //   description: "Learn React",
  // },
  // ]);

  useEffect(() => {
    function getDataFromServer() {
      const url = "https://dummyjson.com/todos";
      let urlobject = fetch(url);
      urlobject
        .then((data) => {
          let jsonPromiseObj = data.json();
          jsonPromiseObj
            .then((jsonData) => {
              const todosdata = jsonData.todos.map((todo) => ({
                id: todo.id,
                description: todo.todo,
              }));
              setTodos(todosdata);
              SetShowloader(false);
            })
            .catch((error) => {
              console.log(" parsing error", error);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    }
    getDataFromServer();
  }, []);

  // Function Add Todo data  on Server
  const onAddTodo = (newTodoDescription) => {
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        setTodos([...todos, { id: count++, description: newTodoDescription }])
      ),
    })
      .then((response) => response.json())
      .then(() => {
        // setTodos([...todos, { id: count++, description: newTodoDescription }]);
        alert("Todo Added successfully");
      })
      .catch((error) => {
        console.log("error ", error);
      });
  };
  // Function Add Todo data  on local system

  // const onAddTodo = (newTodoDescription) => {
  //   setTodos([...todos, { id: count++, description: newTodoDescription }]);
  // };

  // Function  Todo data delete From Server
  const Deletetodo = (id) => {
    fetch(`https://dummyjson.com/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        var delid = todos.filter((todo) => todo.id !== id);
        setTodos(delid);
        alert("Todo deleted successfully");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  // Function Todo data delete From Local system
  // const Deletetodo = (id) => {
  //   var delid = todos.filter((todo) => todo.id !== id);
  //   setTodos(delid);
  // };

  const onUpdateTodo = (id, newdescription) => {
    // for (let i = 0; i < todos.length;i++) {
    //   if(todos[i].id=== id){
    //     todos[i].description=newdescription;
    //   }
    // }
    // setTodos([...todos]);

    todos.map((to) => (to.id === id ? (to.description = newdescription) : ""));
    setTodos([...todos]);
  };
  return (
    <div>
      <TodoInput onAddTodo={onAddTodo}></TodoInput>
      <Todolist
        todos={todos}
        Deletetodo={Deletetodo}
        onUpdateTodo={onUpdateTodo}
        Showloader={Showloader}
      ></Todolist>
    </div>
  );
}
