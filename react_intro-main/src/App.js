import React, { useState } from "react";
import Message from "./components/UsersList/Message";

export default function App() {
  const [input, setInput] = useState("");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const onInput = (e) => {
    setInput(e.target.value);
  };

  const filterNumbers = arr.filter((num) => {
    // Convert num to string and check if it includes the input string
    return num.toString().includes(input);
  });

  return (
    <div>
      <Message />
      <input placeholder="enter number" onChange={onInput} />
      <ul>
        {filterNumbers.map((num) => {
          return <li key={num}>{num}</li>; // Added key attribute to li elements
        })}
      </ul>
    </div>
  );
}
