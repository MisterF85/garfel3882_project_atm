import './App.css';
import React,{ useEffect, useRef } from 'react';
import Inquiry from "./components/Inquiry";
import Checking from "./components/Checking";
import Savings from "./components/Savings";
import PieChart from "./components/d3";


const data = [
  { label: 'Deposit', value: 400 },
  { label: 'Withdrawal', value: 200 }
];


function ATM() {
  
  
  
  
    return (
      <div>
        <h1>ATM Transactions</h1>
        <PieChart data={data} />
        <Checking/>
      <Savings/>
      <Inquiry/>
      </div>
    );
  };
export default ATM;



