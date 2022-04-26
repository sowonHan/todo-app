// 일정을 추가하는 기능
// https://react-icons.github.io/react-icons/ 얘도 npm으로 설치해야됨

import React from "react";
// 사용할 아이콘의 이름을 복사해서 중괄호 안에 붙여넣으면 됨
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

function TodoInsert(props) {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
