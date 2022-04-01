import React from "react";

function Header() {
  return (
    <div className="box row header">
      <div className="brand">
        <img src="brand-logo.png" alt="logo" height="48px"/>
        <p>NERDstore</p>
      </div>

      <nav className="nav-container">
        <ul className="menu">
          <li>Home</li>
          <li>Store</li>
          <li>Categories</li>
          <li>Profile</li>
          <li><img src="brand-logo.png" alt="logo" height="13px"/></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
