import { useState, useEffect } from "react";

interface IHistory {
    date: Date,
    seconds: number
}

const PomodoroTimer = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(25 * 60);
  const [timerId, setTimerId] = useState<number | null>(null);
  const [count, setCount] = useState<number>(0);
  const [history, setHistory] = useState<IHistory>()

  const startTimer = () => {
    if (timerId !== null) return; // Avoid starting the timer again if it's already running

    const id = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    setTimerId(id);
  };

  const pauseTimer = () => {
    if (timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
      //   setSecondsRemaining(25 * 60) // Reset the timer to the initial value
    }
  };

  const stopTimer = () => {
    if (timerId !== null) {
      clearInterval(timerId);
      setTimerId(null);
      setSecondsRemaining(25 * 60); // Reset the timer to the initial value
    }
  };

  const doneTimer = () => {
    if (timerId === null) {
      setTimerId(null)
      setSecondsRemaining(25 * 60)
      setCount(count + 1)
    }
  }

  useEffect(() => {
    if (secondsRemaining <= 0 && timerId !== null) {
      clearInterval(timerId) // Stop the timer when it reaches 0
      setTimerId(null)
      setCount(count + 1)
    }
    console.log(timerId)
    console.log({ secondsRemaining })
  }, [secondsRemaining, timerId])

  return (
    <>
      <article>
        <div>
          Time remaining: {Math.floor(secondsRemaining / 60)}
          {secondsRemaining % 60}
        </div>
        {secondsRemaining === 25 * 60 && timerId === null ? (
          <button onClick={startTimer}>Start</button>
        ) : secondsRemaining < 25 * 60 && timerId !== null ? (
          <button onClick={pauseTimer}>Pause</button>
        ) : (
          <button onClick={startTimer}>Resume</button>
        )}

        {secondsRemaining < 25 * 60 && timerId !== null ? (
          <button onClick={stopTimer}>Stop</button>
        ) : (
          <button onClick={doneTimer}>Done</button>
        )}
        <h1>{count}</h1>
      </article>

      <article>
        <h1>History</h1>
        
      </article>
    </>
  );
};

export default PomodoroTimer;
