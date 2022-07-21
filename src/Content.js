import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Dave");
  const [count, setCount] = useState(0);

  const handleNameChange = () => {
    const names = ["Laura", "Lauraverb", "Tycee", "Lauraverb", "Lauraverb"];
    const int = Math.floor(Math.random() * 5);

    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count+1);
    console.log(count);
  };

  const handleClick2 = () => {
    console.log(count);
  };

  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };

  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click it - handleClick</button>
      <button onClick={handleClick2}>Click it console log count</button>
    </main>
  );
};

export default Content;
