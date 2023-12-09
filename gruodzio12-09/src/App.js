export default function App() {
  const optimizeRoute = ["London", "New York", "Paris", "Tokyo"];

  // First Try
  // optimizeRoute.sort(function (a, b) {
  //   return b.length - a.length;
  // });
  // console.log(optimizeRoute);

  //Second Try - shorter variant but its the same
  optimizeRoute.sort((a, b) => b.length - a.length);
  console.log(optimizeRoute);

  return <div></div>;
}
