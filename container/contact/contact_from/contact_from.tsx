// "use client";
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import styles from './contact_from.module.scss';

// // MUI Icons
// import ShieldMoonIcon from '@mui/icons-material/ShieldMoon';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const taskOptions = [
//   "Proctored Exam Help",
//   "Nursing Portal Assignment",
//   "Full Class Management",
//   "Dissertation / Essay",
//   "Technical Project / IT"
// ];

// const TrustItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
//   <div className={styles.trustItem}>
//     <div className={styles.iconWrapper}>{icon}</div>
//     <div className={styles.content}>
//       <h6>{title}</h6>
//       <p>{desc}</p>
//     </div>
//   </div>
// );

// const ContactForm = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
  
//   const initialState = {
//     fullName: '',
//     email: '',
//     whatsapp: '',
//     taskType: 'Select Task Type',
//     message: ''
//   };

//   const [formData, setFormData] = useState(initialState);
//   const [errors, setErrors] = useState<Record<string, string | null>>({});

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     if (name === 'whatsapp') {
//       const onlyNums = value.replace(/[^0-9]/g, '');
//       setFormData(prev => ({ ...prev, [name]: onlyNums }));
//     } else {
//       setFormData(prev => ({ ...prev, [name]: value }));
//     }
//     // Type hone par error remove karna
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: null }));
//     }
//   };

//   const validate = () => {
//     let tempErrors: Record<string, string> = {};
    
