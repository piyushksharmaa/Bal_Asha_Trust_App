import React from "react";
import './Data.css';

const Numbergrid = () => {
  const numbersData = [
    { number: 1, data: "Data for Number 1" },
    { number: 2, data: "Data for Number 2" },
    { number: 3, data: "Data for Number 3" },
    { number: 4, data: "Data for Number 4" },
    { number: 5, data: "Data for Number 5" },
    { number: 6, data: "Data for Number 6" },
    { number: 7, data: "Data for Number 7" },
    { number: 8, data: "Data for Number 8" },
  ];

  return (
    <div className="container">

      <div className="grid">
        {numbersData.map((item) => (
          <div key={item.number} className="item">
            <h2>Number {item.number}</h2>
            <p>{item.data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbergrid;


