"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  PhoneInTalk, Chat, ArrowForward, KeyboardArrowDown,
  School, Assignment, Quiz, Computer, Science, BusinessCenter, 
  Functions, HistoryEdu, Gavel, Psychology, People, BarChart, 
  LocalHospital, Biotech, PsychologyAlt, MenuBook, Home as HomeIcon,
  Info as InfoIcon, Close as CloseIcon, Menu as MenuIcon, AutoStories,
  Shield as ShieldIcon, Description
} from '@mui/icons-material';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Footer Services with added Icons to match the "old design" look
  const services = [
    { name: "Online Exam Help", url: "/online-exam-help/", icon: <Assignment /> },
    { name: "Online Course Help", url: "/online-course-help/", icon: <AutoStories /> },
    { name: "Online Class Help", url: "/online-class-help/", icon: <School /> },
    { name: "Assignment Help", url: "/assignment-help/", icon: <HistoryEdu /> },
    { name: "CompTIA Exams", url: "/comptia-exams/", icon: <Computer /> },
    { name: "Insurance Exam", url: "/insurance-exam/", icon: <ShieldIcon /> },
    { name: "Real Estate Exam", url: "/real-estate-exam/", icon: <HomeIcon /> },
    { name: "Online GED Test", url: "/online-ged-test/", icon: <Quiz /> },
    { name: "Online GMAT Exam", url: "/online-gmat-exam/", icon: <Computer /> },
    { name: "Online GRE Test", url: "/online-gre-test/", icon: <MenuBook /> },
    { name: "Online HESI Exam", url: "/online-hesi-exam/", icon: <LocalHospital /> },
    { name: "Online PMP Exam", url: "/online-pmp-exam/", icon: <BusinessCenter /> },
    { name: "Online PSI Exam", url: "/online-psi-exam/", icon: <Description /> },
    { name: "Online TEAS Test", url: "/online-teas-test/", icon: <Biotech /> },
    { name: "Online Tests & Quizzes", url: "/online-tests-quizzes/", icon: <Quiz /> },
    { name: "Proctored Exam Help", url: "/proctored-exam-help/", icon: <Computer /> },
  ];

  // Footer Subjects with added Icons to match the "old design" look
  const subjects = [
    { name: "Biology Exam", url: "/subjects/biology-exam/", icon: <Biotech /> },
    { name: "Business Exam", url: "/subjects/business-exam/", icon: <BusinessCenter /> },
    { name: "Chemistry Exam", url: "/subjects/chemistry-exam/", icon: <Science /> },
    { name: "Computer Exam", url: "/subjects/computer-exam/", icon: <Computer /> },
    { name: "Economics Exam", url: "/subjects/economics-exam/", icon: <BarChart /> },
    { name: "Finance Exam", url: "/subjects/finance-exam/", icon: <Functions /> },
    { name: "History Exam", url: "/subjects/history-exam/", icon: <HistoryEdu /> },
    { name: "Law Exam", url: "/subjects/law-exam/", icon: <Gavel /> },
    { name: "Math Exam", url: "/subjects/math-exam/", icon: <Functions /> },
    { name: "Nursing Exam", url: "/subjects/nursing-exam/", icon: <LocalHospital /> },
    { name: "Philosophy Exam", url: "/subjects/philosophy-exam/", icon: <PsychologyAlt /> },
    { name: "Physics Exam", url: "/subjects/physics-exam/", icon: <Science /> },
    { name: "Psychology Exam", url: "/subjects/psychology-exam/", icon: <Psychology /> },
    { name: "Sociology Exam", url: "/subjects/sociology-exam/", icon: <People /> },
    { name: "Statistics Exam", url: "/subjects/statistics-exam/", icon: <BarChart /> }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpenDropdown(null); 
  };

  const handleDropdown = (name: string) => setOpenDropdown(openDropdown === name ? null : name);

  const isActive = (path: string) => pathname === path;
  const isCategoryActive = (basePath: string) => pathname.startsWith(basePath);

  return (
    <div className={styles.navbarWrapper}>
      <nav className="w-full bg-white border-b border-gray-100 shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center h-[80px]">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" prefetch={false}>
                <Image src="/logo1.png" alt="Logo" width={220} height={50} priority className="w-auto h-12 lg:h-14" />
              </Link>
            </div>

            {/* Desktop Navigation - using OLD design classes */}
            <div className={styles.centerNav}>
              <Link href="/" prefetch={false} className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
                Home
              </Link>

              {/* Services Mega Menu */}
              <div className={styles.navItem} onMouseEnter={() => setOpenDropdown('ser')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${isCategoryActive('/services') ? styles.activeText : ''}`}>
                  Services <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <div className={`${styles.megaMenu} ${openDropdown === 'ser' ? styles.show : ''}`} style={{ minWidth: '980px' }}>
                  <div className="grid grid-cols-4 gap-4">
                    {services.map((item) => {
                      return (
                        <Link key={item.name} href={item.url} prefetch={false} className={`${styles.flexItem} ${isActive(item.url) ? styles.dropdownActive : ''}`} style={{ width: '100%', flex: 'none' }}>
                          {item.icon} {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Subjects Mega Menu */}
              <div className={styles.navItem} onMouseEnter={() => setOpenDropdown('sub')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${isCategoryActive('/subjects') ? styles.activeText : ''}`}>
                  Subjects <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <div className={`${styles.megaMenu} ${openDropdown === 'sub' ? styles.show : ''}`}>
                  <div className={styles.flexGrid}>
                    {subjects.map((sub) => {
                       return (
                        <Link key={sub.name} href={sub.url} prefetch={false} className={`${styles.flexItem} ${isActive(sub.url) ? styles.dropdownActive : ''}`}>
                          {sub.icon} {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Link href="/our-experts/" prefetch={false} className={`${styles.navLink} ${isActive('/our-experts/') ? styles.active : ''}`}>
                Our Experts
              </Link>

              <Link href="/about/" prefetch={false} className={`${styles.navLink} ${isActive('/about-us/') ? styles.active : ''}`}>
                About
              </Link>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="tel:+121234765533" className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2.5 rounded shadow-sm font-semibold text-[14px] hover:opacity-90 transition-opacity">
                <PhoneInTalk fontSize="small" /> Live Call
              </a>
              <button className="flex items-center gap-1.5 bg-[#28a745] text-white px-4 py-2.5 rounded shadow-sm font-semibold text-[14px] hover:bg-[#218838] transition-colors">
                <Chat fontSize="small" /> Live Chat
              </button>
              <Link href="/get-started/" prefetch={false} className="flex items-center gap-1.5 bg-[#63a4ff] text-white px-4 py-2.5 rounded shadow-sm font-semibold text-[14px] hover:bg-[#4d94f7] transition-colors">
                Get Started <ArrowForward fontSize="small" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button onClick={handleDrawerToggle} className="text-gray-800 p-2">
                <MenuIcon fontSize="large" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 lg:hidden ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={handleDrawerToggle}>
        <div className={`fixed inset-y-0 right-0 w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-center p-5 border-b border-gray-100">
            <Image src="/logo1.png" alt="Logo" width={120} height={40} className="w-auto h-8" />
            <button onClick={handleDrawerToggle} className="text-gray-600">
              <CloseIcon />
            </button>
          </div>
          
          <div className="overflow-y-auto h-[calc(100vh-80px)]">
            <ul className={styles.mobileList}>
              <li className={`${styles.mobileListItem} ${isActive('/') ? styles.mobActive : ''}`}>
                <Link href="/" prefetch={false} onClick={handleDrawerToggle}><HomeIcon /> Home</Link>
              </li>

              <li className={`${styles.mobileListItem} ${isCategoryActive('/services') ? styles.mobActive : ''}`} onClick={() => handleDropdown('ser')}>
                <div className={styles.labelWithIcon}><School /> Services</div>
                <KeyboardArrowDown sx={{ color: '#000', transform: openDropdown === 'ser' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </li>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'ser' ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className={styles.mobileSubList}>
                  {services.map(s => {
                    return (
                      <Link key={s.name} href={s.url} prefetch={false} onClick={handleDrawerToggle} className={isActive(s.url) ? styles.mobSubActive : ''}>
                        {s.icon} {s.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <li className={`${styles.mobileListItem} ${isCategoryActive('/subjects') ? styles.mobActive : ''}`} onClick={() => handleDropdown('sub')}>
                <div className={styles.labelWithIcon}><AutoStories /> Subjects</div>
                <KeyboardArrowDown sx={{ color: '#000', transform: openDropdown === 'sub' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </li>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'sub' ? 'max-h-[1000px]' : 'max-h-0'}`}>
                <div className={styles.mobileSubList}>
                  {subjects.map(sub => {
                    return (
                      <Link key={sub.name} href={sub.url} prefetch={false} onClick={handleDrawerToggle} className={isActive(sub.url) ? styles.mobSubActive : ''}>
                        {sub.icon} {sub.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <li className={`${styles.mobileListItem} ${isActive('/our-experts/') ? styles.mobActive : ''}`}>
                <Link href="/our-experts/" prefetch={false} onClick={handleDrawerToggle}><People /> Our Experts</Link>
              </li>

              <li className={`${styles.mobileListItem} ${isActive('/about-us/') ? styles.mobActive : ''}`}>
                <Link href="/about-us/" prefetch={false} onClick={handleDrawerToggle}><InfoIcon /> About</Link>
              </li>
            </ul>

            <div className="p-5 mt-2 space-y-3">
              <a href="+121234765533" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-md font-bold w-full">
                <PhoneInTalk /> Live Call
              </a>
              <button className="flex items-center justify-center gap-2 bg-[#28a745] text-white px-4 py-3 rounded-md font-bold w-full">
                <Chat /> Live Chat
              </button>
              <Link href="/get-started/" onClick={handleDrawerToggle} className="flex items-center justify-center gap-2 bg-[#63a4ff] text-white px-4 py-3 rounded-md font-bold w-full">
                Get Started <ArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;