import React from 'react';
import './Slick.scss';
import styles from './Work.module.scss';
import Slider from "react-slick";
import { NextArrow, PrevArrow } from './CustomArrow';
import { LiaArrowRightSolid } from "react-icons/lia";
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import { useTranslation } from 'react-i18next';

function Work() {
  const { t } = useTranslation();
  const projects = t('projects', { returnObjects: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <main className={styles.work}>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <div className={styles.item}>
              <div className={styles.itemText}>
                <h2 className={styles.title}>{project.title}</h2>
                <h3 className={styles.subTitle}>{project.subtitle}</h3>
                <p><strong>{t('projectDescription')}: </strong>{project.description}</p>
                <ul className={styles.itemList}>
                  {project.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
                <ButtonLink
                  href={project.link}
                  icon={LiaArrowRightSolid}
                  className={styles.link}
                  ariaLabel={t('visitWebsite')}
                >
                  {t('visitWebsite')}
                </ButtonLink>
              </div>
              <div className={styles.itemImg}>
                <figure className={styles.imgWrapper}>
                  <img src={project.image} alt={project.title} />
                </figure>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
}

export default Work;
