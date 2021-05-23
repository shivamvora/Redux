import React from 'react';
import { useSelector } from 'react-redux';


const AccountStatus = () => {
    const isSavingsAccount =  useSelector(state => state.isSavingsAccount);
    return (
        <div>
            <h1>{isSavingsAccount?"Savings Account" : "Current Account"}</h1>
        </div>
    )
}

export default AccountStatus;
