import './Discount.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import flash from '../Images/flash.png';
const Discount=()=>{
    const productData = [
        {
          cover: "./images/discount/discount-1.png",
          name: "BenuX 2022",
          price: "$250",
        },
        {
          cover: "./images/discount/discount-2.png",
          name: "Sony TV 1080p",
          price: "$450",
        },
        {
          cover: "./images/discount/discount-3.png",
          name: "Sony PS4",
          price: "$50",
        },
        {
          cover: "./images/discount/discount-4.png",
          name: "Setgearr 2022",
          price: "$100",
        },
        {
          cover: "./images/discount/discount-5.png",
          name: "Tony BGB",
          price: "$20",
        },
        {
          cover: "./images/discount/discount-6.png",
          name: "RG products",
          price: "$200",
        },
        {
          cover: "./images/discount/discount-7.png",
          name: "Ranasonic 2022",
          price: "$300",
        },
        {
          cover: "./images/discount/discount-8.png",
          name: "Pune HD",
          price: "$30",
        },
        {
          cover: "./images/discount/discount-9.png",
          name: "Sony CCTV",
          price: "$80",
        },
      ]
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        
      };
    return (
        <>
 <div className="topcat-title">
      <img src={flash}/>
        <span>Big Discount</span>
      </div>
    <div className="container-topcat">

   
    
      <Slider {...settings}>
        {productData.map((value, index) => {
          return (
            <>
          
                 <div className="discount-items" key={index}>
            
                <div className="discount-item">
                  <img src={value.cover} alt='' />
                  <span>{value.name}</span>
                  <span>{value.price}</span>

                </div>
              </div>
            </>
          )
        
        })}
      </Slider>
      </div>
        </>
    )
}
export default Discount;