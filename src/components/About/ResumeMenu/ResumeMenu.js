import React, { useState } from "react";
import styles from "./ResumeMenu.module.css";
import { getBreakPoint } from "../../../utilities/breakpoints";
import { useMediaQuery } from "react-responsive";

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
];
const ResumeMenu = ({ scrollHandler }) => {
  const isMobileView = useMediaQuery({
    query: `(max-width: ${getBreakPoint("mobile")}px)`,
  });
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
                {!isMobileView && (
                  <>
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
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ResumeMenu;
