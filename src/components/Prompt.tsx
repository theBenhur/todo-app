import React, {
  Dispatch,
  SetStateAction,
  MouseEvent,
  useState,
  useEffect,
  useRef,
} from "react";
import { Todo } from "./Interfaces/todo";

const Prompt: React.FC<{
  show: boolean;
  cancel: Dispatch<SetStateAction<boolean>>;
  add: (title: string) => void;
  initialState: Todo;
  setCurrentTodo: Dispatch<SetStateAction<Todo>>;
  updateTodo: (todo: Todo) => void;
}> = ({ show, cancel, add, initialState, setCurrentTodo, updateTodo }) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [title, setTitle] = useState<string>("");
  const [update, setUpdate] = useState<boolean>(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (title.length <= 3) return;
    if (update) {
      updateTodo({ id: initialState.id, todo: title, done: initialState.done });
    } else {
      add(title);
    }
    cancel(false);
    setCurrentTodo({ id: 0, todo: "", done: false });
  };

  const handleCancel = (event: MouseEvent<HTMLButtonElement>) => {
    cancel(false);
    setCurrentTodo({ id: 0, todo: "", done: false });
  };

  useEffect(() => {
    if (show) ref.current?.focus();
    setTitle(initialState.todo);
    setUpdate(() => initialState.todo !== "");
  }, [show, initialState]);

  return (
    <div className={`promtp-wrapper ${show ? "show" : ""}`}>
      <div className="promtp">
        <textarea
          rows={3}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
          ref={ref}
        >
          {/* {initialState} */}
        </textarea>
        <div className="buttons-wrapper">
          <button onClick={handleCancel}>Cancel</button>
          <button disabled={title.length <= 3} onClick={handleClick}>
            {update ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
