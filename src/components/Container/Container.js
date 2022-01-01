import React from "react";
import About from "../About/About";
import Home from "../Home/Home";
import Testimonials from "../Testimonials/Testimonials";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles["container"]}>
      <Home />
      <About />
      <Testimonials />
    </div>
  );
};

export default Container;
