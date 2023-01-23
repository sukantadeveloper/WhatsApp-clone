import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../../Context/AccountContextProvider';
import '../../Styles/Message.css'
const ParentWrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
const ReceviderMessage = styled(Box)`
    background: #FFFFFF;
    padding: 5px;
    max-width: 50%;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;

const SenderMessage = styled(Box)`
    background: #dcf8c6;
    padding: 5px;
    max-width: 50%;
    width: fit-content;
    margin-left: auto;
    display: flex;
    border-radius: 10px;
    word-break: break-word;
`;
function Messages({ message }) {
 
    const { accountDetails } = useContext(AccountContext);
    return (
        <ParentWrapper height="75vh" overflow={'scroll'} className="parent" padding='10px 20px'>


            {message?.map((ele) => (

                ele.senderId == accountDetails.sub ?
                    <SenderMessage mb={'5px'}>    {ele.text}

                    </SenderMessage> : <ReceviderMessage mb={'5px'}> {ele.text}</ReceviderMessage>
            ))}


        </ParentWrapper>
    );
}

export default Messages;