import React from "react";
import styles from "./Links.module.css";

const Links = () => {
  return (
    <div className={styles["links"]}>
      <div className={`flex-center ${styles["link"]} ${styles["linkedin"]}`}>
        <a
          href="https://www.linkedin.com/in/prince-kumar-a0aa6916a/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div className={`flex-center ${styles["link"]} ${styles["instagram"]}`}>
        <a href="https://www.instagram.com/__prince.__._/" target="_blank">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className={`flex-center ${styles["link"]} ${styles["github"]}`}>
        <a href="https://github.com/Prince9576" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
      <div className={`flex-center ${styles["link"]} ${styles["twitter"]}`}>
        <a href="https://twitter.com/PrinceK39511508" target="_blank">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Links;
