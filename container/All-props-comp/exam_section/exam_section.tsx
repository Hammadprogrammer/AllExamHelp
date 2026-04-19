"use client";
import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import styles from './exam_section.module.scss';

interface SubjectItem {
  name: string;
  icon: React.ReactNode;
}

interface ExamSectionProps {
  subjects: SubjectItem[];
}

const ExamSection: React.FC<ExamSectionProps> = ({ subjects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToScroll, setItemsToScroll] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setItemsToScroll(1);
      else if (window.innerWidth < 960) setItemsToScroll(3);
      else if (window.innerWidth < 1280) setItemsToScroll(4);
      else setItemsToScroll(5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const extendedSubjects = [...subjects, ...subjects.slice(0, itemsToScroll)];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, itemsToScroll, subjects.length]);

  const nextSlide = () => {
    if (currentIndex >= subjects.length) {
      setCurrentIndex(0);
      setTimeout(() => setCurrentIndex(1), 50);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex <= 0) {
      setCurrentIndex(subjects.length);
      setTimeout(() => setCurrentIndex(subjects.length - 1), 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className={styles.mainWrapper}>
      <section className={styles.main}>
        <Container maxWidth="xl">
          {/* Header section (badge, title, subtitle) yahan se hata diya gaya hai */}
          
          <div className={styles.sliderContainer}>
            <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={prevSlide}>
              <ChevronLeftIcon />
            </button>

            <div className={styles.sliderWrapper}>
              <motion.div 
                className={styles.sliderTrack}
                animate={{ x: `-${currentIndex * (100 / itemsToScroll)}%` }}
                transition={currentIndex === 0 || currentIndex === subjects.length ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
              >
                {extendedSubjects.map((subject, index) => (
                  <div 
                    key={index} 
                    className={styles.cardWrapper}
                    style={{ flex: `0 0 ${100 / itemsToScroll}%` }}
                  >
                    <div className={styles.card}>
                      <div className={styles.iconCircle}>
                        <div className={styles.iconInner}>
                          {subject.icon}
                        </div>
                      </div>
                      <h5 className={styles.subjectName}>{subject.name}</h5>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={nextSlide}>
              <ChevronRightIcon />
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ExamSection;