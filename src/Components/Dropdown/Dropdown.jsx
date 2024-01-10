
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp,faTimes } from '@fortawesome/free-solid-svg-icons'
import './Dropdown.css'

const Dropdown = ({ categories, categorySelection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Select Category')

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleCategorySelect = (category) => {
    categorySelection(category)
    setSelectedCategory(category)
    setIsOpen(false)
  }
    
  const clearSelection = () => {
    categorySelection(null); 
    setSelectedCategory('Select Category');
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedCategory}
              {selectedCategory === 'Select Category' && (<FontAwesomeIcon
                  icon={isOpen ? faCaretUp : faCaretDown}
                  className="caret-icon"
              />)}
               {selectedCategory !== 'Select Category' && (
          <FontAwesomeIcon icon={faTimes} className="clear-icon" onClick={clearSelection} />
        )}
      </div>
      {isOpen && (
        <div className="dropdown-list">
          <ul>
            {categories.map((category, index) => (
              <li key={index} onClick={() => handleCategorySelect(category)}>
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
