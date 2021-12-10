import React from "react";
import ActiveLink from './link'
import profilepic from './profilepic.jpg'
import classes from './navigation.module.css'
import Image from 'next/image'

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
          <a className={classes.navlink}>Home</a>
        </ActiveLink>
      </li>
      <li className={classes.li} >
        <ActiveLink activeClassName="active" href="/about">
          <a className={classes.navlink}>About</a>
        </ActiveLink>
      </li>
      <li className={classes.li}>
        <ActiveLink activeClassName="active" href="/[slug]" as="/dynamic-route">
          <a className={classes.navlink}>Dynamic Route</a>
        </ActiveLink>
        <div className={`${classes.sidebar} nav`}>

        </div>
      </li>
    </ul>
  </nav>
	) 
}



export default Navigation
