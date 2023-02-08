import { SetMealOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../../Context/AccountContextProvider';
import { getConversation, getMessages, newMessage } from '../../AllApi/Api';
import ChatFooter from './ChatFooter';
import ChatHead from './ChatHead';
import MessageBox from './MessageBox';

function ChatBox() {
    const { accountDetails, person, socket } = useContext(AccountContext);
    const [Text, setText] = useState()
    const [file, setFile] = useState(null);
    const [image, setImage] = useState();
    const [conversation, setConversation] = useState('');
    const [message, setMessage] = useState([])
    const [realTimeView, setRealTimeView] = useState(false)
    const [incommingMessages, setincommingMessages] = useState()
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
    }, [message]);

    useEffect(() => {
        socket.current.on("getMessage", data => {
            setincommingMessages({
                ...data,
                updatedAt: Date.now()

            })
        })
    }, [])


    useEffect(() => {
        incommingMessages && conversation?.members?.includes(incommingMessages.senderId)
            && setMessage(prev => [...prev, incommingMessages])
    }, [incommingMessages, conversation])
    const storeMessage = async (e) => {
        if (!Text) return
        if (e.key == "Enter") {
            let message;
            if (file!=null) {
                message = {
                    senderId: accountDetails?.sub,
                    receiverId: person?.sub,
                    conversationId: conversation?._id,
                    type: 'file',
                    text: image
                }
            } else  {
                message = {
                    senderId: accountDetails?.sub,
                    receiverId: person?.sub,
                    conversationId: conversation?._id,
                    type: 'text',
                    text: Text
                }
            }
            if(message!="") { 
            socket.current.emit("sendMessage", message);
            await newMessage(message) }
            setText('');
            setImage('');
            setFile(null);
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
        getMessageDetails();
    }, [person?._id, conversation?._id, realTimeView])

    useEffect(() => {
        getConversationDetails();
    }, [person?.sub])

    return (
        <Box >
            <ChatHead />
            <Box pt="60px" ref={scrollRef}>
                <MessageBox message={message} />
            </Box>
            <ChatFooter storeMessage={storeMessage} setText={setText} value={Text} file={file} setFile={setFile} setImage={setImage} />
        </Box>
    );
}

export default ChatBox;

