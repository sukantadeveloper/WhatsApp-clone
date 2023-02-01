import { Box, Skeleton, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../../Context/AccountContextProvider';
import ImageFile from './Message/ImageFile';
import TextFile from './Message/TextFile';
import "../../Styles/Message.css"
const ParentWrapper = styled(Box)` 
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;
const ReceviderMessage = styled(Box)`

    background: #FFFFFF;
    padding: 2px 4px;
    max-width: 50%;
    width: fit-content;
    border-radius: 10px;
    word-break: break-word;
`;

const SenderMessage = styled(Box)`
    background: #dcf8c6;
    padding: 2px 4px;
    max-width: 50%;
    width: fit-content;
    margin-left: auto;
    border-radius: 10px;
    word-break: break-word;
`;
function MessageBox({ message }) {
    const scrollRef = useRef();
    const { accountDetails } = useContext(AccountContext);
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })

    }, [message]);
    return (
        <ParentWrapper height="76vh" overflow={'scroll'} className="parent" padding='10px 20px' >
            {message?.map((ele) => (
                <Box key={Math.random()} ref={scrollRef}>
                    {ele.senderId == accountDetails.sub ?
                        <SenderMessage mb={'5px'} >
                            <>  {ele.type == "file" ? <ImageFile ele={ele} /> :
                                <TextFile ele={ele} />}</>
                        </SenderMessage>

                        : <ReceviderMessage mb={'5px'}>
                            {ele.type == "file" ? <ImageFile ele={ele} /> :
                                <TextFile ele={ele} />}
                        </ReceviderMessage>}
                </Box>
            )
            )
            }

        </ParentWrapper>
    );
}

export default MessageBox;



