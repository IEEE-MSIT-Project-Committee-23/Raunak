import React from 'react';



const Navbar = () => {
  
  return (
    
    <header className="text-white-600 body-font">

  <div className="navbar container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
      <span className="ml-3 text-4xl main-logo">रौनक़</span>
     
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <ul className = "nav-links">
      <li><a className="mr-5 hover:text-white-900 ">Home</a></li>
      <li><a className="mr-5 hover:text-white-900 nav-links" href = "#about">About</a></li>
      <li><a className="mr-5 hover:text-white-900 nav-links " href = "#partners">Partners</a></li>
      <li><a className="mr-5 hover:text-white-900 nav-links">Donate</a></li>
      <li><a className="mr-5 hover:text-white-900 nav-links">Get Pass</a></li>
      </ul>
    </nav>

  </div>
  <hr className="flex-grow border-t border-white-300"/> 
</header>
/*
<header className ="header">
        <nav className ="navbar">
        <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
      <span className="ml-3 text-4xl main-logo">रौनक़</span>
     
    </a>
            <ul className ="nav-menu">
                <li className ="nav-item">
                    <a href="#" className ="nav-link">Home</a>
                </li>
                <li className ="nav-item">
                    <a href="#" className ="nav-link">About</a>
                </li>
                <li className ="nav-item">
                    <a href="#partners" className ="nav-link">Partners</a>
                </li>
                <li className ="nav-item">
                    <a href="#" className ="nav-link">Donate</a>
                </li>
                <li className ="nav-item">
                    <a href="#" className ="nav-link">Get Pass</a>
                </li>
            </ul>
            <div className ="hamburger">
                <span className ="bar"></span>
                <span className ="bar"></span>
                <span className ="bar"></span>
            </div>
        </nav>
</header>
*/
  )
}

export default Navbar

