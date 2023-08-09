import { createStore } from "redux";

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false
        }
      ];
    }
    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== action.id);
    }
    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }
    default: {
      return state;
    }
  }
};

export const store = createStore(todos);

// action creators
export const addTodo = (title) => ({
  type: "ADD_TODO",
  title
});
export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  id
});
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id
});
