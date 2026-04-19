"use client";
import React from 'react';
import Image from 'next/image';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import styles from './content_section_two.module.scss';

interface ContentSectionTwoProps {
  title1?: string;
  desc1?: string;
  title2?: string;
  desc2?: string;
  img1?: string;
  img2?: string;
}

const ContentSectionTwo: React.FC<ContentSectionTwoProps> = ({
  title1 = "Your Grades Matter – Pay Someone to Do My Exam",
  desc1 = "We know your grades are crucial when it comes to your future, and our pay someone to do my exam service is here to help you pass even the most challenging exams! With years of experience and the most effective study material, we are here to help our clients in mastering even the toughest exams hands down. Our experts guarantee accuracy, trustworthiness, and 100% confidentiality on all our pay someone to take my exam services. Prep to finish, all we do is make the process easy and stress-free for you. With our reliable assistance, you can take on all your school work without the anxiety.",
  title2 = "Take My Exam for Me by Skilled Professionals",
  desc2 = "When exams feel too much to handle, hire someone to take my exam so that you can count on our expert to take over. And with the knowledge that spans a broad spectrum of topics, learning and taking exams are now so much easier and stress-free. Whether it’s time issues, complex questions, or just needing moral support along the way, our experts make sure that you’re not doing this alone! Every service is reliable, confidential, and secure, allowing you to get results without added stress. We offer 24/7 support so you can get prepared for the exams with comfort. Our tutors are dedicated to providing top-quality services to help you achieve your desired grades with ease. Our aim is not to make exams too stressful and intimidating for students. We customize your exam needs and offer personalized care.",
  img1 = "/content_two_1.png",
  img2 = "/sthree.jpg"
}) => {
  return (
    <section className={styles.contentSection}>
      <Container maxWidth="lg">
        <div className={styles.gridContainer}>
          
          <div className={styles.textContent}>
            {/* Item: Text 1 */}
            <motion.div 
              className={`${styles.gridItem} ${styles.text1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.textBlock}>
                <h2 className={styles.heading}>{title1}</h2>
                <p className={styles.description}>{desc1}</p>
              </div>
            </motion.div>

            {/* Item: Text 2 */}
            <motion.div 
              className={`${styles.gridItem} ${styles.text2}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={styles.textBlock}>
                <h2 className={styles.heading}>{title2}</h2>
                <p className={styles.description}>{desc2}</p>
              </div>
            </motion.div>
          </div>

          <div className={styles.imageContent}>
            {/* Item: Image 1 */}
            <motion.div 
              className={`${styles.gridItem} ${styles.img1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.imageWrapper}>
                <Image src={img1} alt="Success" width={600} height={400} className={styles.image} />
              </div>
            </motion.div>

            {/* Item: Image 2 */}
            <motion.div 
              className={`${styles.gridItem} ${styles.img2}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className={styles.imageWrapper}>
                <Image src={img2} alt="Study" width={600} height={400} className={styles.image} />
              </div>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ContentSectionTwo;
