import { useState } from "react";
import "../style.css";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState();

  const handleSubmit = () => {
    setTodo((todo) => {
      return todo.concat({
        text: inputValue,
        id: Math.floor(Math.random() * 10),
      });
    });

    setInputValue("");
  };

  const removeTodo = (id) => setTodo((todo) => todo.filter((t) => t.id !== id));

  return (
    <div className="container">
      <input
        type="text"
        value={inputValue}
        placeholder="Enter new Todo"
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleSubmit}>Submit</button>

      <ul className="todos-list">
        {todo.map(({ text, id }) => {
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              X
            </button>
          </li>;
        })}
      </ul>
    </div>
  );
};
export default Todo;
