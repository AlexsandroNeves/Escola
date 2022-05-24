import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
function Universidade() {
    return (
        <div className="univer">
            
            <h1>escolas man </h1>

            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">

                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
            </Swiper>
        </div>

    );
}
export default Universidade;