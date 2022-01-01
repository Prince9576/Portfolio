import React from "react";
import { TESTIMONIALS_DATA } from "../../utilities/staticData";
import Header from "../Header/Header";
import styles from "./Testimonials.module.css";
import "./custom-swiper.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import { getBreakPoint } from "../../utilities/breakpoints";

const Testimonials = () => {
  const isMobileView = useMediaQuery({
    query: `(max-width: ${getBreakPoint("mobile")}px)`,
  });
  return (
    <div className={styles.container}>
      <Header
        heading="Testimonial"
        subheading="What my colleagues say about me?"
      />
      <div className={styles.background}>
        <div className={`${styles["testimonial-wrapper"]}`}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            loop={true}
            centeredSlides={true}
            slidesPerView={isMobileView ? 1 : 3}
            navigation
            pagination={true}
          >
            {TESTIMONIALS_DATA.map((testimonial, index) => {
              return (
                <SwiperSlide key={index}>
                  <Testimonial testimonial={testimonial} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <img src="shape-bg.png" alt="Footer" className={styles.footer} />
      </div>
    </div>
  );
};

const Testimonial = ({ testimonial }) => {
  return (
    <div className={styles.card}>
      <div className={styles.description}>
        <span className={styles.quote}>
          <i className="fas fa-quote-left"></i>
        </span>
        {testimonial.opinion}
        <span className={`${styles.quote} ${styles.quoteEnd}`}>
          <i className="fas fa-quote-right"></i>
        </span>
      </div>
      <div className={styles.stars}>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      <div className={styles.profile}>
        <img className={styles.picture} src={testimonial.imageSrc} />
        <div className={styles.info}>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.designaiton}>{testimonial.designation}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
