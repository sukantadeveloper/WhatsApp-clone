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

const boxSX = {
    "&:hover": {
     
        backgroundColor: 'silver'
    },
    padding:"10px 30px",
    cursor:"pointer"
};



function Conversations({ searchKey }) {
    const { person, setPerson ,accountDetails,socket,activeUsers, setActiveUsers} = useContext(AccountContext);
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

    useEffect(()=>{
        socket.current.emit('addUsers',accountDetails)
        socket.current.on("getUsers",users=>{
            setActiveUsers(users)
        })
    },[accountDetails])
    return (
        <Box height='100vh' >
            {people?.map((ele) => (
                <Box key={Math.random()}>
                    {accountDetails.sub != ele.sub
                        &&
                        <> <Box display={'flex'} onClick={() => sendUser(ele)} sx={boxSX} >
                            <Box> <Image src={ele.picture} /> </Box>
                            <Box> <Typography pl="20px" fontFamily={'Lora'}> {ele.name}</Typography></Box>
                        </Box>
                            <Divider />
                        </>} </Box>

            ))}
        </Box>
    );
}

export default Conversations;