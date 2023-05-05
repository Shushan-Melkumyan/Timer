import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [isStarted, setIsstarted] = useState(false);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => {
        setTime((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isStarted]);

  const animateTimer = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setTime(Number(event.target.value));
  };

  const handleClick = () => {
    animateTimer(time);
    setIsstarted(true);
    setInputValue("");
  };

  return (
    <div>
      <input onChange={handleChange} value={inputValue} />
      <br />
      <button onClick={handleClick}>start</button>
      Timer: {animateTimer(time)}
    </div>
  );
}

export default App;
