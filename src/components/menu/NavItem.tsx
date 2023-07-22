import { Link, animateScroll as scroll } from "react-scroll";
import React from 'react'

const NavItem = ({title, name}: {title: string, name: string}) => {

    const scrollToTop = () => {
        scroll.scrollToTop({
          duration: 400, // Adjust the duration to control the scroll speed
          smooth: "easeInOutQuart", // Adjust the easing function for the scroll animation
        });
      };

  return (
    <li className='section cursor-pointer text-dark hover:bg-dark hover:text-light duration-100 bg-ghost text-2xl px-2 py-1 rounded-xl '>
        <Link className='text-2xl' smooth={true} duration={400} offset={-120} to={name}>{title}</Link>
    </li>
  )
}

export default NavItem