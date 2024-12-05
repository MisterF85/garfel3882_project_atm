import React, { useState } from 'react';

function SavingsAccount() {
  const [balance] = useState(1000); // Initial balance





  return (
    <div>
      <h1>Savings Account Balance</h1>
      <p>Current Balance: ${balance}</p>

    
    </div>
  );
}

export default SavingsAccount;