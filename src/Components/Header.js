import React from 'react';
import { Link } from 'react-router-dom'
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
        <li><Link to="/" > Home </Link></li>
        <li><Link to="/pricing" > Pricing </Link></li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  routes : React.PropTypes.array
};

export default Header;
