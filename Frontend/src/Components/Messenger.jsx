import React, { useContext } from 'react';
import LoginBox from './Account/LoginDialogBox';
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { AccountContext } from '../Context/AccountContextProvider';
import ChatDilogBox from './ChatSection/ChatDilogBox';

var Header = styled(AppBar)`
  height: 215px;
  box-shadow: none;
  background-color: #00A884;
`;
var ChatHeader = styled(AppBar)`
  height: 125px;
  
  box-shadow: none;
  background-color: #00A884;
`;
function Messenger() {
    const { accountDetails } = useContext(AccountContext);
    return (
        <>
            {accountDetails?.email_verified ?
            <Box sx={{ bgcolor: "#DCDCDC", height: "100vh" }}>
            <ChatHeader>
                <Toolbar>
            <ChatDilogBox />
            </Toolbar></ChatHeader></Box>
              :
                <Box sx={{ bgcolor: "#DCDCDC", height: "100vh" }}>
                    <Header>
                        <Toolbar>
                            <Typography> WHATSAPP WEB</Typography>
                        </Toolbar>
                    </Header>

                    < LoginBox />
                </Box>
                
            }
        </>



    );
}

export default Messenger;