import { Box, Input, InputBase } from '@mui/material';
import React from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { styled } from '@mui/system';
const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
  
    font-size: 14px;
    height: 40px;
    width: 100%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color:white;
    border-radius:10px;
  

`;
function ChatFooter({ setText,storeMessage ,value}) {
    return (
        <Box bgcolor={'#ededed'} height='62px' display={'flex'} justifyContent='space-around' alignItems={'center'}>
            <Box width={'10%'} display='flex' justifyContent={'space-around'}> <InsertEmoticonIcon />
                <AttachFileIcon />
            </Box>
            <Box width="80%"> <InputField onChange={(e) => setText(e.target.value)} value={value} onKeyPress={storeMessage} type='text' placeholder='Type a message' inputProps={{ 'aria-label': 'search' }} /></Box>
            <Box width="5%"><MicIcon /></Box>
        </Box>
    );
}

export default ChatFooter;