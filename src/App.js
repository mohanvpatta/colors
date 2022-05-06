import { useEffect, useState } from "react";
import "./styles/style.css";

const variables = [
  "--f_high",
  "--f_med",
  "--f_low",
  "--f_inv",
  "--b_high",
  "--b_med",
  "--b_low",
  "--b_inv",
  "--background",
];

const getColors = () => {
  const vals = [];
  variables.forEach((variable) => {
    vals.push(
      getComputedStyle(document.querySelector(":root"))
        .getPropertyValue(variable)
        .trim()
        .toUpperCase()
    );
  });
  return vals;
};

const updateColors = (vals) => {
  variables.forEach((variable, i) => {
    document.querySelector(":root").style.setProperty(variable, vals[i]);
  });
};

function App() {
  const [colors, setColors] = useState(getColors());

  useEffect(() => {
    updateColors(colors);
  }, [colors]);

  const handleEnter = (e) => {
    // check if e is valid
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };

  return (
    <>
      <div id="canvas">
        <div className="circle" id="f-high"></div>
        <div className="circle" id="f-med"></div>
        <div className="circle" id="f-low"></div>
        <div className="circle" id="f-inv"></div>
        <div className="circle" id="b-high"></div>
        <div className="circle" id="b-med"></div>
        <div className="circle" id="b-low"></div>
        <div className="circle" id="b-inv"></div>
      </div>
      <div id="input-container">
        <div id="hex">#</div>
        <input
          type="text"
          id="input"
          placeholder="101010"
          spellCheck="false"
          autoComplete="chrome-off"
          maxLength={6}
          onKeyDown={handleEnter}
        />
        <div id="save">
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8L6 13L11 8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 13V1"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
