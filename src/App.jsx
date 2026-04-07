import { useState, useEffect } from "react";
import AppRouter from "./routes/AppRouter";

function App() {
  // const [count, setCount] = useState(0);
  // const incrementFunc = () => {
  //   setCount(count + 1);
  // };
  // const decrementFunc = () => {
  //   setCount(count - 1);
  // };
  // useEffect(() => {
  //   console.log("console!!");
  // }, [count]);
  return <AppRouter />;
  // (
  //   <div>
  //     <h1 className="text-4xl text-center mb-5">You clickked {count} times!</h1>
  //     <div className="flex justify-center items-center gap-4">
  //       <button onClick={incrementFunc}>increment</button>
  //       <button onClick={decrementFunc}>decrement</button>
  //     </div>
  //   </div>
  // );
}

export default App;
