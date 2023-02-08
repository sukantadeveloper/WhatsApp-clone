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
const Image=styled('img')({
       width:'45px'
       
})
 

function Messenger() {
    const { accountDetails,setLogout,logout } = useContext(AccountContext);
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
                        <Toolbar >
                            <Box  display={'flex'} alignItems='center' width={'70%'}  margin={'auto'} pt={'20px'}> 
                            <Image src="https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png" alt="" />
                              <Typography pl={'15px'} fontSize='25px'> WHATSAPP WEB</Typography>
                            </Box>
                          
                        </Toolbar>
                    </Header>

                    < LoginBox />
                </Box>
                
            }
        </>



    );
}

export default Messenger;