import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DangerousIcon from "@mui/icons-material/Dangerous";

const Tasks = ({ todo, todos, setTodos }) => {
  const deleteHandler = (id) => {
    setTodos(
      todos.filter((todoo) => {
        return todoo.id !== id;
      })
    );
  };

  const doneHandler = () => {
    setTodos(
      todos.map((todoo) => {
        if (todo.id === todoo.id) {
          return { ...todoo, isDone: !todo.isDone };
        }
        return todoo;
      })
    );
  };

  const editHandler = () => {
    setTodos(
      todos.map((todoo) => {
        if (todoo.id === todo.id) {
          return { ...todoo, isEditing: !todoo.isEditing };
        }
        return todoo;
      })
    );
    console.log(todo);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className=" bg-[#568CB3] text-white w-3/4 py-1 rounded-md hover:scale-105 hover:shadow-xl duration-200 ease-out ">
        <div
          className={`flex justify-between mx-3 group items-center ${
            todo.isDone ? "opacity-40 line-through" : ""
          }`}
        >
          {todo.work}{" "}
          <div className="flex justify-between items-center duration-200">
            <IconButton onClick={doneHandler}>
              {todo.isDone ? (
                <DangerousIcon className="cursor-pointer hover:text-red-500 transition active:text-red-600 duration-200" />
              ) : (
                <CheckCircleIcon className="cursor-pointer hover:text-green-400" />
              )}
            </IconButton>
            <IconButton onClick={editHandler}>
              <EditIcon className="cursor-pointer hover:text-white" />
            </IconButton>
            <IconButton onClick={() => deleteHandler(todo.id)}>
              {
                <DeleteIcon className="cursor-pointer hover:text-red-500 transition active:text-red-600 duration-200" />
              }
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
