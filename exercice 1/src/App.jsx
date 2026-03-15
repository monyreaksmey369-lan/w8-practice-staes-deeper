import React, { useState } from "react";

export default function App() {
  const [score, setScore] = useState(0);
  const handleChange = (event) => {
    setScore(event.target.value);
  }
  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = `${score * 10}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;
    if (score <= 4) {
      scoreColor = `#f3bc47`;
    } else if (score <= 7) {
      scoreColor = `#4ca340`;
    } else if (score <= 9) {
      scoreColor = `#69ff55`;
    }else {
      scoreColor = `#2a7c1f`;
    }
    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={score} onChange={handleChange}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
