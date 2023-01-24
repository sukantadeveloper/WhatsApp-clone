import { SetMealOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../../Context/AccountContextProvider';
import { getConversation, getMessages, newMessage } from '../../AllApi/Api';
import ChatFooter from './ChatFooter';
import ChatHead from './ChatHead';
import MessageBox from './MessageBox';

function ChatBox() {
    const { accountDetails, person } = useContext(AccountContext);
    const [Text, setText] = useState()
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    console.log(image)
    const [conversation, setConversation] = useState('');
    const [message, setMessage] = useState([])
    const [realTimeView, setRealTimeView] = useState(false)
    const storeMessage = async (e) => {
        if (e.key == "Enter") {
            let message;
            if (file) {
                message = {
                    senderId: accountDetails?.sub,
                    receiverId: person?.sub,
                    conversationId: conversation?._id,
                    type: 'file',
                    text: image
                }
            } else {
                message = {
                    senderId: accountDetails?.sub,
                    receiverId: person?.sub,
                    conversationId: conversation?._id,
                    type: 'text',
                    text: Text
                }
            }
            await newMessage(message)
            setText('');
            setImage('');

            setRealTimeView(p => !p);

        }

    }




    const getConversationDetails = async () => {
        const data = await getConversation({ senderId: accountDetails.sub, receiverId: person.sub })
        setConversation(data);
    }
    const getMessageDetails = async () => {
        const data = await getMessages(conversation._id)
        setMessage(data);
    }

    useEffect(() => {
        getConversationDetails();
        conversation?._id && getMessageDetails();
    }, [person?._id, conversation?._id, realTimeView])

    return (
        <Box >
            <ChatHead />
            <Box pt="60px">
                <MessageBox message={message} />
            </Box>
            <ChatFooter storeMessage={storeMessage} setText={setText} value={Text} file={file} setFile={setFile} setImage={setImage} />
        </Box>
    );
}

export default ChatBox;

