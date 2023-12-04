import { useState } from "react";

export default function App() {
  const nameList = ["John", "Jane", "Rudolf", "Emily", "David", "Ben", "Sarah"];
  const [randomName, setRandomName] = useState("");

  function handleRandomName() {
    const randomIndex = Math.floor(Math.random() * nameList.length);
    const newName = nameList[randomIndex];
    setRandomName(newName);
  }

  return (
    <div>
      <h1>Random name Generator</h1>
      <p>Click button to generate name</p>
      <button onClick={handleRandomName}>Button</button>
      <p>{randomName}</p>
    </div>
  );
}
