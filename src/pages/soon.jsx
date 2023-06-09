import React, { useEffect, useState } from "react";
const targetTime = new Date("2023-12-01").getTime();
const Clock = () => {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const timeBetween = targetTime - currentTime;
  const seconds = Math.floor((timeBetween / 1000) % 60);
  const minutes = Math.floor((timeBetween / 1000 / 60) % 60);
  const hours = Math.floor((timeBetween / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeBetween / (1000 * 60 * 60 * 24));
  const month = Math.floor((days / 30) % 12);
  // const yearsLeft = Math.floor((days / 365) % 365);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="countdown">
        <h3 className="month">{month}</h3>
        <p className="p__cormorant">Month</p>
      </div>
      <div className="countdown">
        <h3 className="day">{days}</h3>
        <p className="p__cormorant">Day</p>
      </div>
      <div className="countdown">
        <h3 className="hours">{hours}</h3>
        <p className="p__cormorant">Hours</p>
      </div>
      <div className="countdown">
        <h3 className="minutes">{minutes}</h3>
        <p className="p__cormorant">Minutes</p>
      </div>
      <div className="countdown">
        <h3 className="seconds">{seconds}</h3>
        <p className="p__cormorant">Seconds</p>
      </div>
    </>
  );
};

export default Clock;
