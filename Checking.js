import React, { useState } from 'react';



function CheckingAccount() {
  const [balance] = useState(); // Initial balance

  return (
    <div>
      <h1>Checking Account Balance</h1>
      <p>Current Balance: ${balance}</p>
    </div>
  );
}

export default CheckingAccount;