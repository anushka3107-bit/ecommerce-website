import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';


const Checkout = () => {
  const[{cart},dispatch] = useStateValue();

  return (
    <div className ='checkout'>
       <div className="checkout_leftside">
       <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

       <div>
        <h2 className="checkout_heading">
        Your Shopping Cart
        </h2>


        {cart.map(item =>(
          <CheckoutProduct 
            id = {item.id}
            title = {item.title}
            image = {item.image}
            rating = {item.rating}
            price = {item.price}
          />
        ))}
          
          

       </div>
       </div>

       <div className="checkout_rightside">
       <Subtotal />
       </div>
    </div>
  )
}

export default Checkout