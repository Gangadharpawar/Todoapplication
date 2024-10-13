import React, { useState } from "react";
import Button from "./Button";

function TodoItem({ id, description, Deletetodo, onUpdateTodo }) {
  const [showEdit, SetshowEdit] = useState(false);
  const [newdescription, Setnewdescription] = useState(description);

  return (
    <tr>
      <td>{id}</td>
      <td>
        {showEdit ? (
          <input
            type="text"
            value={newdescription}
            onChange={(e) => Setnewdescription(e.target.value)}
          ></input>
        ) : (
          description
        )}
      </td>
      <td>
        {showEdit ? (
          <>
            <Button
              label="Update"
              onClick={() => {
                onUpdateTodo(id, newdescription);
                SetshowEdit(false);
              }}
            ></Button>
            <Button
              label="Cancel"
              onClick={() => {
                SetshowEdit(false);
              }}
            ></Button>
          </>
        ) : (
          <Button
            label="Edit"
            onClick={() => {
              SetshowEdit(true);
            }}
          ></Button>
        )}
        {/* <Button label={"Edit"} onClick={() => onUpdateTodo(id)}></Button> */}
        <Button label={"Delete"} onClick={() => Deletetodo(id)}></Button>
      </td>
    </tr>
  );
}

export default TodoItem;
