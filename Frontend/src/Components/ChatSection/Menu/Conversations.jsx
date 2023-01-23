import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { GetUser, setConversation } from '../../AllApi/Api';
import { Box, Divider, styled, Typography } from '@mui/material'
import { AccountContext } from '../../../Context/AccountContextProvider';
const Image = styled('img')({
    width: '45px',
    height: "45px",
    borderRadius: '50%'
})
function Conversations({ searchKey }) {
    const { person, setPerson } = useContext(AccountContext);
    const { accountDetails } = useContext(AccountContext);
    const [people, setPeople] = useState([])
    async function getData() {
        const data = await GetUser();
        let fiteredData = data.filter(user => user.name.toLowerCase().includes(searchKey.toLowerCase()));
        setPeople(fiteredData);
    }


    useEffect(() => {
        getData();
    }, [searchKey])
    const sendUser = async (ele) => {
        setPerson(ele)
        await setConversation({ senderId: accountDetails.sub, receiverId: ele.sub });
    }
    return (
        <Box height='100vh'>
            {people?.map((ele) => (
                <Box key={Math.random()}>
                    {accountDetails.sub != ele.sub
                        &&
                        <> <Box display={'flex'} key={Math.random()} p='10px 30px' onClick={() => sendUser(ele)}>
                            <Box> <Image src={ele.picture} /> </Box>
                            <Box> <Typography pl="20px"> {ele.name}</Typography></Box>
                        </Box>
                            <Divider />
                        </>} </Box>

            ))}
        </Box>
    );
}

export default Conversations;