import ContactForm from "../../components/ContactForm/ContactForm";
import styles from './Contact.module.scss';

import '../../config/i18n';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <main className={styles.contact}>
        <div className={styles.contactInner}>
            <div className={styles.contactForm}>
                <h2>{t('contactTitle')}</h2>
                <p>{t('contactDescription')}</p>
                <ContactForm />
            </div>
        </div>
    </main>
  );
}

export default Contact;
