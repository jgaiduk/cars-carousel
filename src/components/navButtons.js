import {useSwiper} from 'swiper/react';
import {ReactComponent as ChevronCircled} from '../assets/chevron-circled.svg';

export const SlideNextButton = () => {
    const swiper = useSwiper();
    return(
        <div onClick={() => swiper.slideNext()}>
            <ChevronCircled/>
        </div>
    )
}

export const SlidePrevButton = () => {
    const swiper = useSwiper();
    return(
        <div onClick={() => swiper.slidePrev()}>
            <ChevronCircled className='chevron chevron-rotate'/>
        </div>
    )
}