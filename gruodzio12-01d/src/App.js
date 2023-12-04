import { useState } from "react";
import "./index.css";

const gift = [
  {
    id: 1,
    width: 10,
    height: 5,
    length: 8,
  },
];
export default function App() {
  const [gifts, setGifts] = useState(gift);

  function handleReset() {
    setGifts(gift);
  }

  function handleAddinput(gift) {
    setGifts((gifts) => [...gifts, gift]);
  }

  return (
    <div>
      <h1>Gift wrap calculator</h1>
      <Presents onAddInput={handleAddinput} />
      <Example />

      <div>
        {gifts.map((gift) => (
          <Giftss gift={gift} key={gift.id} gifts={gifts} />
        ))}
      </div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

function Giftss({ gift }) {
  return (
    <div>
      <div className="container">
        <h3>Amount of wrapping paper </h3>
        <p>
          {gift.width * gift.height * 2 +
            gift.width * gift.length * 2 +
            gift.length * gift.height * 2}
        </p>
      </div>
    </div>
  );
}

function Presents({ onAddInput }) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [lenght, setLength] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newGifts = {
      id: crypto.randomUUID(),
      width: width,
      height: height,
      length: lenght,
    };

    onAddInput(newGifts);
    setWidth("");
    setHeight("");
    setLength("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          placeholder="type width..."
          value={width}
          onChange={(e) => setWidth(Number(e.target.value))}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="type height..."
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
      </label>
      <label>
        <input
          type="text"
          placeholder="type length..."
          value={lenght}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </label>
      <button>Add</button>
    </form>
  );
}

function Example() {
  return (
    <div className="div">
      <p className="parag">
        {`<--->`} Example (width: 10, height: 5, length: 8){" "}
        <span className="formula-text">
          Formula: width*height*2 + width*lenght*2 + height*lenght*2
        </span>
      </p>
    </div>
  );
}
