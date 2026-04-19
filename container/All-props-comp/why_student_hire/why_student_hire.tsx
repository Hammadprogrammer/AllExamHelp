"use client";
import React from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import HandshakeIcon from '@mui/icons-material/Handshake';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import StarsIcon from '@mui/icons-material/Stars';
import styles from './why_student_hire.module.scss';


interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface WhyStudentHireProps {
  heading?: string;
  subHeading?: string;
  featuresLeft?: Feature[];
  featuresRight?: Feature[];
  centerImage?: string;
}

const WhyStudentHire: React.FC<WhyStudentHireProps> = ({
  heading = "Why Students Hire Our Fast, Simple, and Secure Take My Exam Assistance",
  subHeading = "We make taking exams easy, effortless, and safe with the help of trusted industry experts. Our team guarantees the most discreet and professional exam assistance, with the best outcomes. With us, you get peace of mind and the grades you've always desired.",
  centerImage = "/stt.png",
  featuresLeft = [
    {
      icon: <HandshakeIcon />,
      title: "Instant Help",
      desc: "Receive instant assistance whenever you are stuck with your studies and exams, with no waiting."
    },
    {
      icon: <BeachAccessIcon />,
      title: "Simple Procedure",
      desc: "We make it EASY for you to get in touch with our professionals and place your order."
    },
    {
      icon: <LockIcon />,
      title: "Safe & Secure",
      desc: "Your privacy is our top priority, and we're committed to maintaining it and offering a secure experience."
    }
  ],
  featuresRight = [
    {
      icon: <CheckCircleOutlineIcon />,
      title: "Expert Tutors",
      desc: "We have qualified PhD tutors. No matter which online exam you are taking, we have got you covered."
    },
    {
      icon: <AccountBalanceWalletIcon />,
      title: "Worry-Free Exam Taking",
      desc: "Experience a smooth, hassle-free experience so you can focus on your other tasks."
    },
    {
      icon: <StarsIcon />,
      title: "Top Results",
      desc: "We offer nothing but the best; the record of our services and the satisfaction of students speak for themselves."
    }
  ]

}) => {
  return (
    <section className={styles.whySection}>
      <Container maxWidth="lg">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subHeading}>{subHeading}</p>
        </motion.div>

        <div className={styles.contentGrid}>
          {/* Left Column */}
          <div className={styles.sideCol}>
            {featuresLeft.map((item, i) => (
              <motion.div 
                key={i} 
                className={styles.featureItem}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >

                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.textWrapper}>
                  <h4 className={styles.featureTitle}>{item.title}</h4>
                  <p className={styles.featureDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div 
            className={styles.centerCol}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src={centerImage} 
                alt="Students Illustration" 
                width={500} 
                height={400} 
                className={styles.mainImg}
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <div className={styles.sideCol}>
            {featuresRight.map((item, i) => (
              <motion.div 
                key={i} 
                className={styles.featureItem}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >

                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.textWrapper}>
                  <h4 className={styles.featureTitle}>{item.title}</h4>
                  <p className={styles.featureDesc}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyStudentHire;
