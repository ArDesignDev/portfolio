import React, { useState, useEffect } from 'react';
import styles from './Resume.module.scss';
import { useTranslation } from 'react-i18next';
import {
  LiaHtml5, LiaSass, LiaJsSquare, LiaReact, LiaPhp, LiaCss3Alt,
  LiaWordpress, LiaFigma, LiaGitAlt, LiaNpm
} from "react-icons/lia";
import { DiPhotoshop, DiJqueryLogo, DiVisualstudio } from "react-icons/di";

function Resume() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState('Experiences');
  const [experiences, setExperiences] = useState([]);

  const experienceList = t('experienceList', { returnObjects: true });

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
          <h2 className={styles.title}>{t('resumeTitle')}</h2>
          <p>{t('resumeDescription')}</p>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={`${styles.navItem} ${activeSection === 'Experiences' ? styles.active : ''}`} onClick={() => setActiveSection('Experiences')}>
                {t('experiences')}
              </li>
              <li className={`${styles.navItem} ${activeSection === 'Skills' ? styles.active : ''}`} onClick={() => setActiveSection('Skills')}>
                {t('skills')}
              </li>
              <li className={`${styles.navItem} ${activeSection === 'Education' ? styles.active : ''}`} onClick={() => setActiveSection('Education')}>
                {t('education')}
              </li>
              <li className={`${styles.navItem} ${activeSection === 'About me' ? styles.active : ''}`} onClick={() => setActiveSection('About me')}>
                {t('aboutMe')}
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.content}>
          {activeSection === 'Experiences' && (
            <div className={styles.contentItem}>
              <h3>{t('myExperiences')}</h3>
              <p>{t('experiencesDescription')}</p>
              <div className={styles.boxList}>
                {experienceList.map((experience, index) => (
                  <div className={styles.boxItem} key={index}>
                    <h4 className={styles.boxSubTitle}>{experience.subtitle}</h4>
                    <h3 className={styles.boxTitle}>{experience.title}</h3>
                    <p className={styles.boxText}>{experience.description}</p>
                    <h5 className={styles.boxBottomTitle}>{experience.company}</h5>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'Skills' && (
            <div className={styles.contentItem}>
              <h3>{t('skills')}</h3>
              <p>{t('skillsDescription')}</p>
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
                <div className={styles.iconitem}><DiPhotoshop /><span className={styles.tooltip}>Photoshop</span></div>
                <div className={styles.iconitem}><LiaGitAlt /><span className={styles.tooltip}>Git</span></div>
                <div className={styles.iconitem}><LiaNpm /><span className={styles.tooltip}>NPM</span></div>
              </div>
            </div>
          )}

          {activeSection === 'Education' && (
            <div className={styles.contentItem}>
              <h3>{t('educationTitle')}</h3>
              <p>{t('educationDescription')}</p>
              <div className={styles.boxList}>
                <div className={styles.boxItem}>
                  <h4 className={styles.boxSubTitle}>{t('education1Year')}</h4>
                  <h3 className={styles.boxTitle}>{t('education1Title')}</h3>
                  <h5 className={styles.boxBottomTitle}>{t('education1Institution')}</h5>
                </div>
                <div className={styles.boxItem}>
                  <h4 className={styles.boxSubTitle}>{t('education2Year')}</h4>
                  <h3 className={styles.boxTitle}>{t('education2Title')}</h3>
                  <h5 className={styles.boxBottomTitle}>{t('education2Institution')}</h5>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'About me' && (
            <div className={styles.contentItem}>
              <h3>{t('aboutMeTitle')}</h3>
              <div className={styles.aboutText}>
                <p>{t('aboutMeText1')}</p>
                <p>{t('aboutMeText2')}</p>
                <p>{t('aboutMeText3')}</p>
                <p>{t('aboutMeText4')}</p>
                <p>{t('aboutMeText5')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Resume;
