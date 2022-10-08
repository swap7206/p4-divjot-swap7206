import CssBaseline from '@mui/material/CssBaseline';
import TodoListApp from './pages/TodoListApp';

export default function MyApp() {
  if (!localStorage.getItem("todoList") || typeof JSON.parse(localStorage.getItem("todoList")) !== "object") {
    localStorage.setItem("todoList", JSON.stringify([]));
  }

  return (
    <div style={{ backgroundColor: "#fffafa", height: "100vh" }}>
      <CssBaseline />
      <TodoListApp />
    </div>
  );
}
