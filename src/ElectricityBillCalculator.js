import React, { useState } from 'react';
import './ElectricityBillCalculator.css';

function ElectricityBillCalculator() {
  const [units, setUnits] = useState('');
  const [billAmount, setBillAmount] = useState(0);

  const calculateBill = () => {
    let bill = 0;
    const consumedUnits = parseInt(units);

    if (!isNaN(consumedUnits)) {
      if (consumedUnits <= 100) {
        bill = consumedUnits * 10;
      } else if (consumedUnits <= 200) {
        bill = 100 * 10 + (consumedUnits - 100) * 15;
      } else if (consumedUnits <= 300) {
        bill = 100 * 10 + 100 * 15 + (consumedUnits - 200) * 20;
      } else {
        bill = 100 * 10 + 100 * 15 + 100 * 20 + (consumedUnits - 300) * 25;
      }
    }
    setBillAmount(bill);
  };

  return (
    <div className="electricity-bill-calculator">
      <h1>Electricity Bill Calculator</h1>
      <label>
        Enter Consumed Units:
        <input type="number" value={units} onChange={(e) => setUnits(e.target.value)} />
      </label>
      <button onClick={calculateBill}>Calculate Bill</button>
      <div className="bill-amount">
        <h2>Bill Amount: Rs. {billAmount}</h2>
      </div>
    </div>
  );
}

export default ElectricityBillCalculator;

