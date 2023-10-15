import React, { useEffect, useState } from "react";

function PractTodo() {
  const [todotext, setTodoText] = useState("");
  const [tododesc, setTodoDesc] = useState("");
  const [Alltodos, setAllTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("hello");
  //   console.log(`Text: ${todo} and desc: ${desc}`);
  //   setAllTodos([
  //     ...Alltodos,
  //     { id: Date.now(), todotext: todo, tododesc: desc },
  //   ]);
  //   localStorage.setItem("Alltodos", JSON.stringify(Alltodos));
  //   console.log(Alltodos);
  //   setTodo("");
  //   setTodoDesc("");
  // };

  const addTodo = (e) => {
    e.preventDefault();
    if (todotext && tododesc) {
      if (editingId !== null) {
        const updatedTodos = Alltodos.map((todo) =>
          todo.id === editingId
            ? { id: editingId, text: todotext, desc: tododesc }
            : todo
        );
        setAllTodos(updatedTodos);
        setEditingId(null);
      } else {
        const newTodo = { id: Date.now(), text: todotext, desc: tododesc };
        setAllTodos([...Alltodos, newTodo]);
      }
      setTodoText("");
      setTodoDesc("");
    }
  };

  const clearAllData = () => {
    localStorage.removeItem("Alltodos");
    setAllTodos([]);
  };

  const updateTodo = (id, text, desc) => {
    setEditingId(id);
    setTodoText(text);
    setTodoDesc(desc);
  };

  const deleteTodo = (id) => {
    const newtodoList = Alltodos.filter((todo) => todo.id !== id);
    setAllTodos(newtodoList);
  };

  // Load Todos from localStorage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Alltodos"));
    if (storedTodos) {
      setAllTodos(storedTodos);
    }
  }, []);

  // Save Todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("Alltodos", JSON.stringify(Alltodos));
  }, [Alltodos]);

  return (
    <div>
      <form action="">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Todo"
            value={todotext}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter desc"
            value={tododesc}
            onChange={(e) => setTodoDesc(e.target.value)}
          />
        </div>
        <div className="form-group">
          {" "}
          <button className="btn btn-primary" value="Submit" onClick={addTodo}>
            {editingId !== null ? "Update" : "Add"}
          </button>{" "}
          <button className="btn btn-danger" onClick={clearAllData}>
            CLear list
          </button>
        </div>
      </form>

      <h1>Total no of Todos :{Alltodos.length}</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Todo Text</th>
            <th scope="col">Todo Desc</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {Alltodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td>{todo.desc}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => updateTodo(todo.id, todo.text, todo.desc)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  value="X"
                  onClick={() => deleteTodo(todo.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PractTodo;
