import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AccountContext } from '../../../Context/AccountContextProvider';
import HeaderOptions from '../Menu/HeaderOptions';

const Parent = styled(Box)`
    height: 42px;
    background: #ededed;
    display: flex;
    padding: 9px 17px;
    align-items: center;
    position:fixed;
    width:65%
`;
const ChildWrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 3px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 21px;
        margin-right: 9px;
        margin-top: 4px;
    }
`;
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
function ChatHead() {

    const { person } = useContext(AccountContext);


    return (
        <>
            <Parent width={{sm:"65%", md:"54%",lg:"65%"}}>
                <Image src={person.picture}

                />
                <Box pl="15px" fontStyle={'oblique'}>
                    <Typography fontSize={'15px'} fontFamily={'Lora'}>{person.name}</Typography>
                    <Typography fontSize={'12px'} fontFamily={'Lora'}> Online</Typography>
                </Box>
                <ChildWrapper>
                    <SearchIcon />
                    <HeaderOptions />

                </ChildWrapper>
            </Parent>

        </>
    );
}

export default ChatHead;