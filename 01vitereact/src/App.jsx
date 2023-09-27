import Counter_Example from "./Counter_Example";
import Chai from "./Counter_Example";
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [myobj, setMyobj] = useState({ username: "asd", age: 26 });
  const updateobj = { ...myobj };

  const updateobjfun = () => {
    updateobj.age = 30;
    updateobj.username = "Rajesh";
    setMyobj(updateobj);
  };

  console.log("object values", myobj);
  let myarr = [1, 2, 3, 4];

  return (
    <>
      <h1>Project 01</h1>
      <Counter_Example />
      <hr />
      <h1>Project02</h1>
      <p>Tailwind</p>
      <h3 className="bg-green-400 p-4 rounded w-32 m-auto">Tailwind test</h3>

      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          class="w-24 h-24 rounded-full mx-auto"
          src="/sarah-dayan.jpg"
          alt=""
          width="384"
          height="512"
        />
        <div class="pt-6 space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. Its easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div>Sarah Dayan</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
      <br />
      <hr />

      {/* components reusable  */}
      <Card username="delta" myobj={myobj} myarr={myarr} btnText="Show" />
      <Card username="akshay" />

      <br />
      <hr />

      <h1>How to update object properties values </h1>
      <p>{myobj.username}</p>
      <p>{myobj.age}</p>
      <button onClick={updateobjfun}>Update Obj</button>
    </>
  );
}

export default App;
