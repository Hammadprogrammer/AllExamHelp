"use client";
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './our_service.module.scss';

interface ServiceItem {
  title: string;
  description: string;
  image: string;
}

interface OurServiceProps {
  services: ServiceItem[];
  h6: string;
  h4: string;
  description: string;
}

const OurService = ({ services, h6, h4, description }: OurServiceProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToScroll, setItemsToScroll] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setItemsToScroll(1);
      } else if (window.innerWidth < 960) {
        setItemsToScroll(2);
      } else {
        setItemsToScroll(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Clone items for infinite loop
  const extendedServices = [...services, ...services.slice(0, itemsToScroll)];

  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, services.length, itemsToScroll]);

  const nextSlide = () => {
    if (currentIndex >= services.length) {
      // Temporarily disable transition and jump to 0
      setCurrentIndex(0);
      // Then immediately move to 1
      setTimeout(() => setCurrentIndex(1), 50);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(services.length);
      setTimeout(() => setCurrentIndex(services.length - 1), 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <motion.div 
      className={styles.main}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <Container maxWidth="lg">
        <div className={styles.header}>
          <h6 className={styles.h6}>{h6}</h6>
          <div className={styles.h4Wrapper}>
            <h4 className={styles.h4}>{h4}</h4>
            <svg className={styles.wavyLine} viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 C10,10 10,15 20,15 C30,15 30,10 40,10 C50,10 50,15 60,15 C70,15 70,10 80,10 C90,10 90,15 100,15" fill="none" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.sliderContainer}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide}>
            <ChevronLeftIcon />
          </button>

          <div className={styles.sliderWrapper}>
            <motion.div 
              className={styles.sliderTrack}
              animate={{ x: `-${currentIndex * (100 / itemsToScroll)}%` }}
              transition={currentIndex === 0 || currentIndex === services.length ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
            >
              {extendedServices.map((service, index) => (
                <div 
                  key={index} 
                  className={styles.cardWrapper}
                  style={{ flex: `0 0 ${100 / itemsToScroll}%` }}
                >
                  <div className={styles.card}>
                    <div className={styles.imageBox}>
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        className={styles.image}
                        sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                      />
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{service.title}</h3>
                      <p className={styles.cardDescription}>{service.description}</p>
                      <button className={styles.learnMoreBtn}>
                        Learn More <ArrowForwardIcon className={styles.arrowIcon} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide}>
            <ChevronRightIcon />
          </button>
        </div>

        <div className={styles.dots}>
          {services.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.dot} ${(currentIndex % services.length) === index ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </Container>
    </motion.div>

  );
};

export default OurService;
