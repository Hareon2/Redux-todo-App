import {useDispatch, useSelector} from "react-redux";
import {allTodos, selectVisibleTodos} from "../store2/todos/todos-selectors";
import {removeTodo, toggleTodo} from "../store2/todos/todos-actions";
import {selectActiveFilter} from "../store2/filters/filter-selectors";
import {useParams} from "react-router-dom";

export const TodoList = () => {
    const dispatch = useDispatch();
    const {filter} = useParams()
    const todos = useSelector(state => selectVisibleTodos(state,filter));

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