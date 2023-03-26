import './SlideCard.css';
import shoes from '../Images/shoes.png';
import watch from '../Images/watch.png';
import watch2 from '../Images/watch2.png';
import iphone from '../Images/iphone.png';

import addimg from '../Images/add.png';
import rating from '../Images/rate.png';
import like from '../Images/like.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlideCard=(props)=>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
    const productData = [
      
          {
            id: 1,
            discount: 50,
            cover: shoes,
            name: "Shoes",
            price: 100,
          },
          {
            id: 2,
            discount: 40,
            cover: watch2,
            name: "Watch",
            price: 20,
          },
          {
            id: 3,
            discount: 40,
            cover: iphone,
            name: "Smart Mobile Black",
            price: 200,
          },
          {
            id: 4,
            discount: 40,
            cover: watch,
            name: "Smart Watch Black",
            price: 50,
          },
          {
            id: 5,
            discount: 50,
            cover: shoes,
            name: "Shoes",
            price: 100,
          },
          {
            id: 6,
            discount: 50,
            cover: shoes,
            name: "Shoes",
            price: 100,
          },
        ]
      

    return (
        <>
        <Slider {...settings}>
       {productData.map((value) => {
                  return (
        <div className='container-slide-card'>
<div className='product'>
<div className='off-title'>
<h5>{value.discount}% OFF</h5>

<div className='like'>
  <span>0</span>
  <img src={like}/>
</div>
</div>
<div className='img-product'>
<img src={value.cover}/>
</div>
<span className='title-product'>{value.name}</span>
<div className='rate'>
<img src={rating}/>
<img src={rating}/>
<img src={rating}/>
<img src={rating}/>
<img src={rating}/>
</div>
<div className='price-product'>
 
<h4>{value.price}.00</h4>

<img src={addimg} onClick={()=>props.addToCart(value)}/>

</div>
</div>
        </div>
       ) 
       })}
       </Slider>
        </>
    )
}
export default SlideCard;