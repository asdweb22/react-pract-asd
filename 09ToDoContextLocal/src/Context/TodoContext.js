import { createContext, useContext } from "react";

//here we define global context
export const TodoConext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//this todo context will use other app component for that we export todocontext
export const useTodo = () => {
  return useContext(TodoConext);
};

export const TodoProvider = TodoConext.Provider;
