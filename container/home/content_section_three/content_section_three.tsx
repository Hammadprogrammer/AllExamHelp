import React from 'react';
import Image from 'next/image';
import styles from './content_section_three.module.scss';
import Link from 'next/link';

const ContentSectionThree = () => {
  return (
    <div  className={styles.main}>
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
          <h2>Looking for “Pay Someone to Take My Online Class”?</h2>
          <p>
            Are you seeking “hire someone to take my class”? It means you’re watching sunsets, juggling responsibilities, or just need a break. That’s where Hire Exam Buddy steps in. Our experts have ample knowledge and experience that enables you to excel in your assignment, quiz, exam, and course. So, for students looking for reliable people to help them who will not compromise academic standards. We are affordable and professional for all types of online classes.            </p>
          <Link href="/contact-us" className={styles.ctaBtn}>
            Talk to the expert
          </Link>
        </div>
      </div>

      {/* Lower Content Grid */}
      <div className={styles.bottomGrid}>
        <div className={styles.featureItem}>
          <h4>100% Confidentiality & Privacy</h4>
          <p>
            We take your privacy very seriously. All of your information is 100% confidential through strict data protection policies that we follow on our platform. We ensure that our service is safe and reliable, and students around the world entrust us with their classes, exams, coursework, etc. 
          </p>
        </div>

        <div className={styles.featureItem}>
          <h4>Affordable & Flexible Pricing</h4>
          <p>
            We offer exclusive discounts and special offers to clients who give us full courses or multiple tasks. We are also introducing an installment payment option for the users who are regular clients. We aim to provide high-quality academic writing help at the best rates possible without compromising on quality.
          </p>
        </div>

        <div className={styles.featureItem}>
          <h4>100% Plagiarism-Free Work</h4>
          <p>
            Our services uphold the values of originality and academic integrity. Every single piece of work prepared by our specialized team of experts is absolutely 100% original in order to fulfill academic needs. All assignments go through trusted plagiarism detection tools like Turnitin before submission to ensure authenticity.
          </p>
        </div>

        <div className={styles.featureItem}>
          <h4>On-Time Delivery Guarantee</h4>
          <p>
            We adhere to strict deadlines. Be it any assignment, quiz, or coursework, we will never let it go after the deadline. We use an advanced deadline tracking system for each task to ensure that you get your work back as promised and on time!
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContentSectionThree;