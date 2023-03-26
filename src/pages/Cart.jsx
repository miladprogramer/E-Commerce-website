import "./Cart.css";
import plus from '../Images/plus-red.png';
import minus from '../Images/minus.png';
import close from '../Images/close.png';
const Cart = (props) => {
  const cartItem = props.cartItem;
  const addToCart = props.addToCart;
  const decreaseQty = props.decreaseQty;
  const deleteItem=props.deleteItem;
  const totalPrice = cartItem.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
     
     <section className="cart-container">

<div>
        {cartItem.map((item) => {
          const productQty = item.price * item.qty;
          return (
            <>
              <div className="cart-items">
                <div className="items">
                    <div className="item-detail">
                    <div className="item-img">
                    <img src={item.cover} />
                    </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <h5>${item.price}.00</h5>
                   
                  </div>
                  </div>
               <div className="contorols">
              <button onClick={() => deleteItem(item)}><img src={close} /></button> 
               <div className="qty">
                    <button onClick={() => addToCart(item)}> <img src={plus} /></button>
                    <h5>{item.qty}</h5>
                    <button onClick={() => decreaseQty(item)}> <img src={minus} /></button>
                  </div>
               </div>
                
                 
                </div>
              </div>
             
            </>
          );
        })}
</div>
<div className="cart-summary">
         <h2>Cart Summary</h2>
         <div className="total-price">
         <h5>Total Price :</h5>
         <h5>${totalPrice}</h5>
         </div>
         
            </div>
      </section>
    </>
  );
};
export default Cart;
