import React from "react";
import { useState } from "react";
import "../css/Calculater.css";
function Calculater() {
  const [result, SetResult] = useState(" ");
  const Handleclick = (e) => {
    SetResult(result.concat(e.target.name));
  };
  const Backspack = () => {
    SetResult(result.slice(0, result.length - 1));
  };
  const Clearall = () => {
    SetResult("");
  };

  function calculate() {
    try {
      SetResult(eval(result).toString());
    } catch (error) {
      SetResult(error);
    }
  }

  return (
    <>
      <div className="main-wrapper">
        <div className="wrapper">
          <div className="cal-app">
            <input
              type="text"
              value={result}
              style={{ width: "100%", height: "30px" }}
            />
            <div className="keypad">
              <button id="clear" onClick={Clearall}>
                Clear
              </button>
              <button id="C" onClick={Backspack}>
                C
              </button>
              <button name="+" className="operater" onClick={Handleclick}>
                +
              </button>
              <button name="1" onClick={Handleclick}>
                1
              </button>
              <button name="2" onClick={Handleclick}>
                2
              </button>
              <button name="3" onClick={Handleclick}>
                3
              </button>
              <button name="-" className="operater" onClick={Handleclick}>
                -
              </button>
              <button name="4" onClick={Handleclick}>
                4
              </button>
              <button name="5" onClick={Handleclick}>
                5
              </button>
              <button name="6" onClick={Handleclick}>
                6
              </button>
              <button name="*" className="operater" onClick={Handleclick}>
                *
              </button>
              <button name="7" onClick={Handleclick}>
                7
              </button>
              <button name="8" onClick={Handleclick}>
                8
              </button>
              <button name="9" onClick={Handleclick}>
                9
              </button>
              <button name="/" className="operater" onClick={Handleclick}>
                /
              </button>
              <button name="0" onClick={Handleclick}>
                0
              </button>
              <button name="." onClick={Handleclick}>
                .
              </button>
              <button name="=" className="equals" onClick={calculate}>
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Calculater;
