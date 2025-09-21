import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>📋 My Todo List (Zustand)</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
