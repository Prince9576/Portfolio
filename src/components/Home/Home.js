import React from "react";
import Links from "../Links/Links";
import Navbar from "../Navbar/Navbar";
import Typical from "react-typical";
import styles from "./Home.module.css";
import { getBreakPoint } from "../../utilities/breakpoints";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isMobileView = useMediaQuery({
    query: `(max-width: ${getBreakPoint("mobile")}px)`,
  });
  return (
    <div className={styles["wrapper"]}>
      <Navbar />
      <div className={styles["profile"]}>
        <div className={styles["info-container"]}>
          <div className={styles["info"]}>
            <div className={styles["name"]}>
              Hello, I'm <span className={styles["highlighted"]}>Prince</span>
            </div>
            <div className={styles["role"]}>
              <Typical
                loop={Infinity}
                steps={[
                  "Creative Front End Developer 💻",
                  500,
                  "MEAN Stack 🤝",
                  500,
                  "MERN Stack ❤️",
                  500,
                  "Cross Platform & PWA's 📱",
                  500,
                  "Problem Solving 🤔",
                  500,
                ]}
              />
            </div>
            <div className={styles["description"]}>
              <p>
                Creative Front End Developer offering 2+ Years of experience
                providing high-impact web solutions for diverse industry
                organizations.
              </p>
            </div>
            <div className={styles["action"]}>
              <button className={`btn btn-action ${styles.transparent}`}>
                Hire Me
              </button>
              <a
                href="Prince_Kumar_Frontend_Developer.pdf"
                download="Prince_Resume"
              >
                <button className={`btn btn-action ${styles.orange}`}>
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className={styles["picture-container"]}>
          <div className={`clearfix ${styles["picture"]}`}>
            <img src="Photo.jpg" alt="Profile Picture" />
          </div>
        </div>
      </div>
      <img src="shape-bg.png" alt="Footer" className={styles.footer} />
      <Links />
    </div>
  );
};

export default Home;
