import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className="clearfix">
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Resume</a>
        <a href="#">Testimonial</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  );
};

export default Navbar;
