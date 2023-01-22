import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';
const Image = styled('img')({
    display: "block",
    width: 400,
    margin: "auto",
    marginTop: "150px",
})
function EmptyChat() {
    return (
        <Box>
            <Image src='https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg' />
            <Box textAlign={'center'}> <Typography pb={'20px'} fontSize={'32px'} fontFamily='inherit' fontWeight={400}> WhatsApp Web</Typography>
                <Typography fontSize={'14px'}> Send and receive messages without keeping your phone onlin.</Typography>
                <Typography fontSize={'14px'}> Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Typography>
            </Box>
            <Box display={'flex'} fontSize={'14px'} width='20%' justifyContent={'space-around'} margin='auto' alignItems='center' pt="50px">
                <LockIcon fontSize='14px' />
                <Typography > End-to-end encrypted</Typography></Box>
        </Box>
    );
}

export default EmptyChat;