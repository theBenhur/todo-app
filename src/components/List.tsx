import ListItem from "./ListItem";
import { Funcs, Todo } from "./Interfaces/todo";

const List: React.FC<{
  todos: Todo[];
  fncs: Funcs;
}> = ({ todos, fncs }) => {
  return (
    <>
      {todos.map((todo) => (
        <ListItem
          id={todo.id}
          todo={todo.todo}
          done={todo.done}
          fncs={fncs}
        ></ListItem>
      ))}
    </>
  );
};

export default List;
