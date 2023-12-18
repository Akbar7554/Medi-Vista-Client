"use client"
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Banner1 from "@/assets/Banner/Banner1.jpg"
import Banner2 from "@/assets/Banner/Banner2.jpg"
import Banner3 from "@/assets/Banner/Banner3.jpg"
import Banner4 from "@/assets/Banner/Banner4.jpg"
import Banner6 from "@/assets/Banner/Banner6.jpg"
import Banner501 from "@/assets/Banner/Banner501.jpg"
import Image from "next/image";
import { Box } from '@mui/material';



const Banner = () => {
    return (

        <Box sx={{ px: 5, py: 3 }}>
            <Swiper
                
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image src={Banner1} alt='Banner1' style={{ height: "500px", }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner2} alt='Banner2' style={{ height: "500px" }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner3} alt='Banner3' style={{ height: "500px" }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner4} alt='Banner4' style={{ height: "500px", }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner6} alt='Banner6' style={{ height: "500px" }}></Image>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={Banner501} alt='Banner7' style={{ height: "500px" }}></Image>
                </SwiperSlide>
            </Swiper>
        </Box>


    );
};

export default Banner;