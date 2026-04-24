"use client";
import React from 'react';
import CounterSection from '@/container/All-props-comp/counter_section/counter_section';

const CounterSectionHome = () => {
  const statsData = [
    { value: 95, suffix: "%", label: "Success Rate" },
    { value: 10000, suffix: "+", label: "Exams Covered" },
    { value: 4592, suffix: "", label: "Online Tutors" },
  ];

  return (
    <CounterSection 
      badge="Learn About Us"
      heading="Our Success Track Records with Excellence"
      stats={statsData}
    />
  );
};

export default CounterSectionHome;
