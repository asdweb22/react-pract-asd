import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/asdwed22")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-5 bg-gray-600 text-white p-4 text-3xl">
      Git hub Folllowers :{data.followers}
    </div>
  );
}

export default Github;
