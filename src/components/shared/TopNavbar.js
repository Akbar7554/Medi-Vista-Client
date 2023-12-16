import { Box, IconButton, Typography } from "@mui/material";
import Marquee from "react-fast-marquee";
import PhoneIcon from '@mui/icons-material/Phone';
const TopNavbar = () => {
    return (
        <Box>
            <Marquee
                pauseOnHover= {true}
                style={{
                backgroundColor: '#33cccc',
                    color: 'white',
            }}
                speed={70}>
                <Box sx={{ py: 1 }}><Typography sx={{ fontSize: '20px', marginLeft: 10 }}>For any questions or help, please 
                    <IconButton><PhoneIcon sx={{color: 'white'}}></PhoneIcon></IconButton>+880 <strong>1850 697554</strong>.</Typography></Box>
            </Marquee>
        </Box>
    );
};

export default TopNavbar;