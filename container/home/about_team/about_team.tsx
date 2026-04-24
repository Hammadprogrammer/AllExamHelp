"use client";
import React from 'react';
import AboutTeam from '@/container/All-props-comp/about_team/about_team';

const AboutTeamHome = () => {
  return (
    <AboutTeam 
      badge="About Our Team"
      heading="Reliable Trusted Experts to Take Exam for Me"
      statValue={85}
      statLabel="Satisfied Students and parents"
      imageSrc="/about.jpg"
    />
  );
};

export default AboutTeamHome;

