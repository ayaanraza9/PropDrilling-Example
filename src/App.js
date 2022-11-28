import { useState } from "react";
import DisplayCount from "./DisplayCount";
import "./styles.css";
import { countContext } from "./Components/Context";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* propDrilling Condition */}
      {/* <h1>Increase Count</h1>
      <DisplayCount count={count} setCount={setCount} /> */}
      {/* propDrilling Condition */}

      <countContext.Provider value={{ count, setCount }}>
        <h1>Increase Count</h1>
        <DisplayCount />
      </countContext.Provider>
    </div>
  );
}
