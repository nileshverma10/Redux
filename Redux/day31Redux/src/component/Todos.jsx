import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";
// import store from "../Redux/store";

const Todos = () => {
  const [text, setText] = useState("");
  const Todo = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));
        }}
      >
        Add Todo
      </button>
      {Todo.map((e) => {
        return <h1>{e}</h1>;
      })}
    </div>
  );
};

export default Todos;
