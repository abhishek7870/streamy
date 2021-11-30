import React from "react";
import { Link } from "react-router-dom";
import GoogleAuthentication from './GoogleAuthentication';
const Header = () => {
  

  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        streamy
      </Link>
      <div className="right menu">
        <Link to="/stream/list" className="item">
          All Streamy
        </Link>
        <GoogleAuthentication />
        
      </div>
    </div>
  );
};

export default Header;
