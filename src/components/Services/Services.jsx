import { motion } from "framer-motion";
import "./service.scss";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: [
        "Custom Development",
        "Redesign",
        "SEO",
        "Maintenance",
        // "Responsive Design",
        // "Fast & Secure",
      ],
    },
    {
      title: "Creative Branding",
      description: [
        "Creative Branding",
        "Visuals",
        // "Photo, Video, Reel",
        "Tailored Solutions",
        "Fast Turnaround",
      ],
    },
    {
      title: "Product Management",
      description: [
        // "Strategy",
        // "Agile Development",
        "Research",
        "User-Centered Design",
        "Collaboration",
        "Data-Driven Decisions",
        // "Scaling",
      ],
    },
    {
      title: "Graphic Designing",
      description: [
        "Creative Branding",
        "Visuals",
        "Tailored Solutions",
        "Fast Turnaround",
      ],
    },
    {
      title: "Social Media Management",
      description: [
        "Profile Setup",
        "Content Creation",
        // "Interaction",
        "Campaigns",
        // "Analytics",
        "Hashtag Strategy",
        // "Brand Consistency",
      ],
    },
  ];

  return (
    <motion.div
      className="services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div className="textContainer">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          I focus on helping brands grow <br /> and move forward
        </motion.p>
        <motion.hr
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />
      </motion.div>

      <motion.div className="titleContainer">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </motion.div>
        <motion.div
          className="title"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <motion.button>Our Services</motion.button>
        </motion.div>
      </motion.div>

      <motion.div className="listContainer">
        {services.map((service, index) => (
          <motion.div
            className="box"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.2 }}
            whileInView
          >
            <h2>{service.title}</h2>
            <ul>
              {service.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a href="#Contact">
              <motion.button>More...</motion.button>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
