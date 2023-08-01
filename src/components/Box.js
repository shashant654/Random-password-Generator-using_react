import React, { useState } from "react";

const Box = () => {
  const [state, setState] = useState("");

  const generatorPassword = () => {
    let pass = "";
    let string =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

    for (let index = 1; index <= 8; index++) {
      let char = Math.floor(Math.random() * string.length + 1);
      setState(pass += string.charAt(char));
    }
  };

  const cpyFunction = () => {
          navigator.clipboard.writeText(state);
  }

  return (
    <div className="container">
      <h2>Random Password Generator</h2>
      <input
        type="text"
        readOnly
        disabled
        name=""
        placeholder="password"
        id=""
        value={state} 
      />
      <div className="btns">
        <button onClick={generatorPassword}>Generate Password</button>
        <button onClick={cpyFunction}>copy Password</button>
      </div>
    </div>
  );
};

export default Box;
