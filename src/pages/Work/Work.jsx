import './Slick.scss';
import styles from './Work.module.scss';
import Slider from "react-slick";
import { NextArrow, PrevArrow } from './CustomArrow'; // Import custom arrows
import { LiaArrowRightSolid } from "react-icons/lia";

import ButtonLink from '../../components/ButtonLink/ButtonLink';

import { PROJECTS } from '../../constants';

function Work() {

  var settings = {
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

        {PROJECTS.map((project, index) => (
          <div key={index}>
            <div className={styles.item}>
              <div className={styles.itemText}>
                <h2 className={styles.title}>{project.title}</h2>
                <h3 className={styles.subTitle}>{project.subtitle}</h3>
                <p><strong>Project description: </strong>{project.description}</p>
                <ul className={styles.itemList}>
                  {project.technologies.map((tecnologie, index) => (
                    <li key={index}>{tecnologie}</li>
                  ))}
                </ul>
                <ButtonLink
                  href={project.link}
                  icon={LiaArrowRightSolid}
                  className={styles.link}
                  ariaLabel="Visit my website"
                >
                  Visit website
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
  )
}

export default Work