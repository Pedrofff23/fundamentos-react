import { useState } from "react";
import "./Input.css";

export default (props) => {
  const [value, setValue] = useState("Initial");

  function onChange(e) {
    setValue(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{value}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <input placeholder={value} onChange={onChange} />
        <input placeholder={value} readOnly />
        <input placeholder={undefined}  />
      </div>
    </div>
  );
};
