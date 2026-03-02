"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, 
  Collapse, Box, Container, Divider
} from '@mui/material';
import { 
  Menu as MenuIcon, PhoneInTalk, Email, LocationOn, KeyboardArrowDown,
  School, Assignment, Quiz, Computer, Science, BusinessCenter, 
  Functions, HistoryEdu, Gavel, Psychology, People, BarChart, 
  LocalHospital, Biotech, PsychologyAlt, MenuBook, Home as HomeIcon,
  Star as StarIcon, Info as InfoIcon, Close as CloseIcon, ContactSupport,
  AutoStories // Added for a general subject icon
} from '@mui/icons-material';
import styles from './navbar.module.scss';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const services = [
    { name: "Online Class Help", icon: <School /> },
    { name: "Online Exam Help", icon: <Assignment /> },
    { name: "Online Course Help", icon: <MenuBook /> },
    { name: "Online Assignment Help", icon: <HistoryEdu /> },
    { name: "Online Test & Quizzes", icon: <Quiz /> },
    { name: "Online Proctored Exam", icon: <Computer /> }
  ];

  const subjects = [
    { name: "Biology Class", icon: <Biotech /> },
    { name: "Business Class", icon: <BusinessCenter /> },
    { name: "Chemistry Class", icon: <Science /> },
    { name: "Computer Class", icon: <Computer /> },
    { name: "Economics Class", icon: <BarChart /> },
    { name: "Finance Class", icon: <Functions /> },
    { name: "History Class", icon: <HistoryEdu /> },
    { name: "Law Class", icon: <Gavel /> },
    { name: "Math Class", icon: <Functions /> },
    { name: "Nursing Class", icon: <LocalHospital /> },
    { name: "Philosophy Class", icon: <PsychologyAlt /> },
    { name: "Physics Class", icon: <Science /> },
    { name: "Psychology Class", icon: <Psychology /> },
    { name: "Sociology Class", icon: <People /> },
    { name: "Statistics Class", icon: <BarChart /> }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    setOpenDropdown(null); // Close any open dropdown when closing drawer
  };

  const handleDropdown = (name: string) => setOpenDropdown(openDropdown === name ? null : name);

  const isActive = (path: string) => pathname === path;
  const isCategoryActive = (basePath: string) => pathname.startsWith(basePath);

  return (
    <Box className={styles.navbarWrapper}>
      {/* --- TOP BAR --- */}
      <Box className={styles.topBar}>
        <Container maxWidth="lg" className={styles.topContainer}>
          <Box className={styles.contactItem}><PhoneInTalk /> +44 7400 465932</Box>
          <Box className={styles.contactItem}><Email /> info@hireclassbuddy.com</Box>
          <Box className={`${styles.contactItem} ${styles.hideMobile}`}><LocationOn /> 124 City Road, London, United Kingdom, EC1V2NX</Box>
        </Container>
      </Box>

      {/* --- MAIN NAVIGATION --- */}
      <AppBar position="sticky" color="inherit" elevation={1} className={styles.appBar}>
        <Container maxWidth="lg">
          <Toolbar disableGutters className={styles.toolbar}>
            
            {/* LEFT: LOGO */}
            <Box className={styles.logoArea}>
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={140} height={45} priority />
              </Link>
            </Box>

            {/* CENTER: NAV LINKS (Desktop) */}
            <Box className={styles.centerNav}>
              <Link href="/" className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}>
                Home
              </Link>
              
              <Link href="/about-us" className={`${styles.navLink} ${isActive('/about-us/') ? styles.active : ''}`}>
                About Us
              </Link>

              {/* Services Dropdown */}
              <Box className={styles.navItem} onMouseEnter={() => setOpenDropdown('ser')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${isCategoryActive('/services') ? styles.activeText : ''}`}>
                  Services <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <ul className={`${styles.dropdownMenu} ${openDropdown === 'ser' ? styles.show : ''}`}>
                  {services.map((item) => {
                    const href = `/services/${item.name.toLowerCase().replace(/ /g, '-')}`;
                    return (
                      <li key={item.name}>
                        <Link href={href} className={isActive(href) ? styles.dropdownActive : ''}>
                          {item.icon} {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Box>

              {/* Subjects Mega Menu */}
              <Box className={styles.navItem} onMouseEnter={() => setOpenDropdown('sub')} onMouseLeave={() => setOpenDropdown(null)}>
                <span className={`${styles.dropdownLabel} ${isCategoryActive('/subjects') ? styles.activeText : ''}`}>
                  Subjects <KeyboardArrowDown className={styles.arrowIcon} />
                </span>
                <Box className={`${styles.megaMenu} ${openDropdown === 'sub' ? styles.show : ''}`}>
                  <div className={styles.flexGrid}>
                    {subjects.map((sub) => {
                       const href = `/subjects/${sub.name.toLowerCase().replace(/ /g, '-')}`;
                       return (
                        <Link key={sub.name} href={href} className={`${styles.flexItem} ${isActive(href) ? styles.dropdownActive : ''}`}>
                          {sub.icon} {sub.name}
                        </Link>
                      );
                    })}
                  </div>
                </Box>
              </Box>

              <Link href="/reviews" className={`${styles.navLink} ${isActive('/reviews/') ? styles.active : ''}`}>
                Reviews
              </Link>
            </Box>

            {/* RIGHT: CTA & HAMBURGER */}
            <Box className={styles.rightNav}>
              <Link href="/contact-us" className={`${styles.ctaBtn} ${isActive('/contact-us') ? styles.ctaActive : ''}`}>
                Contact Us
              </Link>
              
              <IconButton 
                className={styles.menuButton} 
                onClick={handleDrawerToggle} 
                sx={{ color: '#000', display: { xs: 'flex', lg: 'none' } }}
              >
                <MenuIcon fontSize="large" />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      {/* --- MOBILE DRAWER --- */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box className={styles.drawerBox}>
          <Box className={styles.drawerHeader}>
            <Image src="/logo.png" alt="Logo" width={120} height={40} />
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#000' }}>
              <CloseIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </Box>
          <Divider />
          
          <List className={styles.mobileList}>
            {/* Home Link */}
            <ListItem className={`${styles.mobileListItem} ${isActive('/') ? styles.mobActive : ''}`}>
              <Link href="/" onClick={handleDrawerToggle}><HomeIcon /> Home</Link>
            </ListItem>

            {/* About Link */}
            <ListItem className={`${styles.mobileListItem} ${isActive('/about-us') ? styles.mobActive : ''}`}>
              <Link href="/about-us" onClick={handleDrawerToggle}><InfoIcon /> About Us</Link>
            </ListItem>

            {/* Services Dropdown (Mobile) */}
            <ListItem 
              className={`${styles.mobileListItem} ${isCategoryActive('/services') ? styles.mobActive : ''}`} 
              onClick={() => handleDropdown('ser')}
            >
              <Box className={styles.labelWithIcon}><School /> Services</Box>
              <KeyboardArrowDown sx={{ transform: openDropdown === 'ser' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </ListItem>
            <Collapse in={openDropdown === 'ser'} timeout="auto" unmountOnExit>
              <div className={styles.mobileSubList}>
                {services.map(s => {
                  const href = `/services/${s.name.toLowerCase().replace(/ /g, '-')}`;
                  return (
                    <Link key={s.name} href={href} onClick={handleDrawerToggle} className={isActive(href) ? styles.mobSubActive : ''}>
                      {s.icon} {s.name}
                    </Link>
                  );
                })}
              </div>
            </Collapse>

            {/* --- SUBJECTS DROPDOWN (NEW IN MOBILE) --- */}
            <ListItem 
              className={`${styles.mobileListItem} ${isCategoryActive('/subjects') ? styles.mobActive : ''}`} 
              onClick={() => handleDropdown('sub')}
            >
              <Box className={styles.labelWithIcon}><AutoStories /> Subjects</Box>
              <KeyboardArrowDown sx={{ transform: openDropdown === 'sub' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
            </ListItem>
            <Collapse in={openDropdown === 'sub'} timeout="auto" unmountOnExit>
              <div className={styles.mobileSubList}>
                {subjects.map(sub => {
                  const href = `/subjects/${sub.name.toLowerCase().replace(/ /g, '-')}`;
                  return (
                    <Link key={sub.name} href={href} onClick={handleDrawerToggle} className={isActive(href) ? styles.mobSubActive : ''}>
                      {sub.icon} {sub.name}
                    </Link>
                  );
                })}
              </div>
            </Collapse>

            {/* Reviews Link */}
            <ListItem className={`${styles.mobileListItem} ${isActive('/reviews') ? styles.mobActive : ''}`}>
              <Link href="/reviews" onClick={handleDrawerToggle}><StarIcon /> Reviews</Link>
            </ListItem>

            {/* Mobile Contact Button */}
            <Box sx={{ p: 2, mt: 2 }}>
              <Link href="/contact-us" className={styles.ctaBtnMob} onClick={handleDrawerToggle}>
                <ContactSupport /> Contact Us
              </Link>
            </Box>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;