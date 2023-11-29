import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-white text-lg font-bold ">Write Your TODOS</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
