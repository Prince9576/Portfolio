import React from "react";
import Home from "../Home/Home";
import styles from "./Container.module.css";

const Container = () => {
  return (
    <div className={styles["container"]}>
      <Home />
    </div>
  );
};

export default Container;
