export default function App() {
  let row = "";
  let l = 9;

  for (let i = 0; i < l; i++) {
    row += " ".repeat(l - i) + "*" + "*".repeat(i * 2) + `\n`;
    // " ".repeat(l-1) sukuria tuscias eilutes iki zvaizgzduciu pradeda nuo 9 ir mazeja
    //"*".repeat(i * 2) sukuria zvaigzdutes nuo tusciu eiluciu *2
  }
  console.log(row);

  return <div></div>;
}
