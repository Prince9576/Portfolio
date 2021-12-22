import React, { useState } from "react";
import { TOTAL_SCREENS } from "../../utilities/screens";
import { getBreakPoint } from "../../utilities/breakpoints";
import styles from "./Navbar.module.css";
import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const isMobileView = useMediaQuery({
    query: `(max-width: ${getBreakPoint("mobile")}px)`,
  });
  return (
    <>
      {!isMobileView && (
        <div className="clearfix">
          <nav className={styles.nav}>
            {TOTAL_SCREENS.map((screen) => {
              return (
                <a key={screen.id} href="#">
                  {screen.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}

      {isMobileView && (
        <>
          <div className={styles.hamburger}>
            <i
              onClick={() => setShowHeaderOptions(true)}
              className="fas fa-bars"
            ></i>
          </div>
          {showHeaderOptions && (
            <div
              className={`flex-center ${styles["full-screen-nav"]} ${
                fadeIn ? styles["fadeIn"] : styles["fadeOut"]
              }`}
            >
              <i
                onClick={() => {
                  setFadeIn(false);
                  setTimeout(() => {
                    setShowHeaderOptions(false);
                    setFadeIn(true);
                  }, 1005);
                }}
                className={`fas fa-times ${styles["close"]}`}
              ></i>
              <div className={styles["nav-container"]}>
                {TOTAL_SCREENS.map((screen) => {
                  return (
                    <a key={screen.id} href="#">
                      {screen.name}
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
