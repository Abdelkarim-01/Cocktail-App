import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.nav_center}>
        <span className={styles.logo}>MixMaster</span>
        <div className={styles.nav_links}>
            <NavLink to='/' className={styles.nav_link}> Home</NavLink>
            <NavLink to='/about' className={styles.nav_link}> About</NavLink>
            <NavLink to='/newsletter' className={styles.nav_link}> Newsletter</NavLink>
        </div>
    </nav>
  )
}

export default Navbar
