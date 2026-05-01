import React from 'react';
import { Metadata } from 'next';
import TermsAndConditions from '@/container/term-and-condition/term-and-condition';
import Breadcrumb from '@/container/about-us/header/header';

export const metadata: Metadata = {
  title: 'Terms & Conditions | All Exam – Service Guidelines & User Agreement',
  description: 'Explore All Exam’s Terms & Conditions to understand our service rules, user responsibilities, and policies before using our platform.',
};

const Page = () => {
  return (
    <div>
      <Breadcrumb title="Terms and Conditions" currentPage="Terms and Conditions" />
      <TermsAndConditions />
    </div>
  );
}

export default Page;