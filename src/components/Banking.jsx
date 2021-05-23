import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {deposit,withdraw,collectInterest,deleteAccount,toggleAccount} from "../actions/bankingActions";
const Banking = () => {

    const [amount,setAmount] = useState("");

    const dispatch = useDispatch();
    
    const handleDeposit = () => {
        dispatch(deposit(amount));        
    };
    const hanndleWithdraw = () => {
        dispatch(withdraw(amount));
    };
    const handleCollectInterest = () => {
        dispatch(collectInterest(amount));   
    };
    const handleDelete = () => {
        dispatch(deleteAccount(amount));
    };
    const handleAccountChange = () => {
        dispatch(toggleAccount());
    }
    return (
        <div className="form-group">
            <input type="text" className="form-control" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter Value and Perform Transaction"/>
            <button onClick={handleDeposit}  className="btn btn-success">Deposit</button>
            <button onClick={hanndleWithdraw} className="btn btn-primary">Withdraw</button>
            <button onClick={handleCollectInterest} className="btn btn-warning">Collect Interest</button>
            <button onClick={handleDelete} className="btn btn-danger">Delete Account</button>
            <button onClick={handleAccountChange} className="btn btn-secondary">Change Account Type</button>
        </div>
    )
}

export default Banking;


