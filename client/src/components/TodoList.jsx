import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDelete, onDone }) => {
  if (todos.length === 0) {
    return <div>You dont have any todos left</div>;
  }
  return (
    <div>
      {todos.map(item => {
        return (
          <Todo
            key={item.id}
            title={item.title}
            description={item.description}
            status={item.status}
            onDelete={() => onDelete(item.id)}
            onDone={() => onDone(item.id)}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
