import React from 'react';
import type { Metadata } from 'next';
import ExpertHeader from '@/container/our-experts/header/header';
import ServicesOne from '@/container/our-experts/services_one/services_one';
import ExpertsList from '@/container/our-experts/experts_list/experts_list';
import ExpertsExam from '@/container/our-experts/experts-exam/experts-exam';
import IntegritySection from '@/container/our-experts/integrity_section/integrity_section';
import TimezoneSection from '@/container/our-experts/timezone_section/timezone_section';
import WhyChooseExperts from '@/container/our-experts/why_choose/why_choose';
import Portfolio from '@/container/our-experts/Portfolio/Portfolio';

export const metadata: Metadata = {
  title: 'Our Experts – Online Exam Experts – Hire Exam Experts',
  description: 'Hire online exam experts for secure and reliable help. Our online exam experts ensure top results with a client-first approach. Get 50% off today!',
  alternates: {
    canonical: '/our-experts/',
  },
};

const Page = () => {
  return (
    <main>
      <ExpertHeader />
      <ServicesOne />
      <ExpertsList />
      <ExpertsExam/>
      <IntegritySection />
      <TimezoneSection />
      <WhyChooseExperts />
      <Portfolio/>
    </main>
  );
};

export default Page;
