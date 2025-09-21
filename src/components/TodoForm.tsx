import { useState } from "react";
import { useTodoStore } from "../store/todoStore";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const addTask = useTodoStore((state) => state.addTask);

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="พิมพ์งานที่ต้องทำ..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;
