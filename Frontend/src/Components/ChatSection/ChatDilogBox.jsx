import React from 'react';
import { Dialog, List, ListItem, Typography, styled, Box } from '@mui/material';
import MenuHeader from './Menu/MenuHeader';
import SearchBox from './Menu/SearchBox';
import EmptyChat from './Chat/EmptyChat';
import Conversations from './Menu/Conversations';
const DialogStyle = {
    height: '95%',
    width: '96%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}
const LeftSide = styled(Box)`
    min-width: 400px;
`;

const RightSide = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;
function ChatDilogBox() {
    return (
        <div>
            <Dialog hideBackdrop={true}
                open={true} PaperProps={{ sx: DialogStyle }}>
                <Box display={'flex'} justifyContent='space-around' >
           
                    <LeftSide>
                        <MenuHeader />
                        <SearchBox />
                        <Conversations/>
                    </LeftSide>

                    <RightSide>
                        <EmptyChat />
                    </RightSide>
                </Box>
            </Dialog>
        </div>
    );
}

export default ChatDilogBox;