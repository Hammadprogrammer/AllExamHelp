import React from 'react';
import styles from './about-us.module.scss';
import Link from 'next/link';

const AboutUs: React.FC = () => {
  const services = [
    { title: "Online Class Help", text: "Let our professionals assist you with assignments, lectures, and class discussions. Just request us if you are looking to pay someone to do my online class." },
    { title: "Online Exam Help", text: "Online exams require accuracy, preparation, and confidence. We light your way with a wealth of experience from which you learn to get it right and have confidence in doing so." },
    { title: "Online Course Help", text: "Struggling to get through an entire online course? We help you pass this semester, covering coursework, research reports, project submissions and discussion posts." },
    { title: "Online Assignment Help", text: "Our expert writers prepare 100% original, research-based assignments. We always follow your recommendations, plus all deadlines and deliver you plagiarism-free content." },
    { title: "Online Test & Quizzes", text: "We provide professional support for online tests and quizzes to help you achieve better grades. We offer accuracy, on-time service and help in a range of subject areas." },
    { title: "Online Proctored Exam", text: "Get professional guidance for proctored exams. Our support to students with preparation and performance without compromising ethical conduct." }
  ];

  const whyChoose = [
    { title: "Expert Academic Writers:", desc: "Well, we have a team of qualified experts in multiple subjects and disciplines, so every task assigned to us will be done on the topic by someone who actually knows it." },
    { title: "Written by a Human:", desc: "All content is written by real human experts. Everything in the course, question papers and endeavors are composed by an expert author." },
    { title: "Secure and Confidential: ", desc: "We are dedicated to your privacy and the security of your information. It is important to know that your communications and your submissions, as well as payment systems, are secure and encrypted." },
    { title: "15000+ Students Trust Us:", desc: "We help students in the USA with improved grades. They say that we are dependable and professional." },
    { title: "On-Time Delivery", desc: "We never miss a deadline. No matter how tight the time, we get all things done on time without compromising quality." }
  ];

  return (
    <div className={styles.aboutSection}>
      <header className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Welcome to <span>Hire Class Buddy</span></h1>
          <p>Your trusted partner for Online Class Help, Assignments, and Exams in the USA.</p>
        </div>
      </header>

      <div className={styles.container}>
        <section className={styles.introBox}>
          <p>
            At Hire Class Buddy, we understand that many students face academic stress. For those attending online classes and completing assessments, exams, and quizzes is not always easy. Our goal is to provide reliable academic assistance to students across the USA, so that they can have all the success in their online education experience happily & cheerfully.
          </p>
        </section>

        {/* Services Section */}
        <section>
          <h2 className={styles.sectionHeading}>Our Top-Notch Services</h2>
          <p className={styles.serviceSubtext}>
            We offer all kinds of services that help with every aspect of a student’s academic life:
          </p>
          <div className={styles.servicesGrid}>
            {services.map((item, idx) => (
              <div key={idx} className={styles.serviceCard}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Story */}
        <section className={styles.introBox}>
          <h2 className={styles.sectionHeading}>Our Success Story</h2>
          <p>
            At Hire Class Buddy, we try to make students' lives easier in the USA. Since our beginning, we have helped thousands of students each year. Because every paper we wrote, every exam we helped pass, every course we managed was a commitment to students succeeding. Trust, professionalism, and delivery of the same & consistent results are the pillars of our success story. Students select us because they understand that we each have their success at the forefront of our minds and provide personalized, devoted support in all areas of online education.          </p>
        </section>

        {/* Excellence Section */}
        <section className={styles.excellenceSection}>
          <h2 className={styles.sectionHeading}>We Are Committed to Excellence</h2>
          <p>
            Excellence is central to everything we do. Our motto is “Commitment to Excellence” shows that we just offer you the best quality, 100% human-written academic assistance. You have to admit that we are no pushovers when it comes to accuracy, originality and timeliness being delivered in assignments, online classes, quizzes, tests and proctored examinations. It is our aim to keep the professional and academic integrity, which helps students achieve their educational goals.
          </p>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className={styles.sectionHeading}>Why Choose Hire Class Buddy?</h2>
          <div className={styles.whyGrid}>
            {whyChoose.map((item, idx) => (
              <div key={idx} className={styles.whyCard}>
                <h4><strong>{item.title}</strong></h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <footer className={styles.ctaBox}>
          <h2 className={styles.sectionHeading}>Our Promise to You!</h2>
          <p>At Hire Class Buddy, we are providing a partnership to the students to ensure their success rather than just providing our services. We are not only getting work done, but we are instilling confidence, expanding knowledge and supporting students in reaching their potential. Whether you are having difficulty in a challenging class, a speedy due date or an intense exam, we have all your academic roadblocks covered for success.</p>
        <br />
          <p>Get Started Today Join thousands of satisfied students who trust Hire Class Buddy who entrusted Hire Class Buddy with their academic needs. We are here to be your fruitful partner who ensures nothing stops you from succeeding.</p>
          <Link href="/contact-us"><button className={styles.ctaBtn}>Contact Our Experts Now</button></Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutUs;