import { useState } from "react";

function Customise( {changeFontColor, changeAccentColor}) {

  return (
    <div className="customiseBar">
      <label htmlFor="fontColor" className="colorPicker">
        <div className="fontIcon"></div>
        <input type="color" id="fontColor" onChange={changeFontColor}></input>
      </label>
      <label htmlFor="accentColor" className="colorPicker">
        <div className="accentIcon"></div>
        <input type="color" id="accentColor" onChange={changeAccentColor}></input>
      </label>
    </div>
  );
}

export default Customise;
