import { Funcs, Todo } from "./Interfaces/todo";

const ListItem: React.FC<{
  id: number;
  todo: string;
  done: boolean;
  fncs: Funcs;
}> = ({ id, todo, done = false, fncs }) => {
  return (
    <li className={`item ${done ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={done}
        onChange={() => {
          if (!done && fncs["mark"]) fncs["mark"](id);
          if (done && fncs["unmark"]) fncs["unmark"](id);
        }}
      />
      <label
        onClick={() => {
          if (fncs.getTodo && fncs.setTodo && fncs.show) {
            const todo: Todo = fncs.getTodo(id);
            fncs.setTodo(todo);
            fncs.show(true);
          }
        }}
      >
        {todo}
        {done && <span className="done" />}
      </label>
      {done && (
        <button
          className="delete"
          onClick={() => {
            if (fncs.delete) fncs.delete(id);
          }}
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default ListItem;
