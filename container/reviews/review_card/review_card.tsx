"use client";
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import styles from './review_card.module.scss';

interface Review {
  id: number;
  name: string;
  sub: string;
  text: string;
  color: string;
}

const reviews: Review[] = [
  { 
    id: 1, 
    name: "Dr. Aliza Beth", 
    sub: "Nursing & Health Sciences", 
    text: "The expertise provided for my advanced nursing certifications was exceptional. They handled complex clinical case studies and medical terminology with 100% accuracy. If you're struggling with proctored exams, this is the place to be for guaranteed success.", 
    color: "#f39c12" 
  },
  { 
    id: 2, 
    name: "James Wilson", 
    sub: "Advanced Mathematics", 
    text: "Managing MyMathLab and Pearson portals while working a full-time job was impossible until I found ClassBuddy. They don't just provide answers; they ensure the entire portal is managed professionally with guaranteed A grades throughout the semester.", 
    color: "#3498db" 
  },
  { 
    id: 3, 
    name: "Rohit Kumar", 
    sub: "MBA Executive", 
    text: "Their 24/7 availability is a lifesaver for working professionals. I had a last-minute finance submission at midnight, and their subject specialist handled it flawlessly. Highly encrypted and private service that respects student confidentiality.", 
    color: "#e74c3c" 
  },
  { 
    id: 4, 
    name: "Sarah Khan", 
    sub: "Biological Sciences", 
    text: "I was worried about my Biology lab reports and final quizzes. The team was extremely polite and professional, guiding me through the process while ensuring my portal credentials remained completely secure. Their lab analysis is simply top-notch.", 
    color: "#2ecc71" 
  },
  { 
    id: 5, 
    name: "Kevin V.", 
    sub: "Computer Science", 
    text: "The coding assignments and web development projects were delivered way before the deadline. Their technical depth in React and Node.js is impressive for anyone taking CS online classes. They even helped me debug complex logic in my final project.", 
    color: "#9b59b6" 
  },
  { 
    id: 6, 
    name: "Maria Garcia", 
    sub: "World History & Arts", 
    text: "Writing long essays was always my weakness. They provided well-researched, plagiarism-free content for my history portal. The communication was seamless throughout the semester, and the depth of research was truly academic-grade.", 
    color: "#f1c40f" 
  },
  { 
    id: 7, 
    name: "Dr. Robert S.", 
    sub: "Organic Chemistry", 
    text: "Chemistry equations and reaction mechanisms can be a nightmare online. ClassBuddy specialists are clearly subject experts. They managed my entire Chem portal with such precision that I didn't have to worry about a single quiz.", 
    color: "#e67e22" 
  },
  { 
    id: 8, 
    name: "Emily Davis", 
    sub: "Psychology & Ethics", 
    text: "I was struggling with the volume of discussion posts and weekly reflections. The team captured my voice perfectly and delivered thoughtful, high-quality responses that my professor loved. Highly recommended for Social Science majors.", 
    color: "#1abc9c" 
  },
  { 
    id: 9, 
    name: "Michael Chen", 
    sub: "Accounting & Audit", 
    text: "The balance sheets and auditing tasks were perfectly executed. Accounting portals are tricky because one wrong entry ruins everything, but their experts were meticulous. Got an A in one of the toughest courses of my degree.", 
    color: "#2980b9" 
  },
  { 
    id: 10, 
    name: "Sophia Rose", 
    sub: "Pharmacology", 
    text: "Pharmacology requires memorizing thousands of drug interactions. Their assistance with my online exams was a game-changer. They are fast, reliable, and most importantly, they know the subject inside out. Truly a premium service.", 
    color: "#d35400" 
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const Reviewscard = () => {
  const [showAll, setShowAll] = useState(false);
  
  // Pehle 4 reviews dikhane ke liye logic
  const displayedReviews = showAll ? reviews : reviews.slice(0, 4);

  return (
    <section className={styles.wrapper}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <div className={styles.header}>
        <motion.span 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className={styles.tag}
        >
          Success Stories
        </motion.span>
        <h2 className={styles.title}>
          Trusted by <span className={styles.gold}>10,000+</span> Students
        </h2>
        <p className={styles.subtitle}>Our results speak louder than words. Join the elite group of top achievers.</p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.grid}
      >
        <AnimatePresence mode='popLayout'>
          {displayedReviews.map((item) => (
            <motion.div 
              key={item.id} 
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -10 }}
              className={styles.card}
            >
              <div className={styles.quoteIcon}>“</div>
              
              <div className={styles.content}>
                <p className={styles.reviewText}>{item.text}</p>
              </div>
              
              <div className={styles.footer}>
                <div className={styles.info}>
                  <h4 className={styles.name}>{item.name}</h4>
                  <span className={styles.subject}>{item.sub}</span>
                </div>
                <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
              </div>
              
              <div className={styles.accentLine} style={{ backgroundColor: item.color }}></div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className={styles.actionCenter}>
        <button 
          className={styles.viewMoreBtn} 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "View All Success Stories"}
        </button>
      </div>
    </section>
  );
};

export default Reviewscard;