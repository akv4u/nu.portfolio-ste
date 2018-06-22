import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink exact to="/" activeClassName="is-active">Home</NavLink>
    <NavLink exact to="/portfolio" activeClassName="is-active">Porfolio</NavLink>
    <NavLink to="/contactus" activeClassName="is-active">Contact Us</NavLink>
  </header>
);

export default Header;