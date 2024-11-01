import React, { useState, useEffect } from 'react';
import styles from './Resume.module.scss';

// iconst
import { LiaHtml5, LiaSass, LiaJsSquare, LiaReact, LiaPhp, LiaCss3Alt, LiaWordpress, LiaFigma, LiaGitAlt, LiaNpm } from "react-icons/lia";
import { DiPhotoshop, DiJqueryLogo, DiVisualstudio } from "react-icons/di";

function Resume() {

  const [activeSection, setActiveSection] = useState('Experiences');

  // Handler to set the active section
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  // import data from json
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetch('/experiences.json')
      .then((response) => response.json())
      .then((data) => setExperiences(data))
      .catch((error) => console.error('Error fetching projects:', error));
  }, []);


  return (
    <main className={styles.resume}>
        <div className={styles.resumeInner}>
          <div className={styles.sidebar}>
              <h2 className={styles.title}>Why work with me?</h2>
              <p>Delivering quality solutions with attention to detail.</p>

              <nav className={styles.nav}>
                <ul className={styles.navList}>
                <li
                    className={`${styles.navItem} ${activeSection === 'Experiences' ? styles.active : ''}`}
                    onClick={() => handleNavClick('Experiences')}
                  >
                    Experiences
                  </li>
                  <li
                    className={`${styles.navItem} ${activeSection === 'Skills' ? styles.active : ''}`}
                    onClick={() => handleNavClick('Skills')}
                  >
                    Skills
                  </li>
                  <li
                    className={`${styles.navItem} ${activeSection === 'Education' ? styles.active : ''}`}
                    onClick={() => handleNavClick('Education')}
                  >
                    Education
                  </li>
                  <li
                    className={`${styles.navItem} ${activeSection === 'About me' ? styles.active : ''}`}
                    onClick={() => handleNavClick('About me')}
                  >
                    About me
                  </li>
                </ul>
              </nav>

          </div>

          <div className={styles.content}>
            {activeSection === 'Experiences' && (
              <div className={styles.contentItem}>
                <h3>My Experiences</h3>
                <p>I’ve gained diverse web development expertise, from front-end development to custom WordPress solutions. Here’s a look at my career journey and the skills I’ve honed along the way.</p>
                <div className={styles.boxList}>

                  {experiences.map((experience, index) => (
                        <div className={styles.boxItem} key={index}>
                            <h4 className={styles.boxSubTitle}>{experience.subtitle}</h4>
                            <h3 className={styles.boxTitle}>{experience.title}</h3>
                            <p className={styles.boxText}>{experience.description} </p>
                            <h5 className={styles.boxBottomTitle}>{experience.company}</h5>
                        </div>
                  ))}

                </div>
              </div>
            )}

            {activeSection === 'Skills' && (
              <div className={styles.contentItem}>
                <h3>Skills</h3>
                <p>Combining technical skills and practical experience, I bring a well-rounded approach to web development. Here are some of the key technologies and tools I work with:</p>
                <div className={styles.iconList}>
                  <div className={styles.iconitem}><LiaHtml5 /><span className={styles.tooltip}>HTML5</span></div>
                  <div className={styles.iconitem}><LiaCss3Alt /><span className={styles.tooltip}>CSS3</span></div>
                  <div className={styles.iconitem}><LiaSass /><span className={styles.tooltip}>SASS</span></div>
                  <div className={styles.iconitem}><LiaJsSquare /> <span className={styles.tooltip}>JavaScript</span></div>
                  <div className={styles.iconitem}><DiJqueryLogo /> <span className={styles.tooltip}>jQuery</span></div>
                  <div className={styles.iconitem}><LiaReact /><span className={styles.tooltip}>React</span></div>
                  <div className={styles.iconitem}><LiaPhp /><span className={styles.tooltip}>PHP</span></div>
                  <div className={styles.iconitem}><LiaWordpress /><span className={styles.tooltip}>Wordpress</span></div>
                  <div className={styles.iconitem}><DiVisualstudio /><span className={styles.tooltip}>Visual Studio</span></div>
                  <div className={styles.iconitem}><LiaFigma /><span className={styles.tooltip}>Figma</span></div>
                  <div className={styles.iconitem}><DiPhotoshop /><span className={styles.tooltip}>Photopshop</span></div>
                  <div className={styles.iconitem}><LiaGitAlt /><span className={styles.tooltip}>Git</span></div>
                  <div className={styles.iconitem}><LiaNpm /><span className={styles.tooltip}>NPM</span></div>
                </div>
              </div>
            )}

            {activeSection === 'Education' && (
              <div className={styles.contentItem}>
                <h3>Education</h3>
                <p> Brief overview of my official educational background.</p>
                <div className={styles.boxList}>

                  <div className={styles.boxItem}>
                      <h4 className={styles.boxSubTitle}>2015</h4>
                      <h3 className={styles.boxTitle}>University Graduate Engineer of Logistics</h3>
                      <h5 className={styles.boxBottomTitle}>Faculty of Logistics</h5>
                  </div>

                  <div className={styles.boxItem}>
                      <h4 className={styles.boxSubTitle}>2008</h4>
                      <h3 className={styles.boxTitle}>High school graduate with a general matura diploma</h3>
                      <h5 className={styles.boxBottomTitle}>Gymnasium Litija</h5>
                  </div>

                </div>
              </div>
            )}

            {activeSection === 'About me' && (
              <div className={styles.contentItem}>
                <h3>About me</h3>
                <div className={styles.aboutText}>
                  <p>I am a web developer with over 10 years of experience, passionate about creating visually stunning and intuitive websites. With a strong background in HTML, CSS, JavaScript, and various web development frameworks, I transform complex design ideas into fully functional and responsive websites. I stay updated with the latest web development trends and technologies to craft cutting-edge solutions that provide the best user experience. </p>
                  <p>I spent 6 years as a front-end web developer at Studio Moderna and 2 years in a marketing agency Bold as a full stack web developer. Now, I focus on freelancing, taking on new and interesting projects.</p>
                  <p>In addition to my technical skills, I have a keen eye for design and a deep understanding of user experience principles. This enables me to create websites that are both functional and aesthetically pleasing. I take pride in my attention to detail and my ability to craft seamless and engaging digital experiences. Whether it’s a simple landing page or a complex e-commerce platform, I approach each project with dedication and enthusiasm.</p>
                  <p>Collaboration is integral to my development process. I work closely with clients to understand their unique needs and goals, ensuring the final product is tailored to their specific requirements and exceeds their expectations. I value feedback and strive to create websites that reflect the client’s vision while incorporating best practices in web design and development.</p>
                  <p>I look forward to working with you to bring your digital projects to life and create a website that not only meets but exceeds your expectations.</p>
                </div>
              </div>
            )}
          </div>
        </div>
    </main>
  )
}

export default Resume