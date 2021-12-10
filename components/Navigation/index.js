import React from "react";
import ActiveLink from './link'
import profilepic from './profilepic.jpg'
import classes from './navigation.module.css'
import Image from 'next/image'
import {ImHome3,ImBook ,ImFeed} from "react-icons/im";

const Navigation = () => {
	return(
		<nav className= {classes.sidebar} >
    <div className={classes.user}>
       <Image className={classes.image} src={profilepic} alt="profile"  width={50} height={40} />
       <div className={classes.text} >
       <h1> Admin </h1>
       <h3>Vishal Properties </h3>
       </div>
       
    </div>
    <ul className={classes.ul}>
      <li className={classes.li}>
        <ActiveLink activeClassName="active" href="/">
          <div>
          <ImHome3 className={classes.icon}/>
          <a className={classes.navlink}>Home</a>
          </div>
          
        </ActiveLink>
      </li>
      <li className={classes.li} >
        <ActiveLink activeClassName="active" href="/about">
        <div>
          <ImBook className={classes.icon}/>
          <a className={classes.navlink}>About</a>
          </div>
         
        </ActiveLink>
      </li>
      <li className={classes.li}>
        <ActiveLink activeClassName="active" href="/[slug]" as="/dynamic-route">
        <div>
          <ImFeed className={classes.icon}/>
          <a className={classes.navlink}>Dynamic Route</a>
          </div>
        </ActiveLink>
        <div className={`${classes.sidebar} nav`}>
        
        </div>
      </li>
    </ul>
  </nav>
	) 
}



export default Navigation
