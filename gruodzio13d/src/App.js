import { useState } from "react";
import "./App.css";

export default function App() {
  const nameList = [
    "Open your heart to Christmas magic 🎄",
    "Christmas: making the world softer and beautiful 🤶",
    "Christmas holds all time together 🎅",
    "Spread Christmas cheer with a song 🎄❄",
    "Christmas is doing a little extra for someone ❄🤶",
    "Give without expecting on Christmas 🎄",
    "Peace on earth when we live Christmas daily 🎅",
    "Christmas isn't a season; it's a feeling ❄",
  ];
  const [randomName, setRandomName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [turnLight, setTurnLights] = useState(false);

  function handleRandomName() {
    const randomIndex = Math.floor(Math.random() * nameList.length);
    const newName = nameList[randomIndex];
    setRandomName(newName);
    setIsOpen(true);
  }
  function handleClosed() {
    setIsOpen(false);
    setTurnLights(false);
  }
  function handleTurnLights() {
    setTurnLights(!turnLight);
  }

  return (
    <div>
      <h1>Random Christmas Quotes generator</h1>
      <p>Click to generate Christmas Quote</p>
      <button onClick={handleRandomName}>
        {isOpen ? "Next quote" : "Click here"}
      </button>
      <button onClick={handleTurnLights}>
        {turnLight ? "Turn Off lights" : "Turn on Card Lights"}
      </button>
      {isOpen && (
        <Card
          randomName={randomName}
          handleClosed={handleClosed}
          turnLight={turnLight}
        />
      )}
    </div>
  );
}

function Card({ randomName, handleClosed, turnLight }) {
  return (
    <section>
      <div className="card">
        <h2 className="label">Chirstmas Quotes</h2>
        <p className="text">{randomName}</p>
        <p className="turn-off" onClick={handleClosed}>
          ✖
        </p>
        {turnLight && (
          <div>
            <button className="btn1"></button>
            <button className="btn2"></button>
            <button className="btn1"></button>
            <button className="btn2"></button>
          </div>
        )}
      </div>
    </section>
  );
}
