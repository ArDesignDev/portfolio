import './Slick.scss';
import styles from './Work.module.scss';
import Slider from "react-slick";
import { NextArrow, PrevArrow } from './CustomArrow'; // Import custom arrows
import { LiaArrowRightSolid } from "react-icons/lia";

import work1 from '../../assets/images/vison-preview.jpg';
import work2 from '../../assets/images/bold-preview.jpg';
import work3 from '../../assets/images/postelja-preview.jpg';
import work4 from '../../assets/images/pass-preview.jpg';

function Work() {

  var settings = {
    dots: false,
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
        <div>
            <div className={styles.item}>
              <div className={styles.itemText}>
                <h2 className={styles.title}>Vision Dance Team</h2>
                <h3 className={styles.subTitle}>Website for dance club</h3>
                <p><strong>Project description:</strong> This dynamic website, built on WordPress, features a rich array of animations and striking visuals. Leveraging the GSAP (GreenSock Animation Platform) library, I implemented interactive elements that respond to user scroll actions, creating an immersive and engaging experience. The design focuses on fluid animations and responsive layout, ensuring seamless performance across devices while capturing the energetic spirit of the dance team.</p>
                <ul className={styles.itemList}>
                  <li>WordPress</li>
                  <li>Custom WordPress theme</li>
                  <li>CSS3/SASS</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JAVASCRIPT</li>
                  <li>JQUERY</li>
                  <li>GSAP</li>
                  <li>Scroll animations</li>
                  <li>Gutenberg</li>
                  <li>ACF</li>
                  <li>Figma</li>
                </ul>
                <a className={styles.link} href="https://visiondance.si/" target='_blank' rel="noopener noreferrer" aria-label="Visit my website">Visit website <LiaArrowRightSolid /></a>
              </div>
              <div className={styles.itemImg}>
                <figure className={styles.imgWrapper}>
                  <img src={work1} alt="work1" />
                </figure>
              </div>
            </div>
        </div>
        <div>
            <div className={styles.item}>
              <div className={styles.itemText}>
                <h2 className={styles.title}>Boldgroup</h2>
                <h3 className={styles.subTitle}>Marketing agency</h3>
                <p><strong>Project description:</strong> BoldGroup agency website is built on WordPress. The site features engaging hero animations and seamless transition effects, offering an interactive user experience. It supports both dark and light modes to cater to user preferences, enhancing accessibility and visual comfort.  Website ensures optimal performance and user engagement through strategic use of advanced plugins and compliance with the latest web standards.</p>
                <ul className={styles.itemList}>
                  <li>WordPress</li>
                  <li>Custom WordPress theme</li>
                  <li>CSS3/SASS</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JAVASCRIPT</li>
                  <li>JQUERY</li>
                  <li>Gutenberg</li>
                  <li>ACF</li>
                  <li>XD Adobe</li>
                  <li>Advance Analitics</li>
                </ul>
                <a className={styles.link} href="https://boldgroup.agency/" target='_blank' rel="noopener noreferrer" aria-label="Visit my website">Visit website <LiaArrowRightSolid /></a>
              </div>
              <div className={styles.itemImg}>
                <figure className={styles.imgWrapper}>
                  <img src={work2} alt="work2" />
                </figure>
              </div>
            </div>
        </div>
        <div>
            <div className={styles.item}>
              <div className={styles.itemText}>
                <h2 className={styles.title}>Slovenska postelja</h2>
                <h3 className={styles.subTitle}>Woocommerce store</h3>
                <p><strong>Project description:</strong> Slovenska postelja website is a Woocommerce store built on WordPress, featuring over 8,000 product variations. The site boasts customized product pages and a streamlined checkout process, enhancing the shopping experience. It supports both credit card and Leanpay payment options, ensuring secure and flexible transactions. Optimal performance and user engagement are achieved through the strategic use of advanced plugins and adherence to the latest web standards.</p>
                <ul className={styles.itemList}>
                  <li>WordPress</li>
                  <li>Woocommerce</li>
                  <li>Custom WordPress theme</li>
                  <li>CSS3/SASS</li>
                  <li>HTML</li>
                  <li>PHP</li>
                  <li>JAVASCRIPT</li>
                  <li>JQUERY</li>
                  <li>Gutenberg</li>
                  <li>ACF</li>
                  <li>XD Adobe</li>
                  <li>Advance Analitics</li>
                  <li>Stripe</li>
                  <li>Klaviyo</li>
                  <li>Leanpay</li>
                </ul>
                <a className={styles.link} href="https://postelja.si/" target='_blank' rel="noopener noreferrer" aria-label="Visit my website">Visit website <LiaArrowRightSolid /></a>
              </div>
              <div className={styles.itemImg}>
                <figure className={styles.imgWrapper}>
                  <img src={work3} alt="work3" />
                </figure>
              </div>
            </div>
        </div>
        <div>
            <div className={styles.item}>
              <div className={styles.itemText}>
                <h2 className={styles.title}>PassSport</h2>
                <h3 className={styles.subTitle}>Website for a Sport App</h3>
                <p><strong>Project description:</strong> PassSport is a platform designed for a sports application, where my role focused on front-end development. I implemented smooth scroll animations using the GSAP (GreenSock Animation Platform) library, enhancing the user experience with dynamic, engaging visual transitions. Additionally, I developed a custom map using the MapLibre library, which displays all fitness locations interactively. This project highlights my expertise in creating responsive, visually captivating websites with a seamless user interface.</p>
                <ul className={styles.itemList}>
                  <li>HTML</li>
                  <li>CSS3/SASS</li>
                  <li>JAVASCRIPT</li>
                  <li>JQUERY</li>
                  <li>GSAP</li>
                  <li>Scroll animations</li>
                  <li>MapLibre GL JS</li>
                </ul>
                <a className={styles.link} href="https://passsport.com/en/" target='_blank' rel="noopener noreferrer" aria-label="Visit my website">Visit website <LiaArrowRightSolid /></a>
              </div>
              <div className={styles.itemImg}>
                <figure className={styles.imgWrapper}>
                  <img src={work4} alt="work4" />
                </figure>
              </div>
            </div>
        </div>
      </Slider>
    </main>
  )
}

export default Work