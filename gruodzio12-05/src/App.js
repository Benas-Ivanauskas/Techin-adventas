export default function App() {
  //galutinis variantas
  const arr = ["jingle", "bells", "sleigh", "reindeer", "Christmas"];
  function coutLetters(arr) {
    if (arr.length === 0) {
      console.log(`Array is empty. Returning 0`);
      return 0;
    }

    arr[3] = "reindr"; // Changed the element with a unique letter (without repeated letters)
    console.log(arr); // Checked the modifies array

    const calculateWordLetters = arr.reduce(
      (total, word) => total + word.length,
      0
    );

    console.log(calculateWordLetters); //result
    return calculateWordLetters;
  }
  console.log(coutLetters(arr));

  const emptyArr = [];
  const resultForEmptyArray = coutLetters(emptyArr);
  console.log(resultForEmptyArray);

  console.log(emptyArr.length);

  return <div></div>;
}
