import { Box, Typography } from '@mui/material';
import React from 'react';
import { FormatDate } from '../../../CommonFile/FormatData';


function TextFile({ ele }) {
    return (
        <Box display={'flex'} alignItems='flex-end'>
            <Typography fontFamily={'Lora'}>  {ele.text}</Typography>
            <Typography fontSize={'10px'} pl='5px' fontFamily={'Lora'} width='30px'>
                <FormatDate date={ele.updatedAt} />
            </Typography>
        </Box>
    );
}

export default TextFile;