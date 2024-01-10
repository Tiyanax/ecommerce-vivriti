import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

export const Navbar = ({productSelection}) => {
  const [searchValue, setSearchValue] = useState('');

const handleInputChange = (e) => {
  setSearchValue(e.target.value);
  productSelection(e.target.value)
};

const clearSearch = () => {
  setSearchValue('');
  productSelection(null)
};
  return (
    <div className="navbar">
      <div className="nav-logo">
        <span className="colored-text">MoBoo</span><span className="colored-text">M</span>
      </div>
      <ul className="nav-menu">

  
    <div className="search-container">
      <input
        className='search-product'
        placeholder='Search products...'
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />
      {searchValue && (
          <span className="clear-icon" onClick={clearSearch}>
          </span>
        )}
    </div>
        <li>
          Store 
        </li>
        <li>Account</li>
        <li>Wish list</li>
    
      <div className="nav-login-cart">
        <span>
          Basket  &nbsp;
          <FontAwesomeIcon icon={faShoppingCart} size="sm" />
        </span>
      </div>
      </ul>
    </div>
  )
}
