import { motion } from "framer-motion";
import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-350%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>CodeBrand</motion.h2>
          <motion.h1 variants={textVariants}>
            Crafting Your Digital Identity.
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <a href="#portfolio">
              <motion.button variants={textVariants}>
                See the Latest Work
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants}>Contact Me</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt="Scroll indicator"
            animate="scrollButton"
          />
        </motion.div>
        <motion.div
          className="slidingTextContainer"
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Development Branding Product Management
        </motion.div>
        <div className="imageContainer">
          <img src="/hero.png" alt="Hero visual" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
