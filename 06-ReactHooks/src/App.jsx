import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildComp from "./Components/ChildComp";

function App() {
  const [count, setCount] = useState(0);
  const myfun = () => {
    alert("function from parent called");
  };

  return (
    <>
      <ChildComp
        title="Props Testing title"
        myfun={myfun}
        bgColor="orange"
        buttonColor="black"
      />
      <ChildComp
        title="Props Testing title"
        myfun={myfun}
        bgColor="blue"
        buttonColor="black"
      />
    </>
  );
}

export default App;
