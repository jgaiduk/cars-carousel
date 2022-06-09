import { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { fetchCarsData } from '../fetches';
import { CarouselCard } from './CarouselCard';
import { SlidePrevButton, SlideNextButton } from './navButtons';

const CarsCarousel = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        const data = fetchCarsData();
        setCars(data);
    }, []);

    return(
        <Swiper 
            slidesPerView={4}
            spaceBetween={20}
        >
            {
                cars.length && cars.map(car => (
                    <SwiperSlide key={car.id}>
                        <CarouselCard {...car}/>
                    </SwiperSlide>
                ))
            }
            <div className='footer'>
                <SlidePrevButton/>
                <SlideNextButton/>
            </div>
        </Swiper>

    )
}

export default CarsCarousel;