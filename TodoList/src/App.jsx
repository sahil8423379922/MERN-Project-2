import React, { Component } from "react";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./AddTodo";

export default function App() {
  return (
    <>
      <div className="mx-5">
        <AddTodo />
        <h2
          className="pt-4 pb-2"
          style={{ fontSize: 30, fontWeight: "bold", fontFamily: "Georgia" }}
        >
          Todo List
        </h2>
        <TodoList />
      </div>
    </>
  );
}
