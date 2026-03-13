import React from 'react';
import { Container } from '@mui/material';
import { 
  TimerOutlined,         
  SchoolOutlined,         
  HistoryEduOutlined
} from '@mui/icons-material';
import styles from './service_section.module.scss';

const ServicesSection = () => {
  const services = [
    {
      icon: <TimerOutlined />,
      title: "Online Exam Help",
      desc: "Our professionals offer reliable take my online exam assistance and ensure your privacy, and you get the highest grades possible. We follow your exam guidelines carefully and ensure accurate solutions are delivered within the exam time frame."
    },
    {
      icon: <SchoolOutlined />,
      title: "Online Class Help",
      desc: "Unable to cope with your online classes? Our skilled tutors can take care of complete online class activities such as classwork, discussions, and weekly tasks to ensure you stay on track throughout the semester."
    },
    {
      icon: <HistoryEduOutlined />,
      title: "Online Assignment Help",
      desc: "We offer customized, well-researched assignments tailored to your requirements and timelines, prepared by subject specialists. We provide plagiarism-free, formatting and timely delivery to get you better grades."
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <Container maxWidth="lg">
        {/* Requirement: Main Heading H2 */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Services We Offer </h2>
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