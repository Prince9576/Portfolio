import React from "react";
import Header from "../Header/Header";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <Header heading="About Me" subheading="Why Choose me?" />
    </div>
  );
};

export default About;
