import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({routes}) => (
  <div className="header">
    <ul>
      {routes.map(route => <Link to={route.to} > {route.title} </Link>)}
    </ul>
  </div>
);

Header.propTypes = {
  routes : React.PropTypes.array
};

export default Header;
