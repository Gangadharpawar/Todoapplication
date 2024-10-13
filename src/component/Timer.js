import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timeRemaining, SettimeRemaining] = useState(10);

  useEffect(() => {
    // if (timeRemaining > 0) {
    var setinvervalId = setInterval(() => {
      SettimeRemaining((prevstate) => {
        if (prevstate === 0) {
          clearInterval(setinvervalId);
          return prevstate;
        } else {
          return prevstate - 1;
        }
      });
    }, 1000);
    // }
    return () => clearInterval(setinvervalId);
  }, []);
  return (
    <div>
      <h1>CountDown Timer</h1>
      Time Remeaning{timeRemaining}s
    </div>
  );
}
