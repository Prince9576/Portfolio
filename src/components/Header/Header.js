import React from "react";
import styles from "./Header.module.css";

const Header = ({ heading, subheading }) => {
  return (
    <div className={styles["header-container"]}>
      <h2 className={styles.heading}>{heading}</h2>
      <h5 className={styles.subheading}>{subheading}</h5>
      <div className={styles.separator}>
        <hr className={styles.lineXL}></hr>
        <hr className={styles.lineXS}></hr>
      </div>
    </div>
  );
};

export default Header;
