import React from 'react';
import Link from 'next/link';
import styles from './heder.module.scss';

interface BreadcrumbProps {
  title: string;
  currentPage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title, currentPage }) => {
  return (
    <section className={styles.breadcrumbSection}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.links}>
          <Link href="/">
            Home
          </Link>
          <span>:</span>
          <span className={styles.active}>{currentPage}</span>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;