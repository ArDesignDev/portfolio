import ContactForm from "../../components/ContactForm/ContactForm"
import styles from './Contact.module.scss';

function Contact() {
  return (
    <main className={styles.contact}>
        <div className={styles.contactInner}>
            <div className={styles.contactForm}>
                <h2>Contact me</h2>
                <p>Feel free to reach out for any inquiries or collaboration opportunities.</p>
                <ContactForm />
            </div>
        </div>
    </main>
  )
}

export default Contact