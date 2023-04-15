import { Box, Typography } from '@mui/material';
import { height, styled } from '@mui/system';
import React from 'react';
import { downloadMedia } from '../../../CommonFile/DownloadMedia';
import { FormatDate } from '../../../CommonFile/FormatDate';
import DownloadIcon from '@mui/icons-material/Download';
const Image = styled('img')({
   width:"250px",
   maxHeight:"350px"

})

function ImageFile({ ele }) {
    return (
        <Box> {ele?.text?.includes('.pdf') ?
            <Box display="flex" position={'relative'}>
                <img src="/Images/pdf.webp" alt="pdf-icon" style={{ width: 60 }} />
                <Box display={'block'}>
                    <Typography style={{ fontSize: 14, wordBreak: 'break-word' }} >{ele?.text?.split("/").pop()}</Typography>
                    <Box position={'absolute'} bottom='0' right={'0'} fontSize="11px">
                        <Box border={'2px solid grey'} margin='2px' className='MouseHover' borderRadius={'50%'} onClick={(e) => downloadMedia(e, ele.text)}> <DownloadIcon /></Box>
                        <FormatDate date={ele.updatedAt} /> </Box>
                </Box>
            </Box>
            : <Box display={'flex'} flexDirection='column' alignItems={'end'}>
                <Image src={ele.text} alt="" />


                <Box display={'flex'} width='70px' alignItems={'end'} >
                    <Box border={'2px solid grey'} margin='2px' className='MouseHover' borderRadius={'50%'} onClick={(e) => downloadMedia(e, ele.text)}>
                        <DownloadIcon /> </Box>
                    <Typography fontSize={'10px'}> <FormatDate date={ele.updatedAt} /></Typography>  </Box>

            </Box>

        }

        </Box>
    );
}

export default ImageFile;