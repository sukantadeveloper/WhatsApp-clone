import { Box, styled } from '@mui/material';
import React from 'react';
import '../../Styles/Message.css'
const ParentWrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
function Messages() {
    return (
        <ParentWrapper height="75vh" overflow={'scroll'} className="parent" padding='10px 20px'>
         lorem5000   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quis ipsam iure commodi quibusdam! Ut tempora optio aliquid blanditiis veritatis, mollitia a voluptatibus adipisci culpa ab fugiat quis earum tempore voluptate porro itaque, eaque explicabo repellat eius et sit corrupti minima iste totam. Et atque, corrupti optio ipsum deserunt unde!
        </ParentWrapper>
    );
}

export default Messages;