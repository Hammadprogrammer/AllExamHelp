import React from 'react';
import styles from './Commitment.module.scss';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BalanceIcon from '@mui/icons-material/Balance';

const Commitment = () => {
  const commitments = [
    {
      icon: <SecurityIcon sx={{ fontSize: 50 }} />,
      title: "Privacy",
      description: "Your privacy is guaranteed, and your confidentiality is secured"
    },
    {
      icon: <VerifiedIcon sx={{ fontSize: 50 }} />,
      title: "Trust",
      description: "Receive time-honored test help with the best strategy"
    },
    {
      icon: <WorkspacePremiumIcon sx={{ fontSize: 50 }} />,
      title: "Quality",
      description: "Professional academic help from professional experts across all academic fields"
    },
    {
      icon: <BalanceIcon sx={{ fontSize: 50 }} />,
      title: "Integrity",
      description: "Professional help for all kinds of online exams"
    }
  ];

  return (
    <section className={styles.commitmentSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>Commitment to Excellence</h2>
          <h3 className={styles.subTitle}>We are dedicated to:</h3>
        </div>

        <div className={styles.grid}>
          {commitments.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <p className={styles.footerText}>
          Every action we take is done through a quality evaluation check process, and we always make sure it benefits our clients. That has helped us build trust and loyalty among students worldwide.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
