import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTodo, toggleTodo} from "./store2/todos/todos-actions";
import {allTodos, activeTodos} from './store2/todos/todos-selectors';
import {NewTodo} from "./components/NewTodo";
import {TodoList} from "./components/TodoList";
import "./index.css";
import {Filters} from "./components/Filters";

export default function App() {
    return (
        <div className="App">
            <h1>Hello Redux Todo</h1>
            <NewTodo/>
            <Filters/>
            <TodoList/>
        </div>
    );
}


