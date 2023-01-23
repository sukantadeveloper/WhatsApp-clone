import React, { useState } from 'react';
import { createContext } from 'react';
export const AccountContext = createContext();
function AccountContextProvider({ children }) {
    // this is a Global state it's mean we can access this state any components

    const [accountDetails, SetAccountDetails] = useState([]);
    const [person, setPerson] = useState({})
    return (
        <AccountContext.Provider value={{ accountDetails, SetAccountDetails, person, setPerson }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountContextProvider;