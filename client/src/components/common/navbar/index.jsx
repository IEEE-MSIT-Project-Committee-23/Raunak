import React from 'react';


const Navbar = () => {
  return (
    <header className="text-white-600 body-font">
  <div className="container mx-auto flex flex-wrap p-7 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white-900 mb-4 md:mb-0">
      <span className="ml-3 text-4xl main-logo">रौनक़</span>
     
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white-900">Home</a>
      <a className="mr-5 hover:text-white-900">Donate</a>
      <a className="mr-5 hover:text-white-900">Get Pass</a>
    </nav>
  </div>
</header>
  )
}

export default Navbar

