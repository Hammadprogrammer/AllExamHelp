import React from 'react';
import type { Metadata } from 'next';
import ExpertHeader from '@/container/our-experts/header/header';

export const metadata: Metadata = {
  title: 'Our Experts | All Exam – Meet Our Professional Instructors',
  description: 'Meet our team of highly qualified and experienced experts at All Exam. We provide the best online education and academic support to help you succeed.',
};

const Page = () => {
  return (
    <main>
      <ExpertHeader />
      {/* Other sections like Expert List can be added here later */}
    </main>
  );
};

export default Page;
