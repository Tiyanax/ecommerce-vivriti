import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faHeart } from '@fortawesome/free-solid-svg-icons'
import './ProductCard.css' 


const ProductCard = ({ image, name, description, price, rating }) => {
  return (
      <div className="product-card">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="product-details">
          <div className="product-header">
            <div className="favorite-icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
          <div className="product-info">
            <div className="product-name">${description.slice(0, 20)}...</div>
                  <div className="product-desc">
                  ${description.slice(0, 50)}...
                      </div>
            <div className="product-price">${price}</div>
            <div className="product-rating">
              {Array.from({ length: rating }, (_, index) => (
                <FontAwesomeIcon key={index} icon={faStar} size="xs" />
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default ProductCard
