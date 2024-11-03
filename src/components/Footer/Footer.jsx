import styles from './Footer.module.scss';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopy}>
          <span>&copy;2024 AljošaRenčof</span>
      </div>
      <div className={styles.footerInfo}>
         <LanguageSwitcher />
      </div>
      
    </footer>
  )
}

export default Footer