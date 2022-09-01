import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(95157500000);
  const [showCount, setShowCount] = useState("")

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 103);
    }, 10);
  }, []);

  useEffect(() => {
    let result = numberWithCommas(count)
    setShowCount(result)
  },[count])


  return (
    <section className="counterContainer">
      <div className="counterElement1">
        <h2>1000</h2>
      </div>
      <div className="counterElement2">
        <h2>{showCount}</h2>
      </div>
      <div className="counterElement3">
        <h2>3000</h2>
      </div>
      <div className="counterElement4">
        <h2>4000</h2>
      </div>
    </section>
  );
}
