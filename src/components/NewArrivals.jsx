import './NewArrivals.css';
import flash from '../Images/flash.png';
import smartwatch from '../Images/smartwatch.png';
import tree from '../Images/tree.png';
import greenplant from '../Images/greenplant.png';
import makeup from '../Images/makeup.png';
import sunglass2 from '../Images/sunglass2.png';
import lipstick from '../Images/lipstick.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const NewArrivals=()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };
      const productData = [
        {
            cover: sunglass2,
            name: "Sunglass",
            price: "150",
          },
          {
            cover: makeup,
            name: "Makeup",
            price: "250",
          },
          {
            cover:smartwatch,
            name: "Smart Watch",
            price: "50",
          },
          {
            cover: lipstick,
            name: "Lipstick",
            price: "15",
          },
          {
            cover: greenplant,
            name: "Green Plant",
            price: "10",
          },
          {
            cover: tree,
            name: "Bonsai tree",
            price: "400",
          },
      ];
    return (
        <>
 <div className="topcat-title">
      <img src={flash}/>
        <span>New Arrivals</span>
      </div>
    <div className="container-topcat">

   
    
      <Slider {...settings}>
        {productData.map((value, index) => {
          return (
            <>
          
                 <div className="newarrivals-items" key={index}>
            
                <div className="newarrivals-item">
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
export default NewArrivals;