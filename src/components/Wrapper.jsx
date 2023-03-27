import './Wrapper.css';
import delivery from '../Images/delivery.png';
import support from '../Images/support.png';
import payment from '../Images/payment.png';
const Wrapper=()=>{
    const data = [
        {
          cover: delivery,
          title: "Worldwide Delivery",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: payment,
          title: "Safe Payment",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: payment,
          title: "Shop With Confidence ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
          cover: support,
          title: "24/7 Support ",
          decs: "We offer competitive prices on our 100 million plus product any range.",
        },
      ]
    return (
        <>
<div className='wrapper-container'>

{data.map((value,index)=>{
    return (
        <>
        <div className='wrapper'>
<div className='img-wrapper'>
<img src={value.cover}/>
</div>
           
            <h3>{value.title}</h3>
            <span>{value.decs}</span>
        </div>
        
        </>
    )
})}


</div>
        </>
    )
}
export default Wrapper;