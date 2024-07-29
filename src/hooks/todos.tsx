import { useState } from "react";
import { Todos, Todo } from "../components/Interfaces/todo";
const useTodos = () => {
  const [todos, setTodos] = useState<Todos>({ pending: [], completed: [] });

  const addTodo = (title: string): void => {
    const newTodo = { id: Date.now(), todo: title, done: false };
    setTodos({ ...todos, pending: [...todos.pending, newTodo] });
  };
  const updateTodo = (todo: Todo) => {
    const index: number = todos.pending.findIndex((e) => e.id === todo.id);
    if (index !== -1) {
      const copy: Todos = { ...todos };
      copy.pending[index] = todo;
      setTodos(copy);
    }
  };
  const markAsDone = (id: number): void => {
    const index: number = todos.pending.findIndex((e) => e.id === id);
    if (index !== -1) {
      const copy: Todos = { ...todos };
      const todo: Todo = copy.pending.splice(index, 1)[0];
      todo.done = true;
      copy.completed.push(todo);
      setTodos(copy);
    }
  };

  const unmarkAsDone = (id: number): void => {
    const index: number = todos.completed.findIndex((e) => e.id === id);
    if (index !== -1) {
      const copy: Todos = { ...todos };
      const todo: Todo = copy.completed.splice(index, 1)[0];
      todo.done = false;
      copy.pending.push(todo);
      setTodos(copy);
    }
  };

  const removeTodo = (id: number) => {
    const index: number = todos.completed.findIndex((e) => e.id === id);
    if (index !== -1) {
      const copy: Todos = { ...todos };
      copy.completed.splice(index, 1);
      setTodos(copy);
    }
  };

  const getById = (id: number) => {
    let title: Todo;
    const index: number = todos.pending.findIndex((e) => e.id === id);
    // if (index !== -1) {
    const todo: Todo = todos.pending[index];
    title = todo;
    // }
    return title;
  };

  return {
    todos,
    addTodo,
    removeTodo,
    markAsDone,
    unmarkAsDone,
    getById,
    updateTodo,
  };
};

export default useTodos;
