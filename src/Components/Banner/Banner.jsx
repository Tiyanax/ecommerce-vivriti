import React from 'react'
import ReadMoreComponent from '../ReadMoreComponent/ReadMoreComponent'
import './Banner.css'

export default function Banner() {
    const descText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae officia mollitia, nemo tempora magni veritatis recusandae.'
  return (
    <div className="banner">
      <div className='banner-header'> Lorem Ipsum</div>
          <ReadMoreComponent text={descText} />
    </div>
  )
}
