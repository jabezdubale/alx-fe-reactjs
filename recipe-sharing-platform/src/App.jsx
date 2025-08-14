import { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-blue-500">App</h1>
      <HomePage />
    </>
  );
}

export default App;
