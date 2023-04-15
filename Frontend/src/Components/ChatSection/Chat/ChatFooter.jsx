import { Box, Input, InputBase } from '@mui/material';
import React, { useEffect } from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { styled } from '@mui/system';
import { uploadFile } from '../../AllApi/Api';
import axios from 'axios'
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import SendIcon from '@mui/icons-material/Send';
import PendingIcon from '@mui/icons-material/Pending';
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
const Attatcher = styled(AttachFileIcon)`
transform: 'rotate(10deg)'
`
function ChatFooter({ setText, storeMessage, value, setFile, file, setImage, handleSubmit, sendLoading }) {
    const getImage = async () => {
        // if (file) {
        //     if (file.name.includes('.pdf')) {
        //           console.log(file, "done");
        //         const data = new FormData();
        //         data.append("name", file.name);
        //         data.append("file", file);
        //         const response = await uploadFile(data);
        //         setImage(response.data);
        //     }
        //     else {
        //         const data = new FormData();
        //         data.append("file", file);
        //         data.append("upload_preset", "whatsapp");
        //         const res = await axios.post("https://api.cloudinary.com/v1_1/dz84rrvfb/image/upload", data)
        //         setImage(res.data.secure_url);
        //         console.log(res.data.secure_url, "after convert")
        //     }

        // }

    }
    console.log("Child components is runnning");
     console.log(sendLoading, "loading")
    useEffect(() => {
       
        getImage();
    }, [sendLoading])

    const onFileChange = (e) => {
        setText(e.target.files[0].name);
        setFile(e.target.files[0]);
    }


    return (
        <Box bgcolor={'#ededed'} height='62px' display={'flex'} justifyContent='space-around' alignItems={'center'}>
            <Box width={'10%'} display='flex' justifyContent={'space-around'}> <InsertEmoticonIcon />

                <label htmlFor="fileInput" className='MouseHover' >
                    <Attatcher />
                </label>
                <input
                    type='file'
                    id="fileInput"
                    style={{ display: 'none' }}
                    onChange={(e) => onFileChange(e)}

                />
            </Box>
            <Box width="80%" display={'flex'} alignItems={'center'}> 
            <InputField disabled={sendLoading} onChange={(e) => setText(e.target.value)} value={value} onKeyPress={storeMessage} type='text' style={{marginRight:"10px"}} placeholder='Type a message' inputProps={{ 'aria-label': 'search' }} /> </Box>
            {!sendLoading ? <Box width="5%" className="MouseHover" onClick={handleSubmit}> <SendIcon /></Box>
                : <Box width="5%"> <ScheduleSendIcon /></Box>}
        </Box>
    );
}

export default ChatFooter;