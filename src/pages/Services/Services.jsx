import styles from './Services.module.scss';
import { DiWordpress, DiAptana } from "react-icons/di";
import { LiaLaptopCodeSolid, LiaFigma } from "react-icons/lia";
import { useTranslation } from 'react-i18next';

function Services() {
  const { t } = useTranslation();
  const services = t('services', { returnObjects: true });

  return (
    <main className={styles.services}>
      <div className={styles.list}>
        {services.map((service, index) => (
          <div key={index} className={`${styles.item} serviceItem`}>
            <div className={styles.icon}>
              {index === 0 && <LiaLaptopCodeSolid />}
              {index === 1 && <DiWordpress />}
              {index === 2 && <DiAptana />}
              {index === 3 && <LiaFigma />}
            </div>
            <h3 className={styles.title}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Services;
