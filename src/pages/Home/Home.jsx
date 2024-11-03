import styles from './Home.module.scss';
import heroImage from '../../assets/images/hero-me.jpg';

import ButtonLink from '../../components/ButtonLink/ButtonLink';

import { LiaDownloadSolid, LiaLinkedinIn, LiaGlobeAmericasSolid, LiaInstagram } from "react-icons/lia";

import '../../config/i18n';
import { useTranslation } from 'react-i18next';

function Home() {

  const { t } = useTranslation();

  return (
    <main className={styles.home}>
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <h3 className={styles.heroTitle}>{t('heroTitle')}</h3>
                <h2 className={styles.heroSubTitle} dangerouslySetInnerHTML={{ __html: t('heroSubtitle') }}></h2>
                <p>{t('heroDescription')}</p>

                <div className={styles.heroLinks}>
                    <ButtonLink
                        href="https://webplussolution.com/wp-content/uploads/2024/10/AljosaR-Job-CV.pdf"
                        icon={LiaDownloadSolid}
                        className={styles.heroButton}
                        ariaLabel={t('ariaMyCV')}
                    >
                        {t('downloadCV')}
                    </ButtonLink>
                    <ul className={styles.heroIcons}>
                        <li><a href="https://webplussolution.com/" target='_blank' rel="noopener noreferrer" aria-label={t('ariaWebsite')}><LiaGlobeAmericasSolid /></a></li>
                        <li><a href="https:/www.linkedin.com/in/aljosarencof" target='_blank' rel="noopener noreferrer" aria-label={t('ariaLinkedIn')}><LiaLinkedinIn /></a></li>
                        <li><a href="https://www.instagram.com/aljosarencof/" target='_blank' rel="noopener noreferrer" aria-label={t('ariaInstagram')}><LiaInstagram /></a></li>
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

export default Home;
