

const initialState = {
    balance: 0,
    isSavingsAccount:false,
};


export const bankingReducer = (state = initialState,action) => {

    
    switch(action.type) {
        case "DEPOSIT" : 
            //  logic for deposit
            return {...state, balance:state.balance + action.amount}
        case "WITHDRAW":
            // logic for withdraw
            return {...state, balance:state.balance - action.amount}
        case "COLLECT_INTEREST":
            return {...state,balance:state.balance*1.03}
            // logic for collect_interest
        case "DELETE_ACCOUNT":
            return {...state,balance:0}
            // logic for delete_account
        case "TOGGLE_ACCOUNT":
            return {...state,isSavingsAccount:!state.isSavingsAccount}
        default : 
            return state;
    }   

};


//

// actions

// deposit
const deposit = {
    type: "DEPOSIT",
    amount: 20
}

//  withdraw

const withdraw = {
    type: "WITHDRAW",
    amount: 3
}

// collect interest

const collectInterest = {
    type: "COLLECT_INTEREST",

}

// delete account

const deleteAccount = {
    type:"DELETE_ACCOUNT",
    
}
