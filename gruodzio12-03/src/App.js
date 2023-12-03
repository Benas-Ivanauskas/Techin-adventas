import { useState } from "react";

export default function App() {
  return (
    <>
      <div>
        <Calculator />
      </div>
    </>
  );
}

function Calculator() {
  const [quantity, setQuantity] = useState("");
  const [fromUnit, setFromUnit] = useState("cups");
  const [toUnit, setToUnit] = useState("tablespoons");
  const [result, setResult] = useState("");

  function handleConvertMeasurement() {
    // konvertavimo rodikliai
    const convertRates = {
      cups: {
        tablespoons: 16,
        teaspoons: 48,
      },
      tablespoons: {
        cups: 1 / 16,
        teaspoons: 3,
      },
      teaspoons: {
        cups: 1 / 48,
        tablespoons: 1 / 3,
      },
    };

    const convertRate = convertRates[fromUnit]?.[toUnit];

    const convertedResult = quantity * convertRate;

    setResult(
      `${quantity} ${fromUnit} is equal to ${convertedResult} ${toUnit}.`
    );
    setQuantity("");
  }

  return (
    <div>
      <h1>ingredient measurements Converter</h1>
      <p>Type quantity From:</p>
      <input
        placeholder="type quantity..."
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        <option value="cups">Cups</option>
        <option value="tablespoons">Table Spoons</option>
        <option value="teaspoons">Tea Spoons</option>
      </select>
      <p>To:</p>
      <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        <option value="cups">Cups</option>
        <option value="tablespoons">Table Spoons</option>
        <option value="teaspoons">Tea Spoons</option>
      </select>
      <p>Answer: {result}</p>
      <button onClick={handleConvertMeasurement}>Convert</button>
    </div>
  );
}
