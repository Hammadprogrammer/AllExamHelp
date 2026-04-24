"use client";
import React from 'react';
import ExamSection from '@/container/All-props-comp/exam_section/exam_section';

// Icons Import
import ScienceIcon from '@mui/icons-material/Science';
import BarChartIcon from '@mui/icons-material/BarChart';
import PublicIcon from '@mui/icons-material/Public';
import BalanceIcon from '@mui/icons-material/Balance';
import BugReportIcon from '@mui/icons-material/BugReport';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'; // History ke liye
import PsychologyIcon from '@mui/icons-material/Psychology'; // Psychology ke liye
import FunctionsIcon from '@mui/icons-material/Functions'; // Math ke liye
import PaymentsIcon from '@mui/icons-material/Payments'; // Finance ke liye
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AutoGraphIcon from '@mui/icons-material/AutoGraph'; // Economics/Stats ke liye
import MenuBookIcon from '@mui/icons-material/MenuBook';

const ExamSectionHome = () => {
  const subjectsData = [
    // Image 1 se subjects
    { name: "History Exam", icon: <HistoryEduIcon /> },
    { name: "Philosophy Exam", icon: <MenuBookIcon /> },
    { name: "Nursing Exam", icon: <LocalHospitalIcon /> },
    { name: "Math Exam", icon: <FunctionsIcon /> },
    { name: "Physics Exam", icon: <ScienceIcon /> },

    // Image 2 se subjects
    { name: "Finance Exam", icon: <PaymentsIcon /> },
    { name: "Statistics Exam", icon: <BarChartIcon /> },
    { name: "Biology Exam", icon: <BugReportIcon /> },
    { name: "Chemistry Exam", icon: <ScienceIcon /> },
    { name: "Economics Exam", icon: <AutoGraphIcon /> },

    // Image 3 se subjects
    { name: "Sociology Exam", icon: <PublicIcon /> },
    { name: "Law Exam", icon: <BalanceIcon /> },
    { name: "Business Exam", icon: <BusinessCenterIcon /> },
    { name: "Computer Exam", icon: <ComputerIcon /> },
    { name: "Psychology Exam", icon: <PsychologyIcon /> },
  ];

  return (
    <ExamSection 
      // badge="Top Rated Services"
      // title="Our Featured Online Exams"
      // subtitle="Expert assistance for all major competitive and academic examinations."
      subjects={subjectsData}
    />
  );
};

export default ExamSectionHome;