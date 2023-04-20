import { Box, styled, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AccountContext } from '../../../Context/AccountContextProvider';
import HeaderOptions from '../Menu/HeaderOptions';
import UserDrawer from '../../Drawer/UserDrawer';

const Parent = styled(Box)`
    height: 42px;
    background: #ededed;
    display: flex;
    padding: 9px 17px;
    align-items: center;
    position:fixed;
  
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
    const [openDrawer, setOpenDrawer] = useState(false);


    const { person, activeUsers } = useContext(AccountContext);


    return (
        <>
            <Parent width={{ sm: "65%", md: "67%", lg: "68%" }} zIndex="1500">
                <Image src={person.picture}
                    onClick={() => setOpenDrawer(true)}
                    className='MouseHover' 
                />
                <Box pl="15px" fontStyle={'oblique'}>
                    <Typography fontSize={'15px'} fontFamily={'Lora'}>{person.name}</Typography>
                    <Typography fontSize={'12px'} fontFamily={'Lora'}> {activeUsers?.find(user => user.sub == person.sub) ? "Online" : "Offline"}</Typography>
                </Box>
                <ChildWrapper>
                    <SearchIcon />
                    {/* <HeaderOptions /> */}

                </ChildWrapper>
            </Parent>
            <UserDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />

        </>
    );
}

export default ChatHead;