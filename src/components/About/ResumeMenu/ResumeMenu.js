import React, { useState } from "react";
import styles from "./ResumeMenu.module.css";

const defaultMenu = [
  {
    icon: "fas fa-user-graduate",
    desc: "Education",
    active: true,
  },
  {
    icon: "fas fa-history",
    desc: "Work Experience",
    active: false,
  },
  {
    icon: "fas fa-laptop-code",
    desc: "Skills",
    active: false,
  },
  {
    icon: "fas fa-chart-bar",
    desc: "Projects",
    active: false,
  },
  {
    icon: "fas fa-palette",
    desc: "Interests",
    active: false,
  },
];
const ResumeMenu = ({ scrollHandler }) => {
  const [menu, setMenu] = useState(defaultMenu);

  const menuClickHandler = (index) => {
    scrollHandler(index);
    setMenu(() => {
      const newMenu = [...menu];
      newMenu.forEach((m) => (m.active = false));
      return newMenu;
    });
    setMenu(() => {
      const newMenu = [...menu];
      const current = newMenu[index];
      current.active = true;
      return newMenu;
    });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles["resume-parent"]}>
        <div className={styles["menu-bar"]}>
          {menu.map((item, i) => {
            return (
              <div
                onClick={() => menuClickHandler(i)}
                className={`${styles.bar}`}
                key={i}
              >
                <div className={styles.icon}>
                  <i className={item.icon}></i>
                </div>
                <div
                  className={`${styles.description} ${
                    item.active ? styles.active : ""
                  }`}
                ></div>
                <span
                  className={
                    item.active
                      ? `${styles["desc-text"]} ${styles.activeDesc}`
                      : `${styles["desc-text"]}`
                  }
                >
                  {item.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeMenu;
