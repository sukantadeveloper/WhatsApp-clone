import { Box, styled } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { Chat as MessageIcon } from '@mui/icons-material';

import { AccountContext } from '../../../Context/AccountContextProvider';
import HeaderOptions from './HeaderOptions';
import ProfileDrawer from '../../Drawer/ProfileDrawer';
const Parent = styled(Box)`
    height: 42px;
    background: #ededed;
    display: flex;
    padding: 9px 17px;
    align-items: center;
`;
const ChildWrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 3px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 21px;
        margin-right: 9px;
        margin-top: 4px;
    }
`;
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
function MenuHeader() {
    const [openDrawer, setOpenDrawer] = useState(false);

    const { accountDetails } = useContext(AccountContext);


    return (
        <>
            <Parent>
                <Image src={accountDetails.picture}
                    className='MouseHover'
                    onClick={() => setOpenDrawer(true)}
                />
                <ChildWrapper>
                    <MessageIcon />
                    <HeaderOptions />

                </ChildWrapper>
            </Parent>
            <ProfileDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    );
}

export default MenuHeader;