import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTimer(0);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex justify-center items-center pt-10 pb-10">
      <div className="rounded shadow-2xl px-20 py-20">
        <h2 className="text-center mb-5 text-2xl">Time: {timer}</h2>
        <div className="flex gap-3">
          <button
            onClick={startTimer}
            className="bg-cyan-700 text-white px-3 py-1 cursor-pointer hover:bg-cyan-800"
          >
            Start
          </button>
          <button
            onClick={stopTimer}
            className="bg-cyan-700 text-white px-3 py-1 cursor-pointer hover:bg-cyan-800"
          >
            Stop
          </button>
          <button
            onClick={resetTimer}
            className="bg-cyan-700 text-white px-3 py-1 cursor-pointer hover:bg-cyan-800"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
