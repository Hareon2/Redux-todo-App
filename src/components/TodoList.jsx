import {useDispatch, useSelector} from "react-redux";
import {allTodos, selectVisibleTodos} from "../store2/todos/todos-selectors";
import {removeTodo, toggleTodo} from "../store2/todos/todos-actions";
import {selectActiveFilter} from "../store2/filters/filter-selectors";

export const TodoList = () => {
    const dispatch = useDispatch();
    const activeFilter = useSelector(selectActiveFilter)
    const todos = useSelector(state => selectVisibleTodos(state,activeFilter));

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.title}>
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />{" "}
                    {todo.title}{" "}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                </li>
            ))}
        </ul>
    );
};