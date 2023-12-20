"use client"
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import Banner1 from "@/assets/Banner/Banner01.jpg"
import Banner2 from "@/assets/Banner/Banner02.jpg"
import Banner3 from "@/assets/Banner/Banner03.jpg"
import Banner4 from "@/assets/Banner/Banner04.jpg"
import Banner5 from "@/assets/Banner/Banner05.jpg"
import Banner6 from "@/assets/Banner/Banner06.jpg"
import Image from "next/image";
import { Box, Button, Typography } from '@mui/material';

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const Banner = () => {
    return (

        <Box  sx={{ mx: 5, my: 3, display: {md: 'flex'}, justifyContent: 'space-around', alignItems: 'center'  }}>
            <Box>
                <Typography sx={{fontSize: 40, width: "500px", textTransform: 'uppercase'}}>
                    We care about<br />
                    your <strong className='text-[#33cccc] text-5xl'>health</strong>
                </Typography>
                <Typography sx={{fontSize: 20, }}>
                    Promoting preventive healthcare is crucial for maintaining overall well-being, and establishing a trusted partnership with a knowledgeable.
                </Typography>
                <Button sx={{ color: '#33cccc', border: 2, mt: 3, px: 2, py: 2, fontSize: 16, fontWeight: '700' }} >Appointment<ArrowOutwardIcon></ArrowOutwardIcon></Button>
            </Box>
            <Swiper
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                spaceBetween={30}
                centeredSlides={true}
                modules={[Pagination,Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={Banner1}  alt='Banner1' style={{ height: "550px" }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner2} alt='Banner2' style={{ height: "550px" }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner3} alt='Banner3' style={{ height: "550px" }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner4} alt='Banner4' style={{ height: "550px", }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner5} alt='Banner5' style={{ height: "550px" }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner6} alt='Banner6' style={{ height: "550px" }}></Image>
                </SwiperSlide>
            </Swiper>
        </Box>


    );
};

export default Banner;