import api from "./api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";
const sample = [
  {
    id: 1,
    title: "Morning exercise",
    description: "Squats 30",
    status: 1,
  },
  {
    id: 2,
    title: "Breakfast",
    description: "Cook eggs",
    status: 1,
  },
  {
    id: 3,
    title: "Lunch",
    description: "Cook meat",
    status: 0,
  },
];

const getTodos = async cb => {
  try {
    console.log("getting todos");
    const res = await api.get("/todos");
    cb(res);
  } catch (error) {
    console.log(error);
  }
};

function App() {
  const [todos, setTodos] = useState(sample);

  const onDelete = async id => {
    try {
      await api.delete(`/todo/${id}`);
      await getTodos(setTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const onDone = async id => {
    try {
      const item = todos.find(item => item.id === id);

      await api.patch(`/todo/${id}`, { ...item, status: 1 });
      await getTodos(setTodos);
    } catch (error) {
      console.log(error);
    }
  };

  const submit = (title, description) => {
    console.log("submitting", title, description);
    return api.post("/todos", { title, description, status: 0 });
  };

  useEffect(() => {
    getTodos(setTodos);
  }, []);

  return (
    <div className="App">
      <TodoForm submit={submit} />
      <div
        style={{
          width: "300px",
        }}
      >
        <TodoList todos={todos} onDelete={onDelete} onDone={onDone} />
      </div>
    </div>
  );
}

export default App;
