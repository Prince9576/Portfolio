import React, { useEffect } from "react";
import {
  EDUCATION_DATA,
  WORK_EXPERIENCE_DATA,
  SKILLS_DATA,
  PROJECTS_DATA,
} from "../../../utilities/staticData";
import styles from "./ResumeContent.module.css";
import "./custom-swiper.css";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactCardFlip from "react-card-flip";
import { getBreakPoint } from "../../../utilities/breakpoints";
import { useMediaQuery } from "react-responsive";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ResumeContent = ({ selectedTabIndex, firstTimeTabSet }) => {
  const isMobileView = useMediaQuery({
    query: `(max-width: ${getBreakPoint("mobile")}px)`,
  });
  const getSelectedTabID = (index) => {
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
      <div className={styles["resume-content-wrapper"]} id="education">
        <div className={styles.heading}>
          <hr></hr>
          <div className={styles.block}>Education</div>
        </div>
        {EDUCATION_DATA.map((item) => {
          return (
            <div className={styles["education-item"]}>
              <div className={styles["bullet-container"]}>
                <span className={styles.bullet}></span>
              </div>
              <div className={styles.info}>
                <div className={styles.university}>{item.university}</div>
                <div className={styles.degree}>{item.degree}</div>
              </div>
              <div className={styles.date}>
                <div className={`flex-center ${styles.tag}`}>
                  <span>{`${item.startDate.getFullYear()} - ${item.endDate.getFullYear()}`}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles["resume-content-wrapper"]} id="experience">
        <div className={styles.heading}>
          <hr></hr>
          <div className={styles.block}>Work Experience</div>
        </div>
        {WORK_EXPERIENCE_DATA.map((item) => {
          return (
            <div className={styles["education-item"]}>
              <div className={styles["bullet-container"]}>
                <span className={styles.bullet}></span>
              </div>
              <div className={styles.info}>
                <div className={styles.university}>{item.company}</div>
                <div className={styles.degree}>{item.designation}</div>
                <ul className={styles["tasks-wrapper"]}>
                  {item.tasks.map((task) => {
                    return <li className={styles.tasks}>{task}</li>;
                  })}
                </ul>
              </div>
              <div className={styles.date}>
                <div className={`flex-center ${styles.tag}`}>
                  {!item.endDate && (
                    <span>{`${item.startDate.getFullYear()} - ${
                      item.endDate ? item.endDate.getFullYear() : "Present"
                    }`}</span>
                  )}

                  {item.endDate &&
                    item.startDate.getFullYear() ===
                      item.endDate.getFullYear() && (
                      <span>{`${item.startDate.getFullYear()}`}</span>
                    )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles["resume-content-wrapper"]} id="skills">
        <div className={styles.heading}>
          <hr></hr>
          <div className={styles.block}>Skills</div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          slidesPerView={isMobileView ? 1 : 3}
          navigation
          pagination={{ clickable: true }}
        >
          {SKILLS_DATA.map((skill, index) => {
            return (
              <SwiperSlide key={index}>
                <div className={styles["slide-container"]}>
                  <img
                    className={styles["slide-image"]}
                    src={skill.imageSrc}
                    alt={skill.name}
                  />
                  <div className={styles["slide-name"]}>{skill.name}</div>
                  <div className={`${styles["slide-progress"]} flex-center`}>
                    <div
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                      className={styles["bar"]}
                    ></div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={styles["resume-content-wrapper"]} id="projects">
        <div className={styles.heading}>
          <hr></hr>
          <div className={styles.block}>Projects</div>
        </div>
        <div className={styles["projects-wrapper"]}>
          {PROJECTS_DATA.map((project, index) => {
            return <Card project={project} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Card = ({ project }) => {
  const CardStyle = {
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  };
  const isMobileView = useMediaQuery({
    query: `(max-width: ${getBreakPoint("mobile")}px)`,
  });
  isMobileView ? (CardStyle.height = "35rem") : (CardStyle.height = "100%");
  const [isFlipped, setIsFlipped] = React.useState(false);
  const projectInfoClickHandler = () => {
    setIsFlipped((prev) => !prev);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* CARD FRONT */}
      <div style={CardStyle}>
        <MenuBar name={project.name} />
        <div className={styles["body-front"]}>
          <img src={project.imageSrc} alt={project.imageSrc} />
          <div className={`flex-center ${styles["card-overlay"]}`}>
            <button
              onClick={projectInfoClickHandler}
              className="btn generic-square-btn"
            >
              View Info
            </button>
          </div>
        </div>
      </div>

      {/* CARD BACK */}
      <div style={CardStyle}>
        <MenuBar name={project.name} />
        <div className={styles["body-back"]}>
          <div className={styles["back-wrapper"]}>
            <div className={styles["project-desc"]}>{project.description}</div>
            <div className={styles["project-stack-wrapper"]}>
              {project.techStack.map((tech) => {
                return <div className={styles["project-stack"]}>{tech}</div>;
              })}
            </div>
          </div>
          <div className={`flex-center ${styles["card-overlay"]}`}>
            <button
              onClick={projectInfoClickHandler}
              className="btn generic-square-btn"
            >
              View Info
            </button>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
};

const MenuBar = ({ name }) => {
  return (
    <div className={styles.menuBar}>
      <div className={styles.projectName}>{name}</div>
      <i></i>
    </div>
  );
};

export default ResumeContent;
