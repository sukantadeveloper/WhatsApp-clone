import { Box } from '@mui/material';
import { height, styled } from '@mui/system';
import React from 'react';

const Image= styled('img')({
    width:'300px',
  
})

function ImageFile({ele}) {
    return (
        <Box>
            <Image src={ele.text} alt="" />
        </Box>
    );
}

export default ImageFile;