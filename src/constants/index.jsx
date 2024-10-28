import work1 from '../assets/images/vison-preview.jpg';
import work2 from '../assets/images/bold-preview.jpg';
import work3 from '../assets/images/postelja-preview.jpg';
import work4 from '../assets/images/pass-preview.jpg';

export const EXPERIENCES = [
    {
      subtitle: "2020 – Present",
      title: "Founder / Web Developer",
      description: "Wordpress development, Front-end development, Maintenance and Support, Hosting",
      company: "Webplus s.p."
    },
    {
      subtitle: "2022 – 2023",
      title: "Senior Web Developer",
      description: "Wordpress development, Front-end development, Maintenance and Support, Hosting, Analytics Implementation, API Integration",
      company: "Bold Group"
    },
    {
      subtitle: "2021 – 2022",
      title: "Front-End React Developer",
      description: "React Development, Magento 2, Version Control",
      company: "Studio Moderna"
    },
    {
      subtitle: "2017 – 2021",
      title: "Front-End Web Developer",
      description: "Front-end development, Theme Development, Magento, Version Control",
      company: "Studio Moderna"
    },
    {
      subtitle: "2017 – 2021",
      title: "Internet Assistant",
      description: "Website Setup, HTML",
      company: "Studio Moderna"
    }
];
  

export const PROJECTS = [
  {
    title: "Vision Dance Team",
    subtitle: "Website for dance club",
    image: work1,
    description:
      "This dynamic website, built on WordPress, features a rich array of animations and striking visuals. Leveraging the GSAP (GreenSock Animation Platform) library, I implemented interactive elements that respond to user scroll actions, creating an immersive and engaging experience. The design focuses on fluid animations and responsive layout, ensuring seamless performance across devices while capturing the energetic spirit of the dance team.",
    technologies: [
      "WordPress",
      "Custom WordPress theme",
      "CSS3/SASS",
      "HTML",
      "PHP",
      "JavaScript",
      "jQuery",
      "GSAP",
      "Scroll animations",
      "Gutenberg",
      "ACF",
      "Figma",
    ],
    link: "https://visiondance.si/",
  },
  {
    title: "Boldgroup",
    subtitle: "Marketing agency",
    image: work2,
    description:
      "BoldGroup agency website is built on WordPress. The site features engaging hero animations and seamless transition effects, offering an interactive user experience. It supports both dark and light modes to cater to user preferences, enhancing accessibility and visual comfort. Website ensures optimal performance and user engagement through strategic use of advanced plugins and compliance with the latest web standards.",
    technologies: [
      "WordPress",
      "Custom WordPress theme",
      "CSS3/SASS",
      "HTML",
      "PHP",
      "JavaScript",
      "jQuery",
      "Gutenberg",
      "ACF",
      "XD Adobe",
      "Advanced Analytics",
    ],
    link: "https://boldgroup.agency/",
  },
  {
    title: "Slovenska postelja",
    subtitle: "Woocommerce store",
    image: work3,
    description:
      "Slovenska postelja website is a Woocommerce store built on WordPress, featuring over 8,000 product variations. The site boasts customized product pages and a streamlined checkout process, enhancing the shopping experience. It supports both credit card and Leanpay payment options, ensuring secure and flexible transactions. Optimal performance and user engagement are achieved through the strategic use of advanced plugins and adherence to the latest web standards.",
    technologies: [
      "WordPress",
      "Woocommerce",
      "Custom WordPress theme",
      "CSS3/SASS",
      "HTML",
      "PHP",
      "JavaScript",
      "jQuery",
      "Gutenberg",
      "ACF",
      "XD Adobe",
      "Advanced Analytics",
      "Stripe",
      "Klaviyo",
      "Leanpay",
    ],
    link: "https://postelja.si/",
  },
  {
    title: "PassSport",
    subtitle: "Website for a Sport App",
    image: work4,
    description:
      "PassSport is a platform designed for a sports application, where my role focused on front-end development. I implemented smooth scroll animations using the GSAP (GreenSock Animation Platform) library, enhancing the user experience with dynamic, engaging visual transitions. Additionally, I developed a custom map using the MapLibre library, which displays all fitness locations interactively. This project highlights my expertise in creating responsive, visually captivating websites with a seamless user interface.",
    technologies: [
      "HTML",
      "CSS3/SASS",
      "JavaScript",
      "jQuery",
      "GSAP",
      "Scroll animations",
      "MapLibre GL JS",
    ],
    link: "https://passsport.com/en/",
  },
];
