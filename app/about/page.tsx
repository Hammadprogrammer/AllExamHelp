import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/container/about-us/header/header';
import FloatingHero from '@/container/about-us/welcome/welcome';
import ContentOne from '@/container/about-us/contentone/contentone';
import Contenttwo from '@/container/about-us/contenttwo/contenttwo';
import Contentthree from '@/container/about-us/contentthree/contentthree';


export const metadata: Metadata = {
  title: 'About Us - All Exam Help a Reliable Support for Online Exams',
  description: 'Looking for reliable online exam services? All Exam Help, your source for discreet online exam help. Hire our service and enjoy a client-first philosophy. Get 50% Discount Today.',
};

const page = () => {
  return (
    <div>
      <Breadcrumb title="About Us" currentPage="About Us" />
      <FloatingHero/>
      <ContentOne/>
      <Contenttwo/>
      <Contentthree/>
    </div>
  );
};

export default page;