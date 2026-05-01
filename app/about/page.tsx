import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/container/about-us/header/header';
import FloatingHero from '@/container/about-us/welcome/welcome';
import ContentOne from '@/container/about-us/contentone/contentone';
import Contenttwo from '@/container/about-us/contenttwo/contenttwo';
import Contentthree from '@/container/about-us/contentthree/contentthree';
import Commitment from '@/container/about-us/Commitment/Commitment';
import Contentfour from '@/container/about-us/contentfour/contentfour';
import WhyChooseUs from '@/container/about-us/WhyChooseUs/WhyChooseUs';
import Portfolio from '@/container/about-us/Portfolio/Portfolio';
import TrustedByHome from '@/container/home/trusted_by/trusted_by';



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
      <Commitment/>
      <Contentfour/>
      <WhyChooseUs/>
      <Portfolio/>
      <TrustedByHome/>
    </div>
  );
};

export default page;