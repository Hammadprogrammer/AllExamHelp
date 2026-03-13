import React from 'react';
import { Container } from '@mui/material';
import { 
  DescriptionOutlined, 
  ShoppingCartCheckoutOutlined, 
  TaskAltOutlined
} from '@mui/icons-material';
import styles from './process_section.module.scss';

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      icon: <DescriptionOutlined />,
      title: "Submit Your Requirements",
      desc: "You can reach us through live chat, WhatsApp, email, or phone call. Simply share your class or exam requirements, including the format, deadline, and any guidelines for the exam. The more information you provide, the better we can tailor our strategy to meet your needs."
    },
    {
      id: 2,
      icon: <ShoppingCartCheckoutOutlined />,
      title: "Confirm Your Order",
      desc: "Our tutors will draw up an individual plan and price depending on how complex and urgent the task is. Fill out the form, confirm your order with a secure payment, and we can assign your class to an expert to complete it."
    },
    {
      id: 3,
      icon: <TaskAltOutlined />,
      title: "Work Completion & Delivery",
      desc: "After confirmation, we start working on your task and take note of all the requirements and deadlines. You will get timely progression updates about the process. In case of any convenience, our team is there to help."
    }
  ];

  return (
    <section className={styles.processSection}>
      <Container maxWidth="lg">
        {/* Requirement: Main Heading H3 */}
        <div className={styles.header}>
          <h3 className={styles.mainTitle}>Take My Online Class Success Just 3 Steps Away! </h3>
          <p className={styles.subTitle}>
            This is a very easy, fast, and smooth process to get our top-notch class-taking service. To achieve success without major stress, do these 3 simple things: 
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