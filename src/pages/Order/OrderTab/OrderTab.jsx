import FoodCard from "../../../components/SectionTitle/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// import Swiper styles
// import 'swiper.css';
// import 'swiper/css/pagination'

// TODO: implement pagination here on this page

const OrderTab = ({ items }) => {
  
  //
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class=" ' + className + ' " >' + (index + 1) + "</span>";
     }
    }
  // 


  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 lg:gap-8 '>
          {items.map((item) => (
            <FoodCard key={item._id} item={item} />
            ))}
            </div>{ ' ' }
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;