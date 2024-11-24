import React from "react";
import styles from "./Header.module.css"; 
import logo from "../assets/images/Logo.png"; 

const Header = () => (
  <header className={styles.header}>
    <div id="logo">
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  </header>
);

export default Header;
