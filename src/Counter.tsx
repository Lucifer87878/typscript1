import React, { ChangeEvent, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAddClick = () => setCount(count + 1);
  const handleRemoveClick = () => setCount(count - 1);

  const handleClickChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue)) {
      setCount(inputValue);
    } else {
      window.alert("Must write a number, DUH...!!!!");
    }
  };

  return (
    <div>
      <input type="number" value={count} onChange={handleClickChange} />
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleRemoveClick}>Remove</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;

  


  //   const handleChange: React.ChangeEventHandler<HTMLInputElement> =(e) => {
  //     setCount(Number(e.target.value))
  //   };    onChange={handleChange}
