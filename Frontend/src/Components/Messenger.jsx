import React from 'react';
import LoginBox from './Account/LoginDialogBox';
import { AppBar, Toolbar, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

var Header = styled(AppBar)`
  height: 215px;
  box-shadow: none;
  background-color: #00A884;
`;
function Messenger() {
    return (

        <Box sx={{ bgcolor: "#DCDCDC", height: "100vh" }}>
            <Header>
                <Toolbar>
                <Typography> WHATSAPP WEB</Typography>
                </Toolbar>
            </Header>
            <LoginBox />
        </Box>


    );
}

export default Messenger;