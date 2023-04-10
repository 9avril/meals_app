import React from 'react'
import {BsBox2HeartFill} from 'react-icons/bs'
import styles from './Header.module.css'
import {useFavorites} from "../../hooks/useFavorites.js";

const Header = () => {
const {favorites} = useFavorites()
    return (
        <header className={styles.header}>
            <BsBox2HeartFill size={30} style={{cursor: "pointer"}}/>
            <span>{favorites.length}</span>
        </header>
    )
}
export default Header
