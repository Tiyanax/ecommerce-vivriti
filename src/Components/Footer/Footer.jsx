import React from 'react'
import { footerData } from '../../Contents/footerContent'
import Cards from '../../Contents/cards1.png'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="one">
        <div className="footer-title">{footerData.companyInfo.title}</div>
        <div className="footer-desc">
          {footerData.companyInfo.description.map((ele) => (
            <li>{ele}</li>
          ))}
        </div>
      </div>
   <div className="two">
        {' '}
        <div className="footer-title">{footerData.helpNsupport.title}</div>
        <div className="footer-desc">
          {footerData.helpNsupport.description.map((ele) => (
            <li>{ele}</li>
          ))}
        </div>
      </div>
         <div className="three">
        {' '}
        <div className="footer-title">{footerData.customerCare.title}</div>
        <div className="footer-desc">
          {footerData.customerCare.description.map((ele) => (
            <li>{ele}</li>
          ))}
        </div>
      </div> 
      <div className="four">
        <img src={Cards} alt="cards" />
      </div>
          <div className="five">
          <div className="footer-desc">
          {footerData.copyRight.map((ele) => (
            <li>{ele}</li>
          ))}
        </div> 
      </div>
    </div>
  )
}
