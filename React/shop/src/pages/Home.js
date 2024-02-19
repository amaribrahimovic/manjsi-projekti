// Libraries
import React from 'react'

// CSS
import '../components.css'

// Components
import Paragraph from '../components/Paragraph'

const Home = () => {
  return (
      <div className='body'>
        <h1>Home</h1>
        <Paragraph>Welcome to our little online web store. Feel free to take your time and make sure you look at everything you need to.</Paragraph>
        <img src={require('../media/logo.png')} alt='logo'/>
      </div>
  )
}

export default Home