import { useState } from "react";

const TodoForm = ({ submit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async e => {
    try {
      e.preventDefault();
      await submit(title, description);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={onSubmit} className="todo-form">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="form-control"
        placeholder="Set a title"
      />
      <textarea
        className="form-control"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <button type="submit" className="submit">
        Submit this todo
      </button>
    </form>
  );
};

export default TodoForm;
