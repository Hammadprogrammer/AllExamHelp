import React from 'react';
import { Container } from '@mui/material';
import { 
  AutoStories, // For Online Classes
  LaptopMac,   // For Online Examination
  DriveFileRenameOutline // For Online Assessments
} from '@mui/icons-material';
import styles from './service_section.module.scss';

const ServicesSection = () => {
  const services = [
    {
      icon: <AutoStories />,
      title: "Online Classes",
      desc: "We have experts with Ph.D.s who can enroll in online courses on your behalf. Our professionals put in an endless effort to help you stand out in every online degree program."
    },
    {
      icon: <LaptopMac />,
      title: "Online Examination",
      desc: "It is demanding to administer online exams when the semester course is difficult. Fortunately, you can hire a professional to take your online exam to receive higher grades."
    },
    {
      icon: <DriveFileRenameOutline />,
      title: "Online Assessments",
      desc: "You take multiple online tests and quizzes throughout the whole online degree program. We allow you to employ a professional who can accurately administer online tests."
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <Container maxWidth="lg">
        {/* Requirement: Main Heading H2 */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Services We Provide</h2>
        </div>

        <div className={styles.flexWrapper}>
          {services.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <div className={styles.cardInner}>
                
                {/* Background Fill Overlay */}
                <div className={styles.hoverOverlay} />
                
                <div className={styles.cardContent}>
                  {/* Icon with spinning border animation */}
                  <div className={styles.iconContainer}>
                    <div className={styles.spinningBorder}></div>
                    <div className={styles.iconCircle}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Requirement: Icon Box Heading H4 */}
                  <h4 className={styles.cardHeading}>{service.title}</h4>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;