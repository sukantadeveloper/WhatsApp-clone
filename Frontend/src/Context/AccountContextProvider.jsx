import React, { useState } from 'react';
import { createContext } from 'react';
  export  const AccountContext = createContext();
function AccountContextProvider({ children }) {

    const [accountDetails, SetAccountDetails] = useState([]);
    return (
        <AccountContext.Provider value={{ accountDetails, SetAccountDetails }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountContextProvider;