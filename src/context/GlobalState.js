import React, {createContext,useReducer} from 'react';
import AppReducer  from './AppReducer';
// Initail State
const initialState = {
    transactions : [
        {id:1 , text:' flower', amount: -20},
        {id:2 , text:' cat', amount: -1},
        {id:3, text:' fish', amount: 21},
        {id:4 , text:' tiger', amount: 1},
        {id:5 , text:' dog', amount: 10}
    ]
}

//create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload: id 
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type : 'ADD_TRANSACTION',
            payload: transaction 
        });
    }
  


    return(<GlobalContext.Provider value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}