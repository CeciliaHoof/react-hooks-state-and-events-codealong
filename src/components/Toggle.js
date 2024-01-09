import React, { useState } from "react";

function Toggle() {
  const [ toggle, setToggle ] = useState(false);
  function clickHandler(){
    setToggle(toggle => !toggle)
  }

  const color = toggle ? "red" : "white";

  return <button style={{ background: color }}onClick={clickHandler}>{toggle ? "on" : "off"}</button>;
}

export default Toggle;
