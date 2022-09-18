import IndirectSon from "./IndirectSon";
import React, { useState } from "react";

// eslint-disable-next-line
export default (props) => {
  const [name, setName] = useState("?");
  const [age, setAge] = useState("0");
  const [nerd, setNerd] = useState("false");

  function sendInfo(name, age, nerd) {
    setAge(age);
    setName(name);
    setNerd(nerd);
  }
  return (
    <div>
      <div>
        <span>{name} </span>
        <span>
          <strong>{age} </strong>
        </span>
        <span>{nerd ? "True" : "False"}</span>
      </div>
      <IndirectSon clicked={sendInfo}></IndirectSon>
    </div>
  );
};
