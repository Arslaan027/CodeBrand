import { motion } from "framer-motion";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { AiOutlineCopy } from "react-icons/ai"; // Import the copy icon
import me from "../../../public/me.jpg";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_j7onsqt", "template_tshggt6", ref.current, {
        publicKey: "aeThRihOUxcFZe5jz",
      })
      .then(
        (result) => {
          console.log("SUCCESS!");
          setSuccess(true);
          setError(false);
          ref.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          setSuccess(false);
        }
      );
  };

  // Function to copy email or phone to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // alert(`${text} copied to clipboard!`);
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>
          {" "}
          <img src={me} alt="" />
          Let's work together
        </motion.h1>

        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>
            help.codebrand@gmail.com
            <AiOutlineCopy
              onClick={() => handleCopy("help.codebrand@gmail.com")}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            />
          </span>
        </motion.div>

        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>
            +91 90683 36703
            <AiOutlineCopy
              onClick={() => handleCopy("+91 90683 36703")}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            />
          </span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <form ref={ref} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />{" "}
          {/* Match name with the template */}
          <input type="email" required placeholder="Email" name="email" />{" "}
          {/* Match email with the template */}
          <textarea rows={6} placeholder="Message" name="message" />{" "}
          {/* Match message with the template */}
          <button>Submit</button>
          {error && (
            <span style={{ color: "red" }}>Error: Please try again.</span>
          )}
          {success && (
            <span style={{ color: "green" }}>Message Sent Successfully!</span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
