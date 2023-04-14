import React from "react";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { IconButton } from "@mui/material";

const Edit = ({ todo, todos, setTodos, content, setContent }) => {
  const [newData, setNewData] = useState(todo.work);
  const addItem = () => {
    if (newData !== "") {
      setTodos(
        todos.map((todoo) => {
          if (todo.id === todoo.id) {
            return { ...todoo, work: newData, isEditing: !todoo.isEditing };
          }
          return todoo;
        })
      );
    } else {
      alert("Enter any chore");
    }
  };

  return (
    <div className="flex justify-between items-center text-black mx-2">
      <input
        type="text"
        placeholder="Edit"
        className="input"
        value={newData}
        onChange={(e) => setNewData(e.target.value)}
      />

      <IconButton onClick={addItem} className="hover:text-green-500">
        <CheckCircleIcon />
      </IconButton>
    </div>
  );
};

export default Edit;
