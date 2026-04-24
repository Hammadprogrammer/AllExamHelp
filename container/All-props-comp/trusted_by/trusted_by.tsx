"use client";
import React from 'react';
import { Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import styles from './trusted_by.module.scss';

interface LogoItem {
  src: string;
  alt: string;
}

interface TrustedByProps {
  heading?: string;
  logos?: LogoItem[];
}

const TrustedBy: React.FC<TrustedByProps> = ({
  heading = "Trusted By Top Companies",
  logos = [],
}) => {
  return (
    <motion.section 
      className={styles.trustedSection}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Container maxWidth="lg">
        <div className={styles.trustedWrapper}>
          <div className={styles.headingCol}>
            <h4 className={styles.heading}>{heading}</h4>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.logosCol}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              className={styles.swiperContainer}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                  <div className={styles.logoItem}>
                    <img src={logo.src} alt={logo.alt} loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default TrustedBy;
