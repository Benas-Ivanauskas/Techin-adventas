import React, { useState } from "react";
import "./App.css";

function App() {
  const [years, setYears] = useState("");
  const [goodBehavior, setGoodBehavior] = useState("");
  const [result, setResult] = useState("");

  function handleCheckSantaList() {
    const niceList = years >= 18 || goodBehavior === "yes";

    setResult(
      niceList
        ? "You are on Santa's Nice List 🙌"
        : "You are on Santa's Naughty 😈 List"
    );
  }

  return (
    <div className="App">
      <h1>Santa List</h1>
      <label>
        Enter your age:
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </label>

      {years < 18 && (
        <label>
          Have you been good this year? (yes/no):
          <input
            type="text"
            value={goodBehavior}
            onChange={(e) => setGoodBehavior(e.target.value)}
          />
        </label>
      )}

      <button onClick={handleCheckSantaList}>Check List</button>
      <p>{result}</p>
    </div>
  );
}

export default App;
