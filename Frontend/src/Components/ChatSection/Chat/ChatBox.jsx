import { Box } from '@mui/system';
import React from 'react';
import ChatFooter from './ChatFooter';
import ChatHead from './ChatHead';
import Messages from './Messages';

function ChatBox() {
    return (
        <div>
            <ChatHead/>
            <Box pt="60px"> 
            <Messages/>
           </Box> 
           <ChatFooter/>
        </div>
    );
}

export default ChatBox;