import React from 'react';
import styles from './Portfolio.module.scss';
import Image from 'next/image';

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Online Exam Help",
      bgColor: "#e8f7f2", // Light green
      btnColor: "#4a4a4a", // Dark grey
      image: "/p1.png", 
      btnText: "Join With Us →"
    },
    {
      title: "Online PMP Exam",
      bgColor: "#edf2ff", // Light blue/purple
      btnColor: "#5cb2e4", // Blue
      image: "/p2.png",
      btnText: "Join With Us →"
    },
    {
      title: "GED Exams",
      bgColor: "#edf2ff", // Light blue
      btnColor: "#5cb2e4", // Blue
      image: "/p2.png",
      btnText: "Join With Us →"
    },
    {
      title: "Proctored Exam Help",
      bgColor: "#e8f7f2", // Light green
      btnColor: "#4a4a4a", // Dark grey
      image: "/p1.png",
      btnText: "Join With Us →"
    }
  ];

  return (
    <section className={styles.portfolioSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.topTitle}>Our</span>
          <h2 className={styles.mainTitle}>Portfolio</h2>
          <p className={styles.subtitle}>For years, we have been helping thousands of students and professionals with:</p>
        </div>

        <div className={styles.grid}>
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className={styles.card} 
              style={{ backgroundColor: item.bgColor }}
            >
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>• {item.title}</h3>
                <button 
                  className={styles.joinBtn}
                  style={{ backgroundColor: item.btnColor }}
                >
                  {item.btnText}
                </button>
              </div>
              <div className={styles.cardImage}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={250} 
                  height={200} 
                  className={styles.img}
                />
              </div>
            </div>
          ))}
        </div>

        <p className={styles.footerText}>
          Our portfolio speaks for itself, with clients from varying academic disciplines who can attest to our ability to excel in even the most challenging of subjects. We have been the game changer for several academic and career stories, right from college freshmen to working professionals.
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
