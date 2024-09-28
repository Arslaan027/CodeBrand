import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";
import { useRef } from "react";

// Portfolio items array
const items = [
  {
    id: 1,
    title: "Welfare Action for Incarcerated (WAFI)",
    img: "https://media.istockphoto.com/id/1250157443/photo/female-prisoner-talking-with-her-sad-wife-in-prison-visit-room.jpg?s=612x612&w=0&k=20&c=XvXRN32VaQ-CpYRQb5M4YHJOJw-Q5xVckqPPHVuStMc=",
    desc: "A project aimed at supporting incarcerated individuals through education, mental health, and skill development programs, promoting reintegration into society.",
    link: "https://dashboard.enggenv.com/wafi/",
  },
  {
    id: 2,
    title: "Student Web Application",
    img: "https://www.datocms-assets.com/22695/1705945768-student-management-web-app-design-concept.webp",
    desc: "A platform developed to facilities provided by AMU to its students, offering detailed information and resources for academic, residential, and extracurricular support.",
    link: "https://amustudent.000webhostapp.com/main.php",
  },
  {
    id: 3,
    title: "Employee Management Dashboard",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*3oAf0XMPxo2OoIeIK0FFwg.png",
    desc: "A comprehensive platform designed for efficient management of employee data and processes, offering tools for tracking performance, attendance, and payroll.",
    link: "https://github.com/Arslaan027",
  },
  {
    id: 4,
    title: "Sigma Solution WebApp",
    img: "https://xdfile.com/wp-content/uploads/2020/04/Software-Company-XD-Website-Template-758x427.jpg",
    desc: "A multi-service platform offering a wide range of business solutions, from registrations to digital marketing, designed for global enterprises.",
    link: "https://sigmasolution.onrender.com/",
  },
  {
    id: 5,
    title: "Company Website",
    img: "https://thumbs.dreamstime.com/b/ecology-eco-friendly-business-web-banner-landing-page-people-taking-care-nature-protect-environment-green-energy-210562773.jpg",
    desc: "A website developed for an environmental technology company focused on producing eco-friendly devices and solutions for sustainable development.",
    link: "https://www.enggenv.com/",
  },
  {
    id: 6,
    title: "Video Advertisement",
    img: "/VideoAdd.mp4",
    desc: "A creative video advertisement designed to promote a restaurant, focusing on its food offerings and running targeted campaigns across social media platforms.",
    // link: "#Contact",
  },
  {
    id: 7,
    title: "Meme Creation #1",
    img: "/Meme.mp4",
    desc: "A fun and engaging meme creation project aimed at leveraging viral content to boost brand visibility and connect with a younger audience through humor on social media.",
    // link: "#Contact",
  },
  {
    id: 8,
    title: "Meme Creation #2",
    img: "/Meme2.mp4",
    desc: "A fun and engaging meme creation project aimed at leveraging viral content to boost brand visibility and connect with a younger audience through humor on social media.",
    // link: "#Contact",
  },
  {
    id: 9,
    title: "Meme Creation #3",
    img: "/meme.mp4",
    desc: "A fun and engaging meme creation project aimed at leveraging viral content to boost brand visibility and connect with a younger audience through humor on social media.",
    // link: "#Contact",
  },
  {
    id: 10,
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
