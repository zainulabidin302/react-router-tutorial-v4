import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from './../logo.svg'
const Header = ({routes}) => (
  <div className="header">
    <div className="Logo">
      <img src={logo} />
      <div>React Router V4</div>
    </div>

    <div className="Navigation">
      <ul className="Tag-cloud">
        <li><NavLink exact to="/" activeClassName="active" > Home </NavLink></li>
        <li><NavLink to="/pricing" activeClassName="active" > Pricing </NavLink></li>
        <li><NavLink to="/about" activeClassName="active" > About </NavLink></li>
        <li><NavLink to="/blog" activeClassName="active" > Blog </NavLink></li>
      </ul>
    </div>

  </div>
);



export default Header;
