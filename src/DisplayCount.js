import { useContext } from "react";
import Button from "./Button";
import { countContext } from "./Components/Context";

export default function DisplayCount() {
  const { count } = useContext(countContext);
  return (
    <div>
      {count}
      <Button />
      {/* prop drilling condition */}
      {/* {props.count}
      <Button setCount={props.setCount} /> */}
      {/* prop drilling condition */}
    </div>
  );
}
