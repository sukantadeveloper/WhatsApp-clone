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
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [conversation, setConversation] = useState('');
    const [message, setMessage] = useState([])
    const [realTimeView, setRealTimeView] = useState(false)
    const [incommingMessages, setincommingMessages] = useState()
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: "smooth" })
        console.log(message, "m")
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

    console.log("Text", Text)
    console.log(file, "file");
    const storeMessage = async (e) => {
        if (!Text) return
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
            socket.current.emit("sendMessage", message);

            await newMessage(message)
            setText('');
            setImage('');
            setFile('');
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
            <Box pt="60px" ref={scrollRef}>
                <MessageBox message={message} />
            </Box>
            <ChatFooter storeMessage={storeMessage} setText={setText} value={Text} file={file} setFile={setFile} setImage={setImage} />
        </Box>
    );
}

export default ChatBox;

