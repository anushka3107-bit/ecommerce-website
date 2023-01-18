import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';
 


const Product = ({ id,title, image, price, rating }) => {

  const [{cart}, dispatch] = useStateValue();

  console.log("this is the cart ",cart);

  const addToCart = () => {
    //  dispatch the item in the data layer
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id:id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className='product'>
      <div className="product_detail">
        <p>{title}</p>
        <p className='product_price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🍩</p>
            ))}

        </div>

      </div>

      <img src={image} alt="image_logo" className='image' />

      <button onClick={addToCart}>Add to Cart</button>

    </div>
  )
}

export default Product