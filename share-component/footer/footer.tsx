"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, YouTube, Pinterest, Instagram } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const subjects = [
    { name: "Biology Exam", url: "/subjects/biology-exam/" },
    { name: "Business Exam", url: "/subjects/business-exam/" },
    { name: "Chemistry Exam", url: "/subjects/chemistry-exam/" },
    { name: "Computer Exam", url: "/subjects/computer-exam/" },
    { name: "Economics Exam", url: "/subjects/economics-exam/" },
    { name: "Finance Exam", url: "/subjects/finance-exam/" },
    { name: "History Exam", url: "/subjects/history-exam/" },
    { name: "Law Exam", url: "/subjects/law-exam/" },
    { name: "Math Exam", url: "/subjects/math-exam/" },
    { name: "Nursing Exam", url: "/subjects/nursing-exam/" },
    { name: "Philosophy Exam", url: "/subjects/philosophy-exam/" },
    { name: "Physics Exam", url: "/subjects/physics-exam/" },
    { name: "Psychology Exam", url: "/subjects/psychology-exam/" },
    { name: "Sociology Exam", url: "/subjects/sociology-exam/" },
    { name: "Statistics Exam", url: "/subjects/statistics-exam/" }
  ];

  const services = [
    { name: "Online Exam Help", url: "/services/online-exam-help/" },
    { name: "Online GED Test", url: "/services/online-ged-test/" },
    { name: "Online GMAT Exam", url: "/services/online-gmat-exam/" },
    { name: "Online GRE Test", url: "/services/online-gre-test/" },
    { name: "Online HESI Exam", url: "/services/online-hesi-exam/" },
    { name: "Online PMP Exam", url: "/services/online-pmp-exam/" },
    { name: "Online PSI Exam", url: "/services/online-psi-exam/" },
    { name: "Online TEAS Test", url: "/services/online-teas-test/" },
    { name: "Online Tests & Quizzes", url: "/services/online-tests-quizzes/" },
    { name: "Proctored Exam Help", url: "/services/proctored-exam-help/" },
    { name: "Assignment Help", url: "/services/assignment-help/" },
    { name: "Real Estate Exam", url: "/services/real-estate-exam/" },
    { name: "Online Class Help", url: "/services/online-class-help/" },
    { name: "Insurance Exam", url: "/services/insurance-exam/" },
    { name: "Online Course Help", url: "/services/online-course-help/" },
    { name: "CompTIA Exams", url: "/services/comptia-exams/" }
  ];

  const resources = [
    { name: "About", url: "/about-us/" },
    { name: "Our Experts", url: "/our-experts/" },
    { name: "Contact Us", url: "/contact-us/" }
  ];

  const terms = [
    { name: "Privacy Policy", url: "/privacy-policy/" },
    { name: "Refund Policy", url: "/refund-policy/" },
    { name: "Terms and Conditions", url: "/terms-and-conditions/" }
  ];

  return (
    <footer className="bg-[#1c202e] text-white py-16">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-10 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6">Subjects</h4>
            <ul className="space-y-4">
              {subjects.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#a0abc0] hover:text-white transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#a0abc0] hover:text-white transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#a0abc0] hover:text-white transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-[17px] font-bold mb-6">Terms</h4>
            <ul className="space-y-4">
              {terms.map((item) => (
                <li key={item.name}>
                  <Link href={item.url} className="text-[#a0abc0] hover:text-white transition-colors text-[14px]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <h4 className="text-2xl font-bold mb-6 tracking-wide">We Accept</h4>
            <div className="inline-block mt-2">
               <Image src="/paymenticon.png" alt="Accepted Payments" width={300} height={90} className="w-full max-w-[280px]" />
            </div>
          </div>
        </div>

        <div className="border-t border-[#313a4e] pt-10 mt-10 flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:w-3/5">
            <h4 className="text-[#8494b3] font-bold mb-4 tracking-wide text-sm">Disclaimer</h4>
            <p className="text-[#8494b3] text-[13px] leading-relaxed mb-10">
              All Exam Help supports the learning process that online education should offer. We are not here to share or support cheating of any kind. Services are to be used for study help and tutoring purposes only. Our users are the ones who are meant to obey the policy of their institution and use our resources in an ethical (and legal) manner.
            </p>
            <p className="text-[#8494b3] text-[13px]">
              © {currentYear} AllExamHelp. All Rights Reserved.
            </p>
          </div>
          
          <div className="lg:w-1/4">
            <h4 className="text-white font-bold mb-5 text-xl tracking-wide">Follow Us</h4>
            <div className="flex gap-4">
              <Link href="#" className="text-white hover:text-[#a0abc0] transition-colors"><Facebook fontSize="medium" /></Link>
              <Link href="#" className="text-white hover:text-[#a0abc0] transition-colors"><YouTube fontSize="medium" /></Link>
              <Link href="#" className="text-white hover:text-[#a0abc0] transition-colors"><Pinterest fontSize="medium" /></Link>
              <Link href="#" className="text-white hover:text-[#a0abc0] transition-colors"><Instagram fontSize="medium" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;