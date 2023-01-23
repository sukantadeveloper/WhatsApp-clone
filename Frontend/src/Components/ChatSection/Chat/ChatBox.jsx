import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../../Context/AccountContextProvider';
import { getConversation, newMessage } from '../../AllApi/Api';
import ChatFooter from './ChatFooter';
import ChatHead from './ChatHead';
import Messages from './Messages';

function ChatBox() {
    const { accountDetails, person } = useContext(AccountContext);
    const [Text, setText] = useState()
    const [conversation, setConversation] = useState('');
    const storeMessage = async (e) => {
        if (e.key == "Enter") {
            let message = {
                senderId: accountDetails?.sub,
                receiverId: person?.sub,
                conversationId: conversation?._id,
                type: 'text',
                text: Text
            }
            await newMessage(message)
            setText('');
            console.log(message, "24 line")
        }

    }

    const getConversationDetails = async () => {
        const data = await getConversation({ senderId: accountDetails.sub, receiverId: person.sub })
        console.log(data, "28line")
        setConversation(data);
    }
    console.log(conversation?._id, "line no 36")
    useEffect(() => {
        getConversationDetails();
    }, [person.sub])
    return (
        <div>
            <ChatHead />
            <Box pt="60px">
                <Messages />
            </Box>
            <ChatFooter storeMessage={storeMessage} setText={setText} value={Text} />
        </div>
    );
}

export default ChatBox;