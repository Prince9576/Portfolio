import React from "react";
import About from "../About/About";
import Home from "../Home/Home";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles["container"]}>
      <Home />
      <About />
    </div>
  );
};

export default Container;
