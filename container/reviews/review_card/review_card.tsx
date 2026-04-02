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
    name: "Jason T.", 
    sub: "Boston University", 
    text: "“I was juggling work and my online classes, and it quickly became overwhelming. Hire Class Buddy really helped me manage everything. Their team was professional, and all my coursework was completed on time. My grades improved significantly.”", 
    color: "#f39c12" 
  },
  { 
    id: 2, 
    name: "Ethan L.", 
    sub: "New York University", 
    text: "“The team helped me catch up when I fell behind in my online class. They completed my assignments on time, attended lectures, and participated in discussions. I was able to finish the course stress-free. Highly recommended!”", 
    color: "#3498db" 
  },
  { 
    id: 3, 
    name: "Mia K.", 
    sub: "University of Texas at Austin", 
    text: "“Amazing support! The entire process became much easier, and the quality of work was excellent. I was worried about missing deadlines, but they handled everything professionally and helped me achieve one of my highest grades.”", 
    color: "#e74c3c" 
  },
  { 
    id: 4, 
    name: "Ava P.", 
    sub: "Ohio State University", 
    text: "“Professional and reliable service. I was extremely nervous about my online exam, so I reached out for help. Their expert guidance made a big difference, and I ended up performing much better than I expected.”", 
    color: "#2ecc71" 
  },
  { 
    id: 5, 
    name: "Lucas H.", 
    sub: "University of Southern California", 
    text: "“Excellent service! The expert was knowledgeable and helped me with my online exam. I was worried because the exam counted heavily toward my final grade, but their support made all the difference. I ended up getting an A.”", 
    color: "#9b59b6" 
  },
  { 
    id: 6, 
    name: "Emma C.", 
    sub: "UIUC", 
    text: "“It was great to have an expert guide me through my online exam preparation. The service was reliable and professional. My exam was completed on time, and the results were better than I expected.”", 
    color: "#f1c40f" 
  },
  { 
    id: 7, 
    name: "Isabella M.", 
    sub: "University of North Carolina", 
    text: "“Amazing experience! I was struggling to manage discussions and projects in my online course. Their expert kept me updated on my progress and helped me complete the course successfully.”", 
    color: "#e67e22" 
  },
  { 
    id: 8, 
    name: "Alex D.", 
    sub: "University of Miami", 
    text: "“Balancing work and studies was not easy, but their team was incredibly supportive. They helped me complete my online course on time, and I performed very well. Very professional and reliable service.”", 
    color: "#1abc9c" 
  },
  { 
    id: 9, 
    name: "Mathew D. K.", 
    sub: "UC Berkeley", 
    text: "“High-quality support! I had trouble keeping track of deadlines and reports in my online coursework. Their team handled everything professionally and ensured every task was submitted on time.”", 
    color: "#2980b9" 
  },
  { 
    id: 10, 
    name: "Mason T.", 
    sub: "University of California", 
    text: "“I had several projects due in the same week, and it was overwhelming. Thanks to this team, everything was completed on time and perfectly formatted. The expert followed all my instructions and delivered excellent work.”", 
    color: "#d35400" 
  },
  { 
    id: 11, 
    name: "Ethan R.", 
    sub: "The Ohio State University", 
    text: "“I found it difficult to keep up with my assignments. Their team handled everything carefully, and I received above-average grades on all submissions. This assignment writer saved me a lot of stress.”", 
    color: "#c0392b" 
  },
  { 
    id: 12, 
    name: "Olivia M.", 
    sub: "University of Michigan", 
    text: "“Excellent experience! Each assignment was well researched and delivered before the deadline. Communication was quick and clear throughout the process. I could focus on studying without worrying about my coursework.”", 
    color: "#8e44ad" 
  },
  { 
    id: 13, 
    name: "Ava P.", 
    sub: "University of Southern California", 
    text: "“At first, I was skeptical, but the quality of work really impressed me. I was struggling with weekly online quizzes, and their help significantly improved my scores. Highly recommended if you want to boost your grades.”", 
    color: "#27ae60" 
  },
  { 
    id: 14, 
    name: "Noah S.", 
    sub: "University of Texas", 
    text: "“I was nervous about my quizzes because they counted for a large portion of my grade. The team was very professional and helped me complete several assessments before the deadlines. I felt supported throughout the process.”", 
    color: "#2980b9" 
  },
  { 
    id: 15, 
    name: "Lucas M.", 
    sub: "University of Illinois Urbana", 
    text: "“Great service! I was overwhelmed with multiple exams and didn’t have enough time to prepare. With their help, I scored higher than I expected. The tutors were very helpful and professional.”", 
    color: "#e67e22" 
  },
  { 
    id: 16, 
    name: "James D.", 
    sub: "Penn State University", 
    text: "“I was very nervous about my proctored exam, but their guidance helped me stay calm and focused. Everything was handled professionally and on time. I ended up doing much better than I expected.”", 
    color: "#3498db" 
  },
  { 
    id: 17, 
    name: "Charlotte H.", 
    sub: "UCLA", 
    text: "“This service was extremely reliable. The team handled my proctored exam professionally, and the results were excellent. The entire process was smooth and stress-free.”", 
    color: "#f39c12" 
  },
  { 
    id: 18, 
    name: "Mia S.", 
    sub: "University of Washington", 
    text: "“Very professional and trustworthy service. I felt overwhelmed before my proctored exam, but their expert guidance made everything manageable. I’m very happy with the outcome.”", 
    color: "#2ecc71" 
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
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
  
  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section className={styles.wrapper}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      
      <div className={styles.header}>
        <h2 className={styles.title}>
          Customer <span className={styles.gold}> Reviews</span>
        </h2>
        <p className={styles.subtitle}>At Hire Class Buddy, we take pride in helping students succeed in their online classes, exams, assignments, and quizzes. Here are some real experiences shared by students who trusted our academic assistance services.</p>
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