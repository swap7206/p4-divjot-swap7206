import CssBaseline from '@mui/material/CssBaseline';
import { useLocalStorage } from './hooks/useLocalStorage';
import TodoListApp from './pages/TodoListApp';

export default function MyApp() {
  useLocalStorage("todoList", JSON.stringify([]));

  return (
    <div style={{ backgroundColor: "#fffafa", height: "100vh" }}>
      <CssBaseline />
      <TodoListApp />
    </div>
  );
}
