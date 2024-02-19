// Libraries
import React from 'react'
import { Link } from 'react-router-dom'

// CSS
import '../components.css'

const PrimaryButton = ({children, to, clickEvent}) => {
  return (
    <Link to={to} className='primary-btn' onClick={clickEvent}>{children}</Link>
  )
}

export default PrimaryButton