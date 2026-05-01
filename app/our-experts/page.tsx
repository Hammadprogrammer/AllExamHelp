import React from 'react';
import type { Metadata } from 'next';
import ExpertHeader from '@/container/our-experts/header/header';
import ServicesOne from '@/container/our-experts/services_one/services_one';
import ExpertsList from '@/container/our-experts/experts_list/experts_list';
import FeaturesGrid from '@/container/our-experts/features_grid/features_grid';
import IntegritySection from '@/container/our-experts/integrity_section/integrity_section';
import TimezoneSection from '@/container/our-experts/timezone_section/timezone_section';
import WhyChooseExperts from '@/container/our-experts/why_choose/why_choose';
import GetStarted from '@/container/our-experts/get_started/get_started';

export const metadata: Metadata = {
  title: 'Our Experts | All Exam – Meet Our Professional Instructors',
  description: 'Meet our team of highly qualified and experienced experts at All Exam. We provide the best online education and academic support to help you succeed.',
};

const Page = () => {
  return (
    <main>
      <ExpertHeader />
      <ServicesOne />
      <ExpertsList />
      {/* <FeaturesGrid />
      <IntegritySection />
      <TimezoneSection />
      <WhyChooseExperts />
      <GetStarted /> */}
    </main>
  );
};

export default Page;
