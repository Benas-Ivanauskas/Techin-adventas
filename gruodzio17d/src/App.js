import { useState } from "react"




export default function App () {


  return <div>
    <h1>Santa's Gift List Manager App</h1>
    <GiftsForm/>
  </div>
}

function GiftsForm () {
  const [select, setSelect] = useState(null)
  const [input, setInput] = useState('')
  const [giftList, setGiftList] = useState([])
  const [showGift, setShowGift] = useState(false);

  function handleAdd (e) {
    e.preventDefault()
    if (!select || !input) {
     alert(`You need to pick quantity and type gift!!!`)
      return
    }

    const newGift = {
      gift: input,
      number: select,
      id: crypto.randomUUID()
    }
    console.log(newGift)

    setGiftList(gift => [...gift, newGift])

    setInput("")
    setSelect("")
  
  }

  function handleDelete(id) {
    setGiftList((prevGiftList) => prevGiftList.filter((gift) => gift.id !== id));
  }

  const showGiftItems = () => {
    setShowGift(true);
  };

  const hideGiftItems = () => {
    setShowGift(false);
  };
  const resetGifts = () => {
    setGiftList('')
  }
  return <>
   <div>
    <form onSubmit={handleAdd}>
    <select value={select} onChange={e=>setSelect(Number(e.target.value))}>
      <option></option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
    </select>
    <input type="text" placeholder="type gift..." value={input} onChange={e=>setInput(e.target.value)}/>
    <button>Add to gift list</button>
    
    </form>
    {giftList.length > 0 ? (
      <div>

    <ul>
      {giftList.map(gift => (
        <li key={gift.id}>
       {gift.number} x {gift.gift}
       <button className="btn" onClick={() => handleDelete(gift.id)}>X</button>
        </li>
      ))}
    </ul>
    <button onClick={showGiftItems}>Show Gifts</button>
    <button onClick={resetGifts}>Reset Gifts</button>
      </div>
    
    
    ): (
      <p>No gifts added yet.</p>
      )}
    {showGift && (
      <div className="gift-modal">
          <div>
            <h3>List of gifts:</h3>
            <ul>
              {giftList.map((gift) => (
                <li key={gift.id}>
                  {gift.number} x {gift.gift}
                </li>
              ))}
            </ul>
            <button onClick={hideGiftItems}>Close</button>
          </div>
        </div>
      )}
  </div>
      </>
}