import React, { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(95157500000);
  const [showCount, setShowCount] = useState("");

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 10);
    }, 10);
  }, []);

  useEffect(() => {
    let result = numberWithCommas(count);
    setShowCount(result);
  }, [count]);

  return (
    <section className="counterContainer">
      <div className="containerElement">
        <div className="counterElement">
          <h3>Transactions per second</h3>
          <p>2,339</p>
        </div>
      </div>

      <div className="containerElement">
        <div className="counterElement">
          <h3>Total Transactions</h3>
          <div className="transacCounter">
            <p className="counter">{showCount}</p>
          </div>
        </div>
      </div>

      <div className="containerElement">
        <div className="counterElement">
          <h3>Avg. cost per transaction</h3>
          <p>$0.00025</p>
        </div>
      </div>

      <div className="containerElement">
        <div className="counterElement">
          <h3>Validator nodes</h3>
          <p>1,948</p>
        </div>
      </div>
    </section>
  );
}
