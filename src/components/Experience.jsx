import { useEffect, useReducer } from "react";
import "../styles/Experience.css";
import { motion } from "framer-motion";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Experience() {
  const { width } = useWindowSize();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--card-container-width",
      `${(width - 20) * 2 + 20}px`,
    );
    document.documentElement.style.setProperty(
      "--card-width",
      `${width - 20}px`,
    );
  }, [width]);
  return (
    <section className="experience" id="2">
      <div className="page-title">
        <h2 className="poppins-light">Experience</h2>
      </div>
      <div className="experience-content">
       { width > 767 ?<div className="card-container">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
            className="exp-card"
          >
            <h3 className="title poppins-light">
              Upward Insurance Service – Quezon City
            </h3>
            <div className="position-date poppins-light">
              <h4>Solo FullStack Developer</h4>
              <p>Sep 2023 – Oct 2025</p>
            </div>
            <ul className="description poppins-regular ">
              <li>
                Served as the solo developer responsible for modernizing a
                legacy VB.NET + SQL desktop system into a full-stack web
                application using React (TypeScript), Node.js (TypeScript), and
                MySQL, deployed via Hostinger.
              </li>
              <li>
                Successfully delivered a production-ready accounting and claims
                management system within one year, enabling the company to
                transition from a desktop-based workflow to a centralized web
                platform.
              </li>
              <li>
                Reverse-engineered legacy code and independently rebuilt system
                modules despite limited documentation, continuously improving
                the platform with new features, system maintenance, and
                performance enhancements.
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
            className="exp-card"
          >
            <h3 className="title poppins-light">
              Taters Enterprises, Inc. – Makati City
            </h3>
            <div className="position-date poppins-light">
              <h4>Intern Software Developer</h4>
              <p>Apr 2022 – Sep 2025</p>
            </div>
            <ul className="description poppins-regular">
              <li>
                Developed and maintained the “I Love Taters” e-commerce web
                application using ReactJS, TypeScript, Redux, and PHP
                (CodeIgniter); designed web pages, built APIs, and collaborated
                with senior developers during agile development cycles.
              </li>
              <li>
                Contributed to the delivery of a fully functional online
                ordering platform, improving the digital shopping experience and
                supporting the company’s online sales operations.
              </li>
              <li>
                Ensured high-quality code implementation and UI consistency,
                participating in daily and weekly development meetings and
                assisting senior developers in resolving technical issues and
                improving features.
              </li>
            </ul>
          </motion.div>
        </div> :
        <div className="card-container">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
            className="exp-card"
          >
            <h3 className="title poppins-light">
              Upward Insurance Service – Quezon City
            </h3>
            <div className="position-date poppins-light">
              <h4>Solo FullStack Developer</h4>
              <p>Sep 2023 – Oct 2025</p>
            </div>
            <ul className="description poppins-regular ">
              <li>
                Served as the solo developer responsible for modernizing a
                legacy VB.NET + SQL desktop system into a full-stack web
                application using React (TypeScript), Node.js (TypeScript), and
                MySQL, deployed via Hostinger.
              </li>
              <li>
                Successfully delivered a production-ready accounting and claims
                management system within one year, enabling the company to
                transition from a desktop-based workflow to a centralized web
                platform.
              </li>
              <li>
                Reverse-engineered legacy code and independently rebuilt system
                modules despite limited documentation, continuously improving
                the platform with new features, system maintenance, and
                performance enhancements.
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
            className="exp-card"
          >
            <h3 className="title poppins-light">
              Taters Enterprises, Inc. – Makati City
            </h3>
            <div className="position-date poppins-light">
              <h4>Intern Software Developer</h4>
              <p>Apr 2022 – Sep 2025</p>
            </div>
            <ul className="description poppins-regular">
              <li>
                Developed and maintained the “I Love Taters” e-commerce web
                application using ReactJS, TypeScript, Redux, and PHP
                (CodeIgniter); designed web pages, built APIs, and collaborated
                with senior developers during agile development cycles.
              </li>
              <li>
                Contributed to the delivery of a fully functional online
                ordering platform, improving the digital shopping experience and
                supporting the company’s online sales operations.
              </li>
              <li>
                Ensured high-quality code implementation and UI consistency,
                participating in daily and weekly development meetings and
                assisting senior developers in resolving technical issues and
                improving features.
              </li>
            </ul>
          </motion.div>
        </div>}
      </div>
    </section>
  );
}
