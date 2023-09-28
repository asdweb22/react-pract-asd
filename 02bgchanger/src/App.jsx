import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-3 px-3 rounded">
            <button
              className="outline-none px-4 bg-red-700 text-white"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 bg-green-700 text-white"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 bg-blue-700 text-white"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 bg-pink-400 text-white"
              onClick={() => setColor("pink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 bg-orange-400 text-white"
              onClick={() => setColor("orange")}
            >
              orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
