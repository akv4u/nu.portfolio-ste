import React from 'react'
import {Link} from 'react-router-dom'

const PortfolioPage = () => (
  <div>
    <h2>Checkout the stuff I've done </h2>      
    <Link to="/portfolio/11">Item 1</Link>
    <Link to="/portfolio/22">Item 2</Link>    
  </div>
);

export default PortfolioPage;