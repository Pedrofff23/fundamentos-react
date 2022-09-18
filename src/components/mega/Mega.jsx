import { useState } from "react";
import "./Mega.css";
export default (props) => {
  function generateNumbersNotContained(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(random) ? generateNumbers(min, max, array) : random;
  }

  function generateNumbers(qtde) {
    const numbers = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const newNumber = generateNumbersNotContained(1, 60, nums);
        return [...nums, newNumber];
      }, [])
      .sort((n1, n2) => n1 - n2);
    return numbers;
  }
  const [qtde, setQtde] = useState(props.qtde || 6);
  const inicialNumbers = Array(qtde).fill(0);
  const [numbers, setNumbers] = useState(inicialNumbers);

  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numbers.join(" ")}</h3>
      <div>
        <label>Numbers to generate</label>
        <input
          min="2"
          max="20"
          type="number"
          value={qtde}
          onChange={(e) => {
            setQtde(+e.target.value);
            //setNumbers(generateNumbers(+e.target.value));
          }}
        />
      </div>
      <button onClick={(_) => setNumbers(generateNumbers(qtde))}>
        Generate Numbers
      </button>
    </div>
  );
};
