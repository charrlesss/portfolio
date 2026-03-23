import accountinbanner from "../assets/accountinbanner.png";
import claimsbanner from "../assets/claimsbanner.png";
import tatersbanner from "../assets/tatersbanner.png";

// import taters from "../assets/video/taters.mp4";
// import accounting from "../assets/video/accounting.mp4";
// import claims from "../assets/video/claims.mp4";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

const projects = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/_UFPHO_bhW0",
    banner: accountinbanner,
    description: () => {
      return (
        <div className="description">
          <h2>Accounting System</h2>
          <p>
            This was the project I worked on before. My job was to{" "}
            <strong>rebuild</strong> a<strong> desktop application</strong> and
            convert it into a <strong>web application</strong> because the
            system was already very old and not all of its features were working
            properly anymore. They also wanted to add new features to improve
            the system.
          </p>
          <p>
            They wanted the system to be <strong>accessible online</strong>,
            make sure that <strong>all features work properly</strong>, and add
            a <strong>claims system for documentation</strong>.
          </p>
          <p>
            During the pandemic, the accounting department had difficulty
            accessing the system because it could only be used inside the
            office. Because of this, <strong>Upward Insurance Service</strong>{" "}
            had to take action so they could continue their work. One of the
            solutions they did was to let some employees stay in the office{" "}
            <strong>stay in</strong> so they could still access the system.
          </p>
          <p>
            After the pandemic, the General Manager decided that the system
            should be improved and modernized so that all features would work
            properly and the system could support their daily operations more
            efficiently.
          </p>
          <br />
          <h2>Technology Use</h2>
          <div className="tech-use">
            <ul>
              <li>React.js with Typescript</li>
              <li>React Query Tanstack</li>
              <li>Node.js with Typescript</li>
              <li>Express.js</li>
              <li>JWT</li>
            </ul>
            <ul>
              <li>Pdfkit for Reporting</li>
              <li>Prisma for ORM</li>
              <li>MYSQL Workbench</li>
              <li>Github</li>
              <li>Docker</li>
            </ul>
            <ul>
              <li>VPS Hostinger</li>
              <li>Ubuntu Server</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/_3hiYGksRyc",
    banner: claimsbanner,
    description: () => {
      return (
        <div className="description">
          <h2>Claims System</h2>

          <p>
            By the way, this is the <strong>claims system</strong>. Its main
            goal is to <strong>make it easier to find client documents</strong>{" "}
            and automate reporting, so they don’t have to{" "}
            <strong>manually create reports in Excel</strong> anymore. It also
            <strong>simplifies their daily transactions</strong>, especially
            because the claims department has so many documents, and some{" "}
            <strong>drawers were already getting confusing</strong>. It was hard
            to find older records to see if a client had made claims before.
          </p>
          <p>
            I built this claims system with the help of my co-workers and the
            claims officer—we had <strong>regular meetings</strong> to discuss
            how it should work. I was the only developer, and I made this after
            converting their old accounting system.
          </p>

          <h2>Technology Use</h2>
          <div className="tech-use">
            <ul>
              <li>React.js with Typescript</li>
              <li>React Query Tanstack</li>
              <li>Node.js with Typescript</li>
              <li>Express.js</li>
              <li>JWT</li>
            </ul>
            <ul>
              <li>Pdfkit for Reporting</li>
              <li>Prisma for ORM</li>
              <li>MYSQL Workbench</li>
              <li>Github</li>
              <li>Github/action</li>
            </ul>
            <ul>
              <li>Docker</li>
              <li>VPS Hostinger</li>
              <li>Ubuntu Server</li>
            </ul>
          </div>
        </div>
      );
    },
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/dcoEY-X0tVs",
    banner: tatersbanner,
    description: () => {
      return (
        <div className="description">
          <h2>E-commerce Website</h2>

          <p>
            Through this OJT,
            <strong>
              I gained hands-on experience as a fullstack developer
            </strong>
            ,<strong> strengthened my leadership skills in school</strong>, and
            significantly grew my technical capabilities. This experience laid a
            strong foundation for me to later join Upward as a solo fullstack
            developer, applying the skills I honed during this project
          </p>
          <p>
            <a href=" https://www.ilovetaters.com/">
              https://www.ilovetaters.com/
            </a>
          </p>

          <h2>Technology Use</h2>
          <div className="tech-use">
            <ul>
              <li>React.js with Typescript</li>
              <li>React Query Tanstack</li>
              <li>Redux</li>
              <li>PHP (CodeIgniter)</li>
            </ul>
          </div>
        </div>
      );
    },
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < projects.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevSlide = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="projects poppins-regular" id="3">
      <div className="page-title">
        <h2 className="poppins-light">Works</h2>
      </div>
      <motion.div
        className="carousel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ amount: 0.5 }}
      >
        <button
          onClick={prevSlide}
          className={` arrow  left ${index > 0 ? "show" : ""}`}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 -4.5 20 20"
            version="1.1"
            style={{
              transform: "rotate(270deg)",
            }}
          >
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -6683.000000)"
                fill="white"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
                    id="arrow_up-[#340]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {projects.map((project, i) => (
              <>
                <div className="carousel-item" key={i}>
                  <div className="video">
                    <Frame />
                  </div>
                  {project.description()}
                </div>
              </>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className={`arrow right ${index < projects.length - 1 ? "show" : ""}`}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 -4.5 20 20"
            version="1.1"
            style={{
              transform: "rotate(90deg)",
            }}
          >
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -6683.000000)"
                fill="white"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M84,6532.61035 L85.4053672,6534 L94.0131154,6525.73862 L94.9311945,6526.61986 L94.9261501,6526.61502 L102.573446,6533.95545 L104,6532.58614 C101.8864,6530.55736 95.9854722,6524.89321 94.0131154,6523 C92.5472155,6524.40611 93.9757869,6523.03486 84,6532.61035"
                    id="arrow_up-[#340]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </motion.div>
    </section>
  );
}

function Frame({ project }) {
  const refFrame = useRef();


  return (
    <iframe
      ref={refFrame}
      width="600"
      height="340"
      src={project.src}
      title="Project Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
