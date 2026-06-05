import { useState, useEffect } from "react";

function TodoList() {

  const [ todos, setTodos ] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [apiUrl]);

  return (
    <div className="todo-container">
      <h1>My Tasks</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isCompleted ? 'completed' : ' '}>
            <input type="checkbox" checked={todo.isCompleted} readOnly />
            <span className="todo-title">{todo.title}</span>
            <small>{new Date(todo.createdAt).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default TodoList;