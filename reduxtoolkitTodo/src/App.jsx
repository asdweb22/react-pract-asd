import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import PractTodo from "./components/PractTodo";

function App() {
  return (
    <>
      <h1 className="text-orange-800">Learn About Redux Tookit</h1>
      <AddTodo />
      <Todos />

      <hr />
      <br />
      <h2 className="bg-primary text-white">
        My Basic todo app with localstorage
      </h2>
      <PractTodo />
    </>
  );
}

export default App;
