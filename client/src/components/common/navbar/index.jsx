
'use client'

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {


  let Links = [
    { name: "About", link: "#about" },
    { name: "Gallery", link: "#gallery" },
    { name: "Partners", link: "#partners" },
    { name: "Contact", link: "#contact" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <section className={` w-full top-0 left-0 flex justify-between px-20 py-4 `}>
      <div className="cursor-pointer flex">
          <Link href ="/">
          <div  className="flex">
          <img
            className="w-[65px] md:w-[80px] xl:w-[80px] h-[55px] md:h-[70px]"
            src="./RaunakLogo.png"
            alt="Logo"
          />
          </div>
          </Link>
        </div>
      <div className="md:flex justify-around   ">
        
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute top-6 cursor-pointer md:hidden"
        >
          <FaBars className="text-[20px] ml-12 mt-1" name={open ? "close" : "menu"}></FaBars>
        </div>

        <ul
          className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20  bg-[#22105c] " : "top-[-510px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="my-6 md:my-2 font-dm mx-[24px] font-medium tracking-wider text-[16px] leading-8 "
            >
              <a
                href={link.link}
                className="hover:underline hover:delay-1000 transition-transform ease-in-out scale-x-0 hover:scale-x-1 underline-offset-8 decoration-[#F9F7F7] text-[#F9F7F7] hover:text-gray-300 duration-500"
              >
                {link.name}
              </a>
            </li>
            
          ))}
                <Link href="/donate" legacyBehavior>
             <button className="main-button  text-white bg-500 border-0 py-[0.4rem] px-[1.7rem] focus:outline-none hover:bg-600 rounded text-lg font-bold">Donate</button></Link>
         
          {/* <Link href="https://raunak-backend.msit.in/auth/google/callback">
          <button className="main-button ml-4 text-white-700 bg-white-100 border-0 py-[0.4rem] px-6 focus:outline-none hover:bg-white-200 rounded text-lg font-bold">Get Pass</button>
          </Link> */}
          
        </ul>
      </div>
    </section>
  )
}

export default Navbar


