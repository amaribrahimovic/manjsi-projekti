// Libraries
import React from 'react'

// CSS
import '../components.css'

// Components
import Paragraph from '../components/Paragraph'

const AboutUs = () => {
  return (
    <div className='body'>
      <h1>About Us</h1>
      <Paragraph>We are a small startup company, which sells groceries online. We provide local products at reasonable prices.</Paragraph>
      <img src={require('../media/logo.png')} alt='logo'/>
    </div>
  )
}

export default AboutUs