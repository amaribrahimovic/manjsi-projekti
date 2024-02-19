// Libraries
import React   from 'react'
import { Link } from 'react-router-dom'

// CSS
import '../components.css'

const Anchor = ({children, to}) => {
  return (
    <Link to={to}>{children}</Link>
  );
}

export default Anchor