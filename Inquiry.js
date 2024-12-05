import React, { useState } from 'react';

function Inquiry() {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [amount, setAmount] = useState(0);

  const handleInputChange = (event) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleWithdraw = () => {
    if (amount > 0 && amount <= balance) {
      setBalance(balance - amount);
      setAmount(0); // Reset the input field
    } else {
      alert("Invalid withdrawal amount.");
    }
  };

  const handleDeposit = () => {
    if (amount > 0) {
      setBalance(balance + amount);
      setAmount(0); // Reset the input field
    } else {
      alert("Invalid deposit amount.");
    }
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <input type="number" value={amount} onChange={handleInputChange} />
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}

export default Inquiry;