import React from 'react';
// import logo from 'images/svgs_collection/svg3.svg';

const TopNav = () => {
  return (
    <div className='top-navbar'>
    <ul>
    <div className ="left-nav">
      <li>Discover</li>
      <li>Start a Project</li>
    </div>
      <div className = "logo">
        <h1>kickStarter </h1>
      </div>
      <div className ="right-nav">
      <li className='search-btn'>Search <i class="fa-solid fa-magnifying-glass"></i></li>
      <li>Login</li>
      </div>
      </ul>
    </div>
  )
}

export default TopNav
