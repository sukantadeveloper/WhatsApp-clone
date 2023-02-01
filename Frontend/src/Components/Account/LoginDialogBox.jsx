import { Dialog, List, ListItem, Typography, styled } from '@mui/material';
import { Box } from '@mui/system';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';
import jwt_decode from 'jwt-decode'
import { useContext } from 'react';
import { AccountContext } from '../../Context/AccountContextProvider';
import { useState } from 'react';
import { addUser } from '../AllApi/Api';
import { useEffect } from 'react';
const DialogStyle = {
    height: "96%",
    width: "70%",
    maxWidth: "100%",
    maxHeight: "100%",
    marginTop: "200px",
    boxShadow: "none"
}
const QRStyle = styled('img')({
    height: 264,
    width: 264
});
const ListStyle = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;
function LoginBox() {
    var aa = JSON.parse(sessionStorage.getItem("user"))
    const { SetAccountDetails, accountDetails } = useContext(AccountContext);
    const [send, setSend] = useState();
    const handleError = () => {
        console.log("Error");
    }
    const handleSuccess = (res) => {
        const decoded = jwt_decode(res.credential)
        addUser(decoded);
        sessionStorage.setItem("user", JSON.stringify(decoded))
        setSend(decoded);
    }
    useEffect(() => {
        SetAccountDetails(aa);
    }, [send])

    return (
        <div>

            <Dialog hideBackdrop={true}
                open={true} PaperProps={{ sx: DialogStyle }}>
                <Box display={'flex'} justifyContent='space-around' marginTop={'50px'}>
                    <Box width={'52%'} >
                        <Typography fontSize={'26px'} fontWeight='300' color="#525252"> To use WhatsApp on your computer</Typography>
                        <ListStyle>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap Menu or Setting and select Linked Devices</ListItem>
                            <ListItem>3. Tap on a Link a Device</ListItem>
                            <ListItem>4. Point your phone to this screen to capture the code</ListItem>
                        </ListStyle>

                    </Box>

                    <Box width={'28%'}>
                        <QRStyle src='https://i.stack.imgur.com/nGqGw.png' />
                        <Box width={'90%'} margin='auto' paddingLeft={'30px'}>  <GoogleLogin
                            onSuccess={handleSuccess}
                            onError={handleError}
                        /></Box>
                    </Box>
                </Box>
            </Dialog>
        </div>
    );
}

export default LoginBox;