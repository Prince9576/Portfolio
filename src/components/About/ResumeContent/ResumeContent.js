import React, { useEffect } from "react";
import styles from "./ResumeContent.module.css";

const ResumeContent = ({ selectedTabIndex, firstTimeTabSet }) => {
  const getSelectedTabID = (index) => {
    console.log(index);
    let selectedTab;
    switch (index) {
      case 0:
        selectedTab = "education";
        break;
      case 1:
        selectedTab = "experience";
        break;
      case 2:
        selectedTab = "skills";
        break;
      case 3:
        selectedTab = "projects";
        break;
      case 4:
        selectedTab = "interests";
        break;
    }
    return selectedTab;
  };
  useEffect(() => {
    // console.log("Hey its changed please scroll to", firstTimeTabSet);
    if (firstTimeTabSet) {
      const selectedTab = getSelectedTabID(selectedTabIndex);
      const el = document.getElementById(selectedTab);
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [selectedTabIndex, firstTimeTabSet]);
  return (
    <div className={styles.wrapper}>
      <div id="education">Education</div>
      <div id="experience">Work Experience</div>
      <div id="skills">Skills</div>
      <div id="projects">Projects</div>
      <div id="interests">Interests</div>
    </div>
  );
};

export default ResumeContent;
