import React from 'react';
import Image from 'next/image';
import styles from './content_section_three.module.scss';

const ContentSectionThree = () => {
  return (
    <section className={styles.contentSectionThree}>
      {/* Upper Flex Section */}
      <div className={styles.topFlex}>
        <div className={styles.imageContent}>
          {/* Optimized Next.js Image for SSG */}
          <Image 
            src="/content_three.webp" 
            alt="Countering Challenges"
            width={600} // Image ki original ratio ke hisab se width
            height={400} // Image ki original ratio ke hisab se height
            priority={true} // Above the fold content ke liye priority true
            className={styles.responsiveImg}
          />
        </div>

        <div className={styles.textContent}>
          <h2>Countering the Never-Ending Challenges with Online Class Help Service</h2>
          <p>
           You have been given a mountain of various projects, quizzes, and tasks ever since the start of an online semester. Students who have never taken an online course struggle the most because concentrating and keeping up with lectures is difficult. Additionally, many students struggle to keep up with each lesson because they work and study at the same time. They search for "do my online class" online at this difficult moment.
          </p>
          <button className={styles.ctaBtn}>
            Talk to the expert
          </button>
        </div>
      </div>

      {/* Lower Content Grid */}
      <div className={styles.bottomGrid}>
        <div className={styles.featureItem}>
          <h4>Extensive Course Structures:</h4>
          <p>
            Programs like online MBA class may seem simple, but their subjects can be difficult to keep up with. 
            You must pay close attention in class to perform well on exams, tests, and assignments. 
            With the support of an online tutor, professionals will complete the online course for you.
          </p>
        </div>

        <div className={styles.featureItem}>
          <h4>Digital and Technical Literacy:</h4>
          <p>
            There is a lot of strain on those who just started their semester of online school. 
            We offer you the best and most inexpensive answer during this trying time. 
            Our professionals have a Ph.D. and the necessary level of expertise in relation to online courses.
          </p>
        </div>

        <div className={styles.featureItem}>
          <h4>Barriers to Quick Learning:</h4>
          <p>
            Being able to deal with your teachers is the largest challenge in online education. 
            With the support of our platform's specialists, you may take online classes, 
            learn every subject, and get the results you want without any effort.
          </p>
        </div>

        <div className={styles.featureItem}>
          <h4>Time-Management:</h4>
          <p>
            While conducting online classes, you have to be extremely cautious about managing your time. 
            You can count on our Ph.D.-qualified writers as they take online classes with attentiveness and on time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentSectionThree;