import React from 'react';
import { Dialog, List, ListItem, Typography, styled, Box } from '@mui/material';
import MenuHeader from './Menu/MenuHeader';
import SearchBox from './Menu/SearchBox';
import EmptyChat from './Chat/EmptyChat';
import Conversations from './Menu/Conversations';
import ChatBox from './Chat/ChatBox';
import { useContext } from 'react';
import { AccountContext } from '../../Context/AccountContextProvider';
import { useState } from 'react';
const DialogBoxStyle = {
    height: '98%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}
const LeftSide = styled(Box)`
    width:27% ;
`;

const RightSide = styled(Box)`
    width: 73%;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
function ChatDilogBox() {
    const[searchKey, setSearchKey]=useState('');
    const { person } = useContext(AccountContext);
    return (
        <Box>
            <Dialog hideBackdrop={true}
                open={true} PaperProps={{ sx: DialogBoxStyle }}>
                <Box display={'flex'} justifyContent='space-around' >

                    <LeftSide >
                        <MenuHeader />
                        <SearchBox setSearchKey={setSearchKey}/>
                        <Conversations searchKey={searchKey}/>
                    </LeftSide>

                    <RightSide>
                        {
                            Object.keys(person).length ? <ChatBox /> : <EmptyChat />
                        }
                    </RightSide>
                </Box>
            </Dialog>
        </Box>
    );
}

export default ChatDilogBox;