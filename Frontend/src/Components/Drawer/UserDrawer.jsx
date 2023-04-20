import { useContext } from "react";
import { Box, Drawer, styled, Typography } from "@mui/material"
import { AccountContext } from "../../Context/AccountContextProvider";
import { ArrowBack } from '@mui/icons-material';


const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`;

const Image = styled('img')({
    width: 200,
    height: 200,
    borderRadius: '50%',
    padding: '25px 0'
});

const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child {
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    };
    & :last-child {
        margin: 15px 0;
        color: #4A4A4A;
    }
`;

const DescriptionBox = styled(Box)`
    padding: 15px 20px 28px 30px;
    & > p {
        color: #8696a0;
        font-size: 13px;
    }
`;
const Header = styled(Box)`
  background: #00A884;
  height: 107px;
  color: #FFFFFF;
  display: flex;
  & > svg, & > p {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
`;

const drawerStyle = {
    height: '100%',
    width: '415px',
    boxShadow: 'none'
}

const UserDrawer = ({ open, setOpen }) => {

    const { person } = useContext(AccountContext);


    const handleClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Drawer
                open={open}
                onClose={handleClose}
                PaperProps={{ sx: drawerStyle }}
                style={{ zIndex: 1500 }}
            >
                <Header>
                    <ArrowBack onClick={() => setOpen(false)} className='MouseHover' />
                    <Typography>Profile</Typography>
                </Header>
                <ImageContainer>
                    <Image src={person.picture} alt="pic" />
                </ImageContainer>
                <BoxWrapper>
                    <Typography>Name</Typography>
                    <Typography>{person.name}</Typography>
                </BoxWrapper>
                <DescriptionBox>
                    <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
                </DescriptionBox>
                <BoxWrapper>
                    <Typography>About</Typography>
                    <Typography>Life is like a grindstone, it can polish you, or it can pulverize you, depending on how you position yourself.</Typography>
                </BoxWrapper>
            </Drawer>
        </>
    )
}

export default UserDrawer;