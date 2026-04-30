import React from 'react';
import { Metadata } from 'next';
import TermsAndConditions from '@/container/term-and-condition/term-and-condition';

export const metadata: Metadata = {
  title: 'Terms & Conditions | All Exam – Service Guidelines & User Agreement',
  description: 'Explore All Exam’s Terms & Conditions to understand our service rules, user responsibilities, and policies before using our platform.',
};

const Page = () => {
  return (
    <main>
      <TermsAndConditions />
    </main>
  );
}

export default Page;