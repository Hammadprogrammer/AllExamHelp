"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LanguageIcon from '@mui/icons-material/Language';
import styles from './about_team.module.scss';

// ── Types ────────────────────────────────────────────────────────────────────
interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface AboutTeamProps {
  badge?: string;
  heading?: string;
  features?: Feature[];
  statValue?: number;
  statLabel?: string;
  imageSrc?: string;
}

// ── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return count;
}

const AboutTeam: React.FC<AboutTeamProps> = ({
  badge = "About Our Team",
  heading = "Reliable Trusted Experts to Take Exam for Me",
  statValue = 85,
  statLabel = "Satisfied Students and parents",
  imageSrc = "/sthree.jpg",
  features = [
    {
      icon: <AutoStoriesIcon />,
      title: "Experienced Professionals",
      desc: "Qualified professionals with many years of experience & top choice of students."
    },
    {
      icon: <VerifiedUserIcon />,
      title: "Trusted and Reliable",
      desc: "We are the most trusted online exam tutors, gaining confidence in our studies."
    },
    {
      icon: <TrendingUpIcon />,
      title: "Driven to Succeed",
      desc: "Committed to helping you pass all exams with flying colors, forget the anxiety."
    }
  ]
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);
  const count = useCountUp(statValue, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutTeamSection} ref={sectionRef}>
      <Container maxWidth="lg">
        <div className={styles.gridContainer}>
          
          {/* Left Column: Image and Overlapping Card */}
          <motion.div 
            className={styles.imageCol}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={imageSrc} 
                alt="About Team" 
                width={600}
                height={500}
                className={styles.mainImg}
              />
              
              <motion.div 
                className={styles.statCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className={styles.cardIcons}>
                  <LanguageIcon className={styles.globeIcon} />
                </div>
                <div 
                  className={styles.progressCircle}
                  style={{ 
                    background: `conic-gradient(#ffffff ${count * 3.6}deg, rgba(255, 255, 255, 0.2) 0deg)` 
                  }}
                >
                  <div className={styles.innerCircle}>
                    <span className={styles.percentText}>{count}%</span>
                  </div>
                </div>

                <p className={styles.cardText}>{statLabel}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Content and Features */}
          <motion.div 
            className={styles.contentCol}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.badgeWrapper}>
              <span className={styles.badge}>{badge}</span>
              <svg className={styles.wavyUnderline} viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#28a745" strokeWidth="2" fill="none" />
              </svg>
            </div>

            <h2 className={styles.heading}>{heading}</h2>

            <div className={styles.featureList}>
              {features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  className={styles.featureItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                >
                  <div className={styles.iconWrapper}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDesc}>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default AboutTeam;

