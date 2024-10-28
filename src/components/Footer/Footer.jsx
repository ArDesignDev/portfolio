import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCopy}>
          <span>&copy;2024 AljošaRenčof</span>
      </div>
      <div className={styles.footerInfo}>
          <span>
            Email: <a href="mailto:arencof@gmail.com" aria-label="Send an email to arencof@gmail.com">arencof@gmail.com</a>
          </span>
      </div>
      
    </footer>
  )
}

export default Footer