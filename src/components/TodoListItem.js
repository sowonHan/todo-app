// 각각의 할 일 항목에 대한 정보를 보여줌
import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

function TodoListItem({ todo, onRemove, onToggle, style }) {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItme-virtualized" style={style}>
      <div className="TodoListItem">
        <div
          className={cn("checkbox", { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
}

export default React.memo(TodoListItem);
