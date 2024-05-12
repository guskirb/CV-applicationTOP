import { useState } from "react";

function Customise() {
  const [fontColor, setFontColor] = useState("");
  const [accentColor, setAccentColor] = useState("");

  return (
    <div className="customiseBar">
      <label htmlFor="fontColor" className="colorPicker">
        <div className="fontIcon"></div>
        <input type="color" id="fontColor"></input>
      </label>
      <label htmlFor="accentColor" className="colorPicker">
        <div className="accentIcon"></div>
        <input type="color" id="accentColor"></input>
      </label>
    </div>
  );
}

export default Customise;
