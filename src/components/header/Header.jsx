import React from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
        <ul className={styles.headerList}>
            <li><Link to={'/'} ><img src="../../../public/images/Rick-and-Morty.png" alt="" /></Link></li>
            <li><Link className={styles.headerLink} to={'/product'} >Products</Link></li>
            <li><Link className={styles.headerLink} to={'/contact'} >Contact</Link></li>
            <li><Link className={styles.headerLink} to={'/favorites'} >Favorites</Link></li>
        </ul>
        </header>
    )
}

export default Header