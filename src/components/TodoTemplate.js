// 화면을 가운데 정렬하고, 일정 관리 타이틀을 보여줌
import React from "react";
import "./TodoTemplate.scss";

function TodoTemplate({ children }) {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
}

export default TodoTemplate;
