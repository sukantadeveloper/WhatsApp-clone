import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { conversations } from '../../AllApi/Api';
import {Box, Divider, styled, Typography} from '@mui/material'
import { AccountContext } from '../../../Context/AccountContextProvider';
const Image=styled('img')({
width:'45px',
height:"45px",
borderRadius:'50%'
})
function Conversations() {
    const { accountDetails } = useContext(AccountContext);
    const [people, setPeople] = useState([])
    async function getData() {
        const data = await conversations();
        const res = data;
        setPeople(res);
    }


    useEffect(() => {
        getData();
    }, [])
    return (
        <Box height='100vh'>
            {people?.map((ele) => (
                    accountDetails.sub!=ele.sub 
                    && <> <Box display={'flex'} key={Math.random()} p='10px 30px'> 
                    <Box> <Image src={ele.picture}/> </Box>
                    {console.log(ele.picture)}
                    <Box> <Typography pl="20px"> {ele.name}</Typography></Box>
                  </Box>
                  <Divider/>
                   </>
                
            ))}
        </Box>
    );
}

export default Conversations;