//     if (!formData.fullName.trim()) tempErrors.fullName = "Name is required";
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email.trim()) {
//         tempErrors.email = "Email is required";
//     } else if (!emailRegex.test(formData.email)) {
//         tempErrors.email = "Please enter a valid email";
//     }

//     if (!formData.whatsapp) {
//       tempErrors.whatsapp = "WhatsApp number is required";
//     } else if (formData.whatsapp.length < 10) {
//       tempErrors.whatsapp = "Minimum 10 digits required";
//     }

//     if (formData.taskType === 'Select Task Type') {
//         tempErrors.taskType = "Please select a task type";
//     }

//     if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

//     setErrors(tempErrors);
//     return Object.keys(tempErrors).length === 0;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       setIsLoading(true);
//       try {
//         const response = await fetch('https://contact-a-pi-one.vercel.app/api/contact', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           setIsSubmitted(true);
//           setFormData(initialState);
//           setTimeout(() => setIsSubmitted(false), 5000);
//         } else {
//           alert("Submission failed. Please try again.");
//         }
//       } catch (err) {
//         console.error("API Error:", err);
//         alert("Server error. Check your connection.");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   return (
//     <section className={styles.formSection}>
//       <div className={styles.container}>
        
//         <motion.div 
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           className={styles.infoSide}
//         >
//           <span className={styles.badge}>✨ TRUSTED BY 10k+ STUDENTS</span>
//           <h2 className={styles.heading}>
//             Contact Our <span className={styles.goldGradient}>Academic Experts</span> For A+ Grades
//           </h2>
//           <p className={styles.subText}>
//             Don't let complex assignments ruin your GPA. Our PhD experts are ready to take over and handle the pressure for you.
//           </p>

//           <div className={styles.trustList}>
//             <TrustItem icon={<ShieldMoonIcon className={styles.muiIcon} />} title="100% Private" desc="Military-grade encryption for your data." />
//             <TrustItem icon={<WorkspacePremiumIcon className={styles.muiIcon} />} title="A+ Guaranteed" desc="Top-tier quality or get your money back." />
//             <TrustItem icon={<SupportAgentIcon className={styles.muiIcon} />} title="Live Support" desc="Real humans available to chat 24/7." />
//           </div>
//         </motion.div>

//         <div className={styles.formWrapper}>
//           <motion.div 
//             className={styles.glassCard}
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//           >
//             <AnimatePresence mode="wait">
//               {!isSubmitted ? (
//                 <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
//                   <div className={styles.formHeader}>
//                     <h3>Get a Free Quote</h3>
//                   </div>

//                   <form className={styles.mainForm} onSubmit={handleSubmit} noValidate>
//                     {/* Full Name */}
//                     <div className={styles.inputGroup}>
//                       <input 
//                         type="text" name="fullName" placeholder="Full Name" 
//                         value={formData.fullName} onChange={handleChange}
//                         autoComplete="off"
//                         className={errors.fullName ? styles.errorInput : ''}
//                       />
//                       {errors.fullName && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.fullName}</span>}
//                     </div>

//                     {/* Email */}
//                     <div className={styles.inputGroup}>
//                       <input 
//                         type="email" name="email" placeholder="Email Address" 
//                         value={formData.email} onChange={handleChange}
//                         autoComplete="off"
//                         className={errors.email ? styles.errorInput : ''}
//                       />
//                       {errors.email && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.email}</span>}
//                     </div>

//                     {/* WhatsApp */}
//                     <div className={styles.inputGroup}>
//                       <input 
//                         type="tel" name="whatsapp" placeholder="WhatsApp Number" 
//                         value={formData.whatsapp} onChange={handleChange}
//                         autoComplete="off"
//                         className={errors.whatsapp ? styles.errorInput : ''}
//                       />
//                       {errors.whatsapp && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.whatsapp}</span>}
//                     </div>

//                     {/* Task Dropdown */}
//                     <div className={styles.dropdownContainer}>
//                       <div 
//                         className={`${styles.customSelect} ${isOpen ? styles.active : ''} ${errors.taskType ? styles.errorInput : ''}`}
//                         onClick={() => setIsOpen(!isOpen)}
//                         style={errors.taskType ? { borderColor: 'red' } : {}}
//                       >
//                         {formData.taskType}
//                         <KeyboardArrowDownIcon className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} />
//                       </div>
//                       {errors.taskType && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.taskType}</span>}
                      
//                       <AnimatePresence>
//                         {isOpen && (
//                           <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={styles.optionsList}>
//                             {taskOptions.map((opt) => (
//                               <div key={opt} className={styles.optionItem} onClick={() => {
//                                 setFormData(prev => ({ ...prev, taskType: opt }));
//                                 setErrors(prev => ({ ...prev, taskType: null }));
//                                 setIsOpen(false);
//                               }}>
//                                 {opt}
//                               </div>
//                             ))}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>

//                     {/* Message */}
//                     <div className={styles.inputGroup}>
//                       <textarea 
//                         name="message" rows={3} placeholder="Tell us about your task & deadline..."
//                         value={formData.message} onChange={handleChange}
//                         autoComplete="off"
//                         className={errors.message ? styles.errorInput : ''}
//                       ></textarea>
//                       {errors.message && <span className={styles.errorText} style={{ color: 'red', fontSize: '12px', marginTop: '4px', display: 'block' }}>{errors.message}</span>}
//                     </div>

//                     <motion.button 
//                         whileHover={!isLoading ? { scale: 1.02 } : {}} 
//                         whileTap={!isLoading ? { scale: 0.98 } : {}} 
//                         type="submit" 
//                         className={styles.submitBtn}
//                         disabled={isLoading}
//                     >
//                       {isLoading ? "Processing..." : "Send Now"} 
//                       {!isLoading && <RocketLaunchIcon style={{ marginLeft: '10px', fontSize: '20px' }} />}
//                     </motion.button>
//                   </form>
//                 </motion.div>
//               ) : (
//                 <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={styles.successMessage}>
//                   <CheckCircleOutlineIcon className={styles.successIcon} />
//                   <h3>Submitted Successfully!</h3>
//                   <p>Our experts will contact you on WhatsApp shortly.</p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );  
// };

// export default ContactForm;

"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './contact_from.module.scss';

// MUI Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const taskOptions = [
  "Proctored Exam Help",
  "Nursing Portal Assignment",
  "Full Class Management",
  "Dissertation / Essay",
  "Technical Project / IT"
];

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const initialState = {
    fullName: '',
    email: '',
    whatsapp: '',
    taskType: 'Select Task Type',
    message: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'whatsapp') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({ ...prev, [name]: onlyNums }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    let tempErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) tempErrors.fullName = "Name is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
        tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Please enter a valid email";
    }
    if (!formData.whatsapp) {
      tempErrors.whatsapp = "WhatsApp number is required";
    } else if (formData.whatsapp.length < 10) {
      tempErrors.whatsapp = "Minimum 10 digits required";
    }
    if (formData.taskType === 'Select Task Type') {
        tempErrors.taskType = "Please select a task type";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      try {
        const response = await fetch('https://contact-a-pi-one.vercel.app/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setFormData(initialState);
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          alert("Submission failed. Please try again.");
        }
      } catch (err) {
        console.error("API Error:", err);
        alert("Server error. Check your connection.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <section className={styles.formSection}>
      <div className={styles.centeredContainer}>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.headerArea}
        >
          <h2 className={styles.heading}>
            Contact Us 
          </h2>
        </motion.div>

        <div className={styles.formWrapper}>
          <motion.div 
            className={styles.glassCard}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {/* Added autoComplete="off" to the main form */}
                  <form className={styles.mainForm} onSubmit={handleSubmit} noValidate autoComplete="off">
                    
                    <div className={styles.inputGroup}>
                      <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Full Name" 
                        value={formData.fullName} 
                        onChange={handleChange}
                        className={errors.fullName ? styles.errorInput : ''}
                        autoComplete="new-password" // Using 'new-password' often bypasses Chrome's aggressive autofill
                      />
                      {errors.fullName && <span className={styles.errorText}>{errors.fullName}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        value={formData.email} 
                        onChange={handleChange}
                        className={errors.email ? styles.errorInput : ''}
                        autoComplete="off"
                      />
                      {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                    </div>

                    <div className={styles.inputGroup}>
                      <input 
                        type="tel" 
                        name="whatsapp" 
                        placeholder="WhatsApp Number" 
                        value={formData.whatsapp} 
                        onChange={handleChange}
                        className={errors.whatsapp ? styles.errorInput : ''}
                        autoComplete="off"
                      />
                      {errors.whatsapp && <span className={styles.errorText}>{errors.whatsapp}</span>}
                    </div>

                    <div className={styles.dropdownContainer}>
                      <div 
                        className={`${styles.customSelect} ${isOpen ? styles.active : ''} ${errors.taskType ? styles.errorInput : ''}`}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        {formData.taskType}
                        <KeyboardArrowDownIcon className={`${styles.arrow} ${isOpen ? styles.rotate : ''}`} />
                      </div>
                      {errors.taskType && <span className={styles.errorText}>{errors.taskType}</span>}
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className={styles.optionsList}>
                            {taskOptions.map((opt) => (
                              <div key={opt} className={styles.optionItem} onClick={() => {
                                setFormData(prev => ({ ...prev, taskType: opt }));
                                setErrors(prev => ({ ...prev, taskType: null }));
                                setIsOpen(false);
                              }}>
                                {opt}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className={styles.inputGroup}>
                      <textarea 
                        name="message" 
                        rows={4} 
                        placeholder="Tell us about your task & deadline..."
                        value={formData.message} 
                        onChange={handleChange}
                        className={errors.message ? styles.errorInput : ''}
                        autoComplete="off"
                      ></textarea>
                      {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                    </div>

                    <motion.button 
                        whileHover={!isLoading ? { scale: 1.02 } : {}} 
                        whileTap={!isLoading ? { scale: 0.98 } : {}} 
                        type="submit" 
                        className={styles.submitBtn}
                        disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Send Now"} 
                      {!isLoading && <RocketLaunchIcon style={{ marginLeft: '10px', fontSize: '20px' }} />}
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className={styles.successMessage}>
                  <CheckCircleOutlineIcon className={styles.successIcon} />
                  <h3>Submitted Successfully!</h3>
                  <p>Our experts will contact you on WhatsApp shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );  
};

export default ContactForm;