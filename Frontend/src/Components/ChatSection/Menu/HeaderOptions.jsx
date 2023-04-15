import { useContext, useState } from 'react';

import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';
import ProfileDrawer from '../../Drawer/ProfileDrawer';


const MenuOption = styled(MenuItem)`
    font-size: 14px
    padding: 15px 60px 5px 24px;
    color: #4A4A4A;
`;


const HeaderOptions = () => {
        const [open, setOpen] = useState(false);
        const [openDrawer, setOpenDrawer] = useState(false);
        const handleClick = (event) => {
            setOpen(event.currentTarget);
        };

        const handleClose = () => {
            setOpen(null);
        };

        const handleLogout = () => {
            sessionStorage.clear("user");
            window.location.reload();
        }

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuOption onClick={() => setOpenDrawer(true)}>Profile</MenuOption>
                <MenuOption onClick={handleLogout}>
                    Logout
                </MenuOption>
            </Menu>
            <ProfileDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default HeaderOptions;
