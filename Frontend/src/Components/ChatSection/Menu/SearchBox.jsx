
import { Box, InputBase, styled } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Parent = styled(Box)`
    background: #fff;
    height: 51px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #F2F2F2;
`;

const ChildWrapper = styled(Box)`

    position: relative;
    margin: 1px 10px;
    width: 100%;
    border-radius: 11px;
    background-color: #f0f2f5;
`;

const IconWrapper = styled(Box)`
    padding: 10px;
    height: 100%;
    position: absolute;
     color: #919191;
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    font-size: 14px;
    height: 40px;
    width: 100%;
`;

const SearchBox = () => {

    return (
        <Parent>
            <ChildWrapper>
                <IconWrapper>
                    <SearchIcon fontSize="small" />
                </IconWrapper>
                <InputField
                    placeholder="Search or start new chat"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </ChildWrapper>
        </Parent>
    )
}

export default SearchBox;