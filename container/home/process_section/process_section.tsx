import React from 'react';
import { Container } from '@mui/material';
import { 
  AssignmentOutlined, 
  PaymentsOutlined, 
  EmojiEventsOutlined 
} from '@mui/icons-material';
import styles from './process_section.module.scss';

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <AssignmentOutlined />,
      title: "Submit Your Requirements",
      desc: "Reach out to us through live chat, whatsapp, or call. Submit your exam requirements such as format, date, time, guidelines, etc. The more information you share, the better we can customize our approach to meet your needs."
    },
    {
      id: 2,
      icon: <PaymentsOutlined />,
      title: "Make Payments",
      desc: "Once everything is confirmed, proceed to pay someone to take my online exam by making the transaction through the given payment methods. Rest assured that our payment methods are secured and completely transparent."
    },
    {
      id: 3,
      icon: <EmojiEventsOutlined />,
      title: "Enjoy Good Grades",
      desc: "When the big day arrives then our professionals handle everything expertly while ensuring that your decision to hire our expert to take my test for me was the right one. So, enjoy the score which you will achieve through our exam taking service."
    }
  ];

  return (
    <section className={styles.processSection}>
      <Container maxWidth="lg">
        {/* Requirement: Main Heading H3 */}
        <div className={styles.header}>
          <h3 className={styles.mainTitle}>How Can I Hire You to Do My Exam Online For Me?</h3>
          <p className={styles.subTitle}>
            Getting our expert exam-taking services is a simple, quick, and seamless process. 
            Just follow these 3 easy steps to get stress-free success:
          </p>
        </div>

        <div className={styles.flexContainer}>
          {steps.map((step, index) => (
            <div className={styles.stepCard} key={step.id}>
              <div className={styles.iconWrapper}>
                {step.icon}
              </div>
              <div className={styles.content}>
                {/* Requirement: Step Heading H5 */}
                <h5 className={styles.stepTitle}>{step.id}. {step.title}</h5>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {/* Vertical Divider Logic for Desktop */}
              {index < steps.length - 1 && <div className={styles.divider} />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkProcess;