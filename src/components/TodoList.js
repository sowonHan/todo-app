// TodoListItem을 감싸고 있음
import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

function TodoList() {
  return (
    <div className="TodoList">
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </div>
  );
}

export default TodoList;
