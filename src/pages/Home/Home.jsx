import styles from './Home.module.scss';
import heroImage from '../../assets/images/hero-me.jpg'; 

import ButtonLink from '../../components/ButtonLink/ButtonLink';

import { LiaDownloadSolid, LiaLinkedinIn, LiaGlobeAmericasSolid, LiaInstagram } from "react-icons/lia";

function Home() {
  return (
    <main className={styles.home}>
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h3 className={styles.heroTitle}>Web Developer</h3>
                <h2 className={styles.heroSubTitle}>Hello, I'm <span> Aljoša Renčof</span></h2>
                <p>I am a Web Developer with over 10 years of experience, specializing in front-end development and custom WordPress theme development. I am passionate about delivering high-quality solutions and continuously improving my skills to stay updated with the latest trends in web development.</p>

                <div className={styles.heroLinks}>
                    <ButtonLink
                        href="https://webplussolution.com/wp-content/uploads/2024/10/AljosaR-Job-CV.pdf"
                        icon={LiaDownloadSolid}
                        className={styles.heroButton}
                        ariaLabel="My CV"
                        >
                        Download CV
                    </ButtonLink>
                    <ul className={styles.heroIcons}>
                        <li><a href="https://webplussolution.com/" target='_blank' rel="noopener noreferrer" aria-label="Visit my website"><LiaGlobeAmericasSolid /></a></li>
                        <li><a href="https:/www.linkedin.com/in/aljosarencof" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn Profile"><LiaLinkedinIn /></a></li>
                        <li><a href="https://www.instagram.com/aljosarencof/" target='_blank' rel="noopener noreferrer" aria-label="Instagram Profile"><LiaInstagram /></a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.heroImg}>
                <figure className={styles.heroImgWrapper}>
                    <img src={heroImage} alt="hero" />
                </figure>
            </div>
        </div>
       
    </main>
  )
}

export default Home