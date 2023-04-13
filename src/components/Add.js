import React, { useEffect, useState } from "react";

import Tasks from "./Tasks";

const Add = () => {
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);

  const addItem = () => {
    if (content !== "") {
      const newTodo = {
        id: id,
        work: content,
        isEditing: false,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setId(id + 1);
      setContent("");
    } else {
      alert("Enter any chore!!");
    }
  };
  return (
    <div className="h-screen  flex justify-center w-screen items-center">
      <div className=" h-3/4 bg-[#8EA8C3] w-2/5 rounded-2xl  justify-center items-center border-[3px] border-[#23395b]">
        <div className="flex space-x-5 w-full justify-center items-center mt-3">
          <input
            type="text"
            placeholder="whats for today?!"
            className="input"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button
            type="button"
            className="w-5 button rounded-lg"
            onClick={addItem}
          >
            <span className="button__text">Add Item</span>
            <span className="button__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="currentColor"
                height="24"
                fill="none"
                className="svg"
              >
                <line y2="19" y1="5" x2="12" x1="12"></line>
                <line y2="12" y1="12" x2="19" x1="5"></line>
              </svg>
            </span>
          </button>
        </div>

        <div className=" flex flex-col justify-center items-center  space-y-4 mt-14 w-full">
          {todos.map((todo) => {
            return (
              <Tasks
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Add;
