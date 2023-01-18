import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

const Header = () => {
  const[{cart},dispatch] = useStateValue();

  return (
    <div className='header'>
      <Link to="/">
        <img
          className='header__logo' src="https://cdn.pixabay.com/photo/2017/03/01/09/11/shop-2107911_960_720.png" alt="" />
      </Link>

      <div className="header__search">
        <input
          className='header__searchInput' type="text"
        />
        <SearchIcon className='header__searchIcon'
        />
      </div>

      <div className="header_nav">
      <Link to ='/login'>
        <div className='header_option'>
          <span className='header_optionLineOne'>Hello User
          </span>
          <span className='header_optionLineTwo'>Sign in
          </span>
        </div>
        </Link>

        <div className='header_option'>
          <span className='header_optionLineOne'>Returns
          </span>
          <span className='header_optionLineTwo'>Orders
          </span>
        </div>


        <Link to="/checkout">
          <div className="header_cart">
            <ShoppingCartIcon />
            <span className='header_optionLineTwo header_cartCount'>{cart?.length}</span>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Header