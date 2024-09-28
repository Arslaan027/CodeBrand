import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <span className="brand">CodeBrand</span>
        <div className="social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://github.com/Arslaan027"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/arslaan-ahmad-185a58221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
