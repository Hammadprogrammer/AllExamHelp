import React from 'react';
import { Metadata } from 'next';
import AboutUs from '@/container/about-us/about-us';
import Breadcrumb from '@/container/about-us/header/header';
import FloatingHero from '@/container/about-us/welcome/welcome';

export const metadata: Metadata = {
  title: 'Hire Class Buddy – Online Class Help and Exam Help USA',
  description: 'Get expert online class help, exam help, assignments, quizzes and proctored exam support in the USA. Hire Class Buddy helps students succeed with trusted academic assistance.',
};

const page = () => {
  return (
    <div>
      <Breadcrumb title="About Us" currentPage="About Us" />
      <FloatingHero/>
      {/* <AboutUs /> */}
    </div>
  );
};

export default page;