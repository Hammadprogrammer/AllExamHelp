'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Container } from '@mui/material';
import styles from './counter_section.module.scss';

// ── Types ────────────────────────────────────────────────────────────────────
interface Stat {
  value: number;       // numeric end value
  suffix: string;      // e.g. "%", "+", ""
  label: string;       // e.g. "Success Rate"
}

interface CounterSectionProps {
  badge: string;       // e.g. "Learn About Us"
  heading: string;     // e.g. "Our Success Track Records with Excellence"
  stats: Stat[];
}

// ── Count-up hook ────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 2000, started: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return count;
}

// ── Single animated stat card ─────────────────────────────────────────────────
const StatCard: React.FC<{ stat: Stat; started: boolean; index: number }> = ({
  stat,
  started,
  index,
}) => {
  const count = useCountUp(stat.value, 2000, started);

  return (
    <div
      className={styles.statCard}
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className={styles.statNumber}>
        {count.toLocaleString()}
        <span className={styles.suffix}>{stat.suffix}</span>
      </div>
      <div className={styles.statLabel}>{stat.label}</div>
    </div>
  );
};

// ── Main component ─────────────────────────────────────────────────────────
const CounterSection: React.FC<CounterSectionProps> = ({
  badge,
  heading,
  stats,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.counterSection} ref={sectionRef}>
      <Container maxWidth="lg">
        <div className={styles.flexContainer}>
          {/* Left Column: Badge and Heading */}
          <div className={styles.leftCol}>
            <span className={styles.badge}>{badge}</span>
            <h2 className={styles.heading}>{heading}</h2>
          </div>

          {/* Right Column: Stats Grid */}
          <div className={styles.rightCol}>
            <div className={styles.statsGrid}>
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} started={started} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CounterSection;
