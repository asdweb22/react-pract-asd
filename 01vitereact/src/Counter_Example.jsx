import { useState } from "react";

function Counter_Example() {
  const [count, setCount] = useState(10);

  const addValue = () => {
    if (count === 20) {
      setCount(20);
    } else {
      // interview Question
      // setCount(count+ 1);
      // setCount(count+ 1);

      setCount((prevCount) => prevCount + 1);
      setCount((prevCount) => prevCount + 1);
    }
  };

  const removeVal = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h2> Assignment: 1 Counter Example : min=0 max=20</h2>
      <h2>Counter value :{count}</h2>
      <br />
      {/* //here we are passing reference of function, we are not calling fun otherwise it will called directly */}
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeVal}>Remove value</button>
      <p>counter value :{count}</p>

      <p>
        {" "}
        <b>
          Note : we want to use same updated variable value for that we used
          ract usestate hook
        </b>
      </p>
    </>
  );
}
export default Counter_Example;
