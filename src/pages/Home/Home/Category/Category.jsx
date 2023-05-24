import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from './../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const Category = () => {
  return (
    <section className='mb-8 md:mb-24'>
      <SectionTitle
        heading={'Order Online'}
        subHeading={'From 11.00a to 10.00pm'}
      />
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={slide1} alt='' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-slate-700'>
            <span className='text-5xl'>S</span>alads{' '}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt='' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-slate-700'>
            <span className='text-5xl'>S</span>alads{' '}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt='' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-slate-700'>
            <span className='text-5xl'>S</span>alads{' '}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt='' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-slate-700'>
            <span className='text-5xl'>S</span>alads{' '}
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt='' />
          <h3 className='text-4xl uppercase text-center -mt-16 text-slate-700'>
            <span className='text-5xl'>S</span>alads{' '}
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
