import { useContext } from "react";
import { countContext } from "./Components/Context";

export default function Button() {
  const { setCount } = useContext(countContext);
  return (
    <div>
      {/* propsDrilling condition */}
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase Count
      </button>
      {/* propsDrilling condition */}
    </div>
  );
}
