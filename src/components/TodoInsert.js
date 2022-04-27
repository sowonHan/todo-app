// 일정을 추가하는 기능
// https://react-icons.github.io/react-icons/ 얘도 npm으로 설치해야됨

import React, { useCallback, useState } from "react";
// 사용할 아이콘의 이름을 복사해서 중괄호 안에 붙여넣으면 됨
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

function TodoInsert({ onInsert }) {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      // submit의 새로고침 방지
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
}

export default TodoInsert;
