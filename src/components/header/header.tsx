import React from "react";
import Logo from "../../assets/logo";
import styles from "./header.module.scss"


const Header = () => {
    return (
        <header className={styles.header}>
            <a href='https://www.victoriassecret.com/us/'><Logo /></a>
        </header>
    )
}

export default Header;