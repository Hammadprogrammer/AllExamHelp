"use client";
import React from 'react';
import styles from './service.module.scss';
import { FileText, Handshake, ShieldCheck, Monitor, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText size={40} />,
      title: "Online Exam Preparation",
      description: "Professional help for all kinds of online exams"
    },
    {
      icon: <Handshake size={40} />,
      title: "Test Help",
      description: "Timed tests, quizzes, and homework"
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Proctored Exam Help",
      description: "Secure ways for getting through an online proctored examination"
    },
    {
      icon: <Monitor size={40} />,
      title: "Certification Exam Help",
      description: "Test preparation and certification exam-taking help"
    },
    {
      icon: <Layers size={40} />,
      title: "Tailored Exam Preparation",
      description: "Personalized assistance for tailored academic requirements"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.span 
          className={styles.topTitle}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Services
        </motion.span>
        
        <motion.h2 
          className={styles.mainHeading}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We Offer
        </motion.h2>

        <motion.p 
          className={styles.subTitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At All Exam Help, we offer a variety of customized services, which include:
        </motion.p>

        <motion.div 
          className={styles.cardsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} className={styles.card} variants={itemVariants}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p 
          className={styles.bottomText}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Subject, complexity, length, and even the format are irrelevant – we handle every exam as a pro! 
          We bring you the most advanced technology and tactics in order to ensure you are always prepared.
        </motion.p>
      </div>
    </section>
  );
};

export default ServicesSection;
