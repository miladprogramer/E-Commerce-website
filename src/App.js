import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Main from './components/Main';
import FlashDealSlider from './components/FlashDealSlider';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Cart from './pages/Cart';
import TopCat from './components/TopCat';
function App() {
  const [cartItem,setCartItem]=useState([]);

  const addToCart=(product)=>{

const productExit = cartItem.find((item) => item.id === product.id);
if (productExit) {
  setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
} else {
 
  setCartItem([...cartItem, { ...product, qty: 1 }])
}

}
const decreaseQty = (product) => {
 
  const productExit = cartItem.find((item) => item.id === product.id)


  if (productExit.qty === 1) {
    setCartItem(cartItem.filter((item) => item.id !== product.id))
  } else {
    setCartItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
  }
}
const deleteItem=(product)=>{
  setCartItem(cartItem.filter((item) => item.id !== product.id))
}

  
  return (
 <>
 <div className='container'>
  <Header cartItem={cartItem} />
  <div className="main">
  <Route exact path="/">
<Categories />
<Main />
</Route>

</div>
<Route exact path="/" >
<FlashDealSlider addToCart={addToCart} cartItem={cartItem} />

</Route>
<Route path="/cart">
<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} deleteItem={deleteItem}/>
</Route>

<TopCat />

 </div>
 </>
  );
  }

export default App;
