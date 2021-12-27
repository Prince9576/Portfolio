import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./About.module.css";
import ResumeContent from "./ResumeContent/ResumeContent";
import ResumeMenu from "./ResumeMenu/ResumeMenu";

const About = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [firstTimeTabSet, setFirstTimeTabSet] = useState(false);
  const scrollHandler = (id) => {
    console.log("Received:", id);
    setFirstTimeTabSet(true);
    setSelectedTab(id);
  };
  return (
    <div className={styles.wrapper}>
      <Header heading="About Me" subheading="Why Choose me?" />
      <div className={styles["resume-wrapper"]}>
        <ResumeMenu scrollHandler={scrollHandler} />
        <ResumeContent
          firstTimeTabSet={firstTimeTabSet}
          selectedTabIndex={selectedTab}
        />
      </div>
    </div>
  );
};

export default About;
