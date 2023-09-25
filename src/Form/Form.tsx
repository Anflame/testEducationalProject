import logo from "./logo.svg";
import { useState, useEffect } from "react";

function Form() {
  const [data, setData] = useState<null | object>(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");

  const onClick = () => setToggle((prev) => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  });

  return (
    <div>
      <h1 data-testid="value-heading">{value}</h1>
      {toggle && <div data-testid="toggle">toggle</div>}
      {data && <div>data</div>}
      {/* data */}
      <input
        style={{ color: "red" }}
        type="text"
        placeholder="input value1"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button data-testid="toggle-btn" onClick={onClick} type="submit">
        button
      </button>
      Hello React
    </div>
  );
}

export default Form;
