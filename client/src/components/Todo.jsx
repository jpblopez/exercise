import React from "react";

const styles = ["todo", "todo done"];

const Todo = ({ title, description, status, onDelete, onDone }) => {
  return (
    <div className={styles[status]}>
      <div className="content">
        <div>{title}</div>
        <div>{description}</div>
      </div>
      <div className="action">
        <button className="submit" onClick={onDone}>
          Done
        </button>
        <button className="delete" onClick={onDelete}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
