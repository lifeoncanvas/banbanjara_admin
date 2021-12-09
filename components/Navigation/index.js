import React from "react";
import ActiveLink from './link'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faBriefcase,
//   faPaperPlane,
//   faQuestion,
//   faImage,
//   faCopy,
// } from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
//import { Link } from "react-router-dom";
import './navigation.module.css'

const Navigation = () => {
	return(
		<nav className='nav' >
     {/* <style jsx>{`
				.nav{
                  background-color: #163B5E;
				  
				  height:100vh;
				 
				  
                }
      .nav-link {
        text-decoration: none;
		color:#fff;
		//flex:none;
		
      }
	 .nav-link ::selection {
         color: #fff;
          background: #FF9E2A;
		  
				}
      .active:after {
        content: ' (current page)';
		
      }
    `}</style>  */}
    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">About</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/[slug]" as="/dynamic-route">
          <a className="nav-link">Dynamic Route</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
	) 
}



export default Navigation
