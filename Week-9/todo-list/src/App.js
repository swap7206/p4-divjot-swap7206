import CssBaseline from '@mui/material/CssBaseline';
import { useLocalStorage } from './hooks/useLocalStorage';
import TodoListApp from './pages/TodoListApp';

export default function MyApp() {
  useLocalStorage("todoList", JSON.stringify([]));

  return (
    <>
      <CssBaseline />
      <TodoListApp />
    </>
  );
}
