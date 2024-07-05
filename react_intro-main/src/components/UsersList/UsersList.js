import React, { useState } from "react";

export default function UsersList() {
  const [name, setName] = useState("");
  const onButton = () => {
    setName("hello");
  };
  return (
    <div>
      UsersList {name}
      <button onClick={onButton}>click</button>
    </div>
  );
}
