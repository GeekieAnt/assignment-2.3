import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handlerPlus = () => {
    setCount(count + 1);
  };

  const handlerMinus = () => {
    const result = count - 1;
    if (result >= 0) {
      setCount(count - 1);
    } else {
      alert("Negative Number is not supported");
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <button onClick={handlerMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlerPlus}>+</button>
      <div>
        <button style={{ width: "100px" }} onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
}
export default Counter;
