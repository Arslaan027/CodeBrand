import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

// Portfolio items array
const items = [
  {
    id: 1,
    title: "CME Trading Services",
    img: "/CME.png",
    desc: "A responsive website for a Qatar-based industry featuring modern design, smooth animations, and seamless navigation, ensuring an engaging user experience while efficiently managing order-related files and data.",
    link: "https://cme.qa/",
  },
  {
    id: 2,
    title: "Welfare Action for Incarcerated (WAFI)",
    img: "/wafi.png",
    desc: "A project aimed at supporting incarcerated individuals through education, mental health, and skill development programs, promoting reintegration into society.",
    link: "https://dashboard.enggenv.com/wafi/",
  },

  {
    id: 3,
    title: "BiDepartment Database Management",
    img: "/Connective.png",
    desc: "A centralized dashboard for managing and organizing order-related Files, Activity Tracker, and Data, ensuring efficient and easy access for each individual order.",
    link: "https://dashboard.enggenv.com/connectivityDash/#/connectivity",
  },
  {
    id: 4,
    title: "Noor al-fikr",
    img: "/noor.png",
    desc: "A responsive website for a Saudi-based industry featuring modern design, smooth animations, and seamless navigation, ensuring an engaging user experience while efficiently managing order-related files and data.",
    link: "https://nooralfikr.com/",
  },

  {
    id: 5,
    title: "Calibrix (Certificate Generation System)",
    img: "/calibrix.png",
    desc: "Clibrix offers the ability to create custom certificates tailored to individual user requirements, providing a flexible solution for generating certificates with personalized details and designs.",
    link: "https://dashboard.enggenv.com/calib_cert/#/login",
  },
  {
    id: 6,
    title: "Ontato",
    img: "/ontato.png",
    desc: "A responsive website for a Australia Based industry featuring modern design, smooth animations, and seamless navigation, ensuring an engaging user experience while efficiently managing order-related files and data.",
    link: "https://ontato.au/",
  },

  {
    id: 7,
    title: "Employee Management Dashboard (In Progress)",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*3oAf0XMPxo2OoIeIK0FFwg.png",
    desc: "A comprehensive platform designed for efficient management of employee data and processes, offering tools for tracking performance, attendance, and payroll.",
    // link: "https://github.com/Arslaan027",
  },
  {
    id: 8,
    title: "Sigma Solution WebApp  (In Progress)",
    img: "https://xdfile.com/wp-content/uploads/2020/04/Software-Company-XD-Website-Template-758x427.jpg",
    desc: "A multi-service platform offering a wide range of business solutions, from registrations to digital marketing, designed for global enterprises.",
    link: "https://sigmasolution.onrender.com/",
  },
  {
    id: 9,
    title: "Video Advertisement",
    img: "/VideoAdd.mp4",
    desc: "A creative video advertisement designed to promote a restaurant, focusing on its food offerings and running targeted campaigns across social media platforms.",
    // link: "#Contact",
  },
  {
    id: 10,
    title: "Meme Creation",
    img: "/meme.mp4",
    desc: "A fun and engaging meme creation project aimed at leveraging viral content to boost brand visibility and connect with a younger audience through humor on social media.",
    // link: "#Contact",
  },
  {
    id: 11,
    title: "WordPress Website (DesktopView Only)",
    img: "/wordpress.png",
    desc: "A professional WordPress website designed to showcase business services and products, optimized for user engagement and easy content management.",
    link: "https://brasslandindia.in/",
  },
];

// Single Portfolio Item Component
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="media" ref={ref}>
            {/* Conditional Rendering for Video or Image */}
            {item.img.endsWith(".mp4") ? (
              <video src={item.img} autoPlay muted loop playsInline />
            ) : (
              <img src={item.img} alt={item.title} />
            )}
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>See More</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Component to Display All Items
const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
