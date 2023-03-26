import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Main.css';
import shoes from '../Images/shoes.png';
import jacket from '../Images/jacket.png';
const Main=()=>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
          },
      };

      const Sdata = [
        {
          id: 1,
          title: "50% Off For Your First Shopping",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
          cover: shoes,
        },
        {
          id: 2,
          title: "50% Off For Your First Shopping",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
          cover: jacket,
        },
        {
          id: 3,
          title: "50% Off For Your First Shopping",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
          cover: "./images/SlideCard/slide-3.png",
        },
        {
          id: 4,
          title: "50% Off For Your First Shopping",
          desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
          cover: "./images/SlideCard/slide-4.png",
        },
      ]
    return (
       
            <>
            <div className="main-slider">
              <Slider {...settings}>
                {Sdata.map((value, index) => {
                  return (
                    <>
                      <div className='slider' key={index}>
                        <div className='left'>
                          <h1>{value.title}</h1>
                          <p>{value.desc}</p>
                          <button className='btn-primary'>Visit Collections</button>
                        </div>
                        <div className='right'>
                          <img src={value.cover} alt='' />
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
export default Main;