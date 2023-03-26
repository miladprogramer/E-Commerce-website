import "./TopCat.css";
import sunglass from "../Images/sunglass.png";
import clothes from "../Images/clothes-sale.png";
import watches from "../Images/watch-sales.png";
import headphone from "../Images/headphone.png";
import flash from '../Images/flash.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCat = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const productData = [
    {
      cover: headphone,
      para: "headphone",
      desc: "3k orders this week",
    },
    {
      cover: watches,
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: sunglass,
      para: "sunglass",
      desc: "6k orders this week",
    },
    {
      cover: watches,
      para: "watch",
      desc: "4k orders this week",
    },
    {
      cover: sunglass,
      para: "sunglass",
      desc: "6k orders this week",
    },
  ];

  return (
    <>
       <div className="topcat-title">
      <img src={flash}/>
        <span>Top Categories</span>
      </div>
    <div className="container-topcat">

   
    
      <Slider {...settings}>
        {productData.map((value, index) => {
          return (
            <>
              {/* <div className="topcat-items">

                <img src={value.cover}/>
                <div className="items-detail">
                    <div className="left-title">
                    <span>{value.para}</span>
                    </div>
                    <div className="right-title">
                    <span>{value.desc}</span>
                        </div>
                    
                  
                </div>
                </div> */}
                 <div className='topcat-items' key={index}>
                <div className='nametop'>
                  <span className='tleft'>{value.para}</span>
                  <span className='tright'>{value.desc}</span>
                </div>
                <div className='img'>
                  <img src={value.cover} alt='' />
                </div>
              </div>
            </>
          )
        
        })}
      </Slider>
      </div>
    </>
    
  );
};
export default TopCat;
