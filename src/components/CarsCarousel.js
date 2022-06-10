import { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { fetchCarsData } from '../fetches';
import { CarouselCard } from './CarouselCard';
import { SlidePrevButton, SlideNextButton } from './navButtons';

const CarsCarousel = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const data = fetchCarsData();
        setCars(data);
    }, []);

    const isMobile = window.innerHeight > window.innerWidth & window.innerWidth < 1000;

    const slides = cars.length && cars.map(car => (
        <SwiperSlide key={car.id}>
            <CarouselCard {...car} isMobile/>
        </SwiperSlide>
    ));
    return(
        <>
        { 
            isMobile
            ? <Swiper
            className='mobile'
            slidesPerView={1.4}
            spaceBetween={15}
            modules={[Pagination]}
            pagination
                >
                    {slides}
              </Swiper>
            : <Swiper 
                    slidesPerView={4}
                    spaceBetween={20}
                >
                    {slides}
                    <div className='footer'>
                        <SlidePrevButton/>
                        <SlideNextButton/>
                    </div>
              </Swiper>
        }
        </>
    )
}

export default CarsCarousel;