import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, SetnumberAllowed] = useState(false);
  const [characterAllowed, setCharAllowed] = useState(false);

  const [password, setPassword] = useState("");

  // useRef hook  for taking reference
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*-_+=[]{}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-center text-white text-4xl">Password Generator</h1>
      <div className="w-full max-w-md mx-auto py-3 shadow-md rounded px-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                SetnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="">characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
