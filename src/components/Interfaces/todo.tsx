import { Dispatch, SetStateAction } from "react";
export interface Todo {
  id: number;
  todo: string;
  done: boolean;
}
export interface Todos {
  pending: Todo[];
  completed: Todo[];
}
export interface Funcs {
  unmark?: (id: number) => void;
  mark?: (id: number) => void;
  delete?: (id: number) => void;
  getTodo?: (id: number) => Todo;
  setTodo?: Dispatch<SetStateAction<Todo>>;
  show?: Dispatch<SetStateAction<boolean>>;
}
