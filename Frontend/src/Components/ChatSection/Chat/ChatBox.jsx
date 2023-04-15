import { DataArray, SetMealOutlined } from '@mui/icons-material';
import { Box } from '@mui/system';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../../Context/AccountContextProvider';
import { getConversation, getMessages, newMessage, uploadFile } from '../../AllApi/Api';
import ChatFooter from './ChatFooter';
import ChatHead from './ChatHead';
import MessageBox from './MessageBox';
import axios from 'axios'
function ChatBox() {
    const { accountDetails, person, socket } = useContext(AccountContext);
    const [Text, setText] = useState()
    const [file, setFile] = useState(null);
    const [image, setImage] = useState();
    const [conversation, setConversation] = useState('');
    const [message, setMessage] = useState([])
    const [realTimeView, setRealTimeView] = useState(false)
    const [incommingMessages, setincommingMessages] = useState()
    const [sendLoading, setSendLoading] = useState(false);
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
        // for enter key 
        if (e.key == "Enter") {

            let res = "";
            if (file) {
                setSendLoading(true);
                if (file.name.includes('.pdf')) {
                    console.log(file, "done");
                    const data = new FormData();
                    data.append("name", file.name);
                    data.append("file", file);
                    const response = await uploadFile(data);
                    setImage(response.data);
                }
                else {
                    const data = new FormData();
                    data.append("file", file);
                    data.append("upload_preset", "whatsapp");
                    res = await axios.post("https://api.cloudinary.com/v1_1/dz84rrvfb/image/upload", data)
                    setImage(res.data.secure_url);

                }

            }

            let message;
            if (file != null) {
                message = {
                    senderId: accountDetails?.sub,
                    receiverId: person?.sub,
                    conversationId: conversation?._id,
                    type: 'file',
                    text: res.data.secure_url
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
            if (message != "") {
                setSendLoading(true);
                socket.current.emit("sendMessage", message);
                await newMessage(message)
                setSendLoading(false);
            }
            setText('');
            setImage('');
            setFile(null);
            setRealTimeView(p => !p);

        }



    }
    const handleSubmit = async () => {
        if (!Text) return
        // for enter key 

        let res = "";
        if (file) {
            setSendLoading(true);
            if (file.name.includes('.pdf')) {
                console.log(file, "done");
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                res = await uploadFile(data);
                setImage(res.data);
                setSendLoading(false);
            }
            else {
                setSendLoading(true);
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "whatsapp");
                res = await axios.post("https://api.cloudinary.com/v1_1/dz84rrvfb/image/upload", data)
                setImage(res.data.secure_url);
                setSendLoading(false);
            }

        }

        let message;
        if (file != null) {
            message = {
                senderId: accountDetails?.sub,
                receiverId: person?.sub,
                conversationId: conversation?._id,
                type: 'file',
                text: res?.data?.secure_url || res?.data
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
        if (message != "") {
            setSendLoading(true);
            socket.current.emit("sendMessage", message);
            const rd = await newMessage(message)
            console.log(rd?.data, "rd")
            setSendLoading(false);
        }
        setText('');
        setImage('');
        setFile(null);
        setRealTimeView(p => !p);


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
            <ChatFooter sendLoading={sendLoading} handleSubmit={handleSubmit} storeMessage={storeMessage} setText={setText} value={Text} file={file} setFile={setFile} setImage={setImage} />
        </Box>
    );
}

export default ChatBox;

