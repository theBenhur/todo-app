import { useEffect, useState } from "react";
import List from "./components/List";
import Prompt from "./components/Prompt";
import AddButton from "./components/AddButton";
import useTodos from "./hooks/todos";
import "./App.css";
import { Todo } from "./components/Interfaces/todo";

function App() {
  const {
    todos,
    addTodo,
    removeTodo,
    markAsDone,
    unmarkAsDone,
    getById,
    updateTodo,
  } = useTodos();
  const [show, setShow] = useState<boolean>(false);
  const [currentTodo, setCurrentTodo] = useState<Todo>({
    id: 0,
    todo: "",
    done: false,
  });

  useEffect(() => console.log(currentTodo));
  return (
    <div className="todo">
      <h1>Todo APP</h1>
      <hr />
      <div className="lists-wrapper">
        <ul className="list pending">
          <List
            todos={todos.pending}
            fncs={{
              mark: markAsDone,
              getTodo: getById,
              setTodo: setCurrentTodo,
              show: setShow,
            }}
          />
        </ul>
        {todos.completed.length ? (
          <>
            <h3>Completed todos</h3>
            <ul className="list">
              <List
                todos={todos.completed}
                fncs={{
                  unmark: unmarkAsDone,
                  delete: removeTodo,
                }}
              />
            </ul>
          </>
        ) : null}
      </div>
      <Prompt
        show={show}
        cancel={setShow}
        add={addTodo}
        initialState={currentTodo}
        setCurrentTodo={setCurrentTodo}
        updateTodo={updateTodo}
      />
      <AddButton fnc={setShow} />
    </div>
  );
}

export default App;
