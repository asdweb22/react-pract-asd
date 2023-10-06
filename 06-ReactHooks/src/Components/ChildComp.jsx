import React from "react";
import { useState } from "react";

function ChildComp({ title, myfun, bgColor, buttonColor }) {
  return (
    <div className="text-center p-4 m-3" style={{ backgroundColor: bgColor }}>
      <h1>
        Title Coming from parent Component: <b>{title}</b>
      </h1>
      Function coming from parent component:
      <button
        style={{ color: "white", backgroundColor: buttonColor }}
        className="p-3"
        onClick={myfun}
      >
        Test
      </button>
    </div>
  );
}

export default ChildComp;
