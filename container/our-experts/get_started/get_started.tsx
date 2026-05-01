"use client";
import React from 'react';
import styles from './get_started.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const cards = [
  { 
    title: "Refund Policy", 
    text: "You can get your money back if you are not satisfied with our expert service.", 
    image: "/cfive1.jpg",
    link: "/refund-policy"
  },
  { 
    title: "Get Paid Online Exam Help", 
    text: "Hire professional experts for your online exams and get guaranteed success.", 
    image: "/cfive2.jpg",
    link: "/online-exam-help"
  },
  { 
    title: "Get Free Information", 
    text: "Reach out to our support team to get full details about our expert services.", 
    image: "/contentone.jpg",
    link: "/contact"
  }
];

const GetStarted = () => {
  return (
    <section className={styles.getStartedSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Hurry</span>
          <h2 className={styles.title}>Get Started</h2>
          <p className={styles.subtitle}>Take the first step towards your academic success today.</p>
        </div>

        <div className={styles.grid}>
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image src={card.image} alt={card.title} width={300} height={200} />
              </div>
              <div className={styles.content}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link href={card.link} className={styles.linkBtn}>Learn More</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
