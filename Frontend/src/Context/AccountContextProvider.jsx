import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { createContext } from 'react';
import { io } from 'socket.io-client'

export const AccountContext = createContext();
function AccountContextProvider({ children }) {
    // this is a Global state it's mean we can access this state any components

    const [accountDetails, SetAccountDetails] = useState([]);
    const [person, setPerson] = useState({})
    const [activeUsers, setActiveUsers] = useState([]);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('https://whatsappsocket-cbak.onrender.com');
    }, [])
    

    return (
        <AccountContext.Provider value={{ socket,activeUsers, setActiveUsers, accountDetails, SetAccountDetails, person, setPerson }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountContextProvider;