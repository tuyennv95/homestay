import React, { useEffect } from "react";
import ReactDOM from "react-dom";
// import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '../ShowProducts/Slider/Slider';

import Header from '../ShowProducts/Header/Header';
import CategoryHome from './CategoryHome/CategoryHome';
import SliderHotCity from './SliderHotCity/SliderHotCity'
import SliderPlaceHotCity from './SliderPlaceHotCity/SliderPlaceHotCity'



const useStyles = makeStyles((theme) => ({
    '@global'             : {

        margin            : 0,
        padding           : 0,
        listStyle         : 'none',

        a                 : {
            textDecoration: 'none',
        }
    },
    slider:{
        marginTop: '130px',
    }

}));
export default function Home() {
    
    const classes = useStyles();

    return (
        <div>
      <Header/>
      <div className={classes.slider}>
      <Slider/>
      </div>
      <CategoryHome/>
        <SliderHotCity/>
        <SliderPlaceHotCity city={SaiGon}/>
        <SliderPlaceHotCity city={VungTau}/>
        <SliderPlaceHotCity city={VungTau}/>
    </div>


    )
}
const SaiGon = [

    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_10_1584602562.jpg',
      href: '',
      title: 'Gần trung tâm',
      description: 'Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_1_1585280532.jpg',
      href: '',
      title: 'Dành cho cặp đôi',
      description: 'Tận hưởng không gian lãng mạn và ngọt ngào giữa Sài Gòn hoa lệ.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_12_1584602806.jpg',
      href: '',
      title: 'Giá tốt chọn ngay!',
      description: 'Trải nghiệm không gian homestay tiện nghi với mức giá không thể tốt hơn.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_8_1584602495.jpg',
      href: '',
      title: 'Triệu view sống ảo',
      description: 'Top homestay triệu view sống ảo bạn không thể bỏ lỡ tại Sài Gòn.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_1_1584606781.jpg',
      href: '',
      title: 'Bể bơi & BBQ',
      description: 'Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_2_1584606872.jpg',
      href: '',
      title: 'Siêu giảm giá!',
      description: 'Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_3_1584606968.jpg',
      href: '',
      title: 'Ở lâu giảm sâu!',
      description: 'Top homestay phù hợp cho nhu cầu đi công tác khi bạn cần - Ở càng lâu, giá càng tốt!'
    },
  
  ]
  const VungTau = [
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_1_1584685147.jpg',
      href: '',
      title: 'Cho cặp đôi',
      description: 'Trải qua kỳ nghỉ lãng mạn và đáng nhớ với gợi ý chỗ ở cực đẹp chỉ dành cho hai người'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_2_1584685334.jpg',
      href: '',
      title: 'Cho nhóm bạn',
      description: 'Chỗ ở tiện nghi, rộng rãi cho nhóm bạn và gia đình ở thành phố biến.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_3_1584685843.jpg',
      href: '',
      title: 'Giá ưu đãi',
      description: 'Top Homestay có thiết kế đẹp, giá siêu ưu đãi.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_4_1584685928.jpg',
      href: '',
      title: 'Gần Bãi Sau',
      description: 'Chỗ ở gần bãi Sau giá siêu ưu đãi dành tặng bạn.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_5_1584686116.jpg',
      href: '',
      title: 'Gần Bãi Trước',
      description: 'Chỗ ở view biển, gần bãi Trước với giá ưu đãi cho chuyến du lịch thêm hoàn hảo.'
    },
    {
      img: 'https://cdn.luxstay.com/home/apartment/apartment_6_1584686209.jpg',
      href: '',
      title: 'Giá dưới 1 triệu',
      description: 'Chỉ từ dưới 1 triệu/đêm cho một chỗ ở lý tưởng trung tâm Vũng Tàu.'
    },
   
  ]
const HaNoi = [

]


