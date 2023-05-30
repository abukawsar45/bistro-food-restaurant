import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdQuote } from 'react-icons/io';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4700/reviews')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <div className='my-6 md:my-20'>
      <SectionTitle
        subHeading={'Whai our Clent Side'}
        heading={'Testimonials'}
      />

      <>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className='mx-24 my-16 flex flex-col items-center text-center'>
                <Rating
                  className='text-center'
                  style={{ maxWidth: 180 }}
                  value={review.length}
                  readOnly
                />
                <IoMdQuote className='text-6xl'/>
                <p className='my-4'>{review.details}</p>
                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Testimonials;
