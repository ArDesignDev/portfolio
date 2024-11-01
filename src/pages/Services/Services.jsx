import styles from './Services.module.scss';

import { DiWordpress, DiAptana } from "react-icons/di";
import { LiaLaptopCodeSolid, LiaFigma } from "react-icons/lia";

function Services() {
  
  return (
    <main className={styles.services}>
      <div className={styles.list}>
        <div className={`${styles.item} serviceItem`}>
            <div className={styles.icon}><LiaLaptopCodeSolid /></div>
            <h3 className={styles.title}>Front-end development</h3>
            <p>I specialize in HTML, CSS/Sass, JavaScript, and libraries like jQuery and React to build websites that are both visually appealing and highly functional. Whether it's a custom CMS, WordPress, or Magento site, I focus on creating efficient, user-friendly experiences.</p>
        </div>
        <div className={`${styles.item} serviceItem`}>
            <div className={styles.icon}><DiWordpress /></div>
            <h3 className={styles.title}>Wordpress development</h3>
            <p>I develop everything from custom themes to WooCommerce e-commerce solutions, prioritizing user-friendly features, elegant design, and optimized performance to enhance your website's experience.</p>
        </div>
        <div className={`${styles.item} serviceItem`}>
            <div className={styles.icon}><DiAptana /></div>
            <h3 className={styles.title}> Website Support</h3>
            <p>I provide ongoing website support, including updates, troubleshooting, and performance optimization. Whether it's managing content, resolving technical issues, or enhancing site features.</p>
        </div>
        <div className={`${styles.item} serviceItem`}>
            <div className={styles.icon}><LiaFigma /></div>
            <h3 className={styles.title}>Web Design</h3>
            <p>I create web designs using Figma and Photoshop, focusing on delivering clean and user-friendly layouts. </p>
        </div>
      
      </div>
    </main>
  )
}

export default Services