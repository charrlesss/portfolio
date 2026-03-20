import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { animate } from "framer-motion";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import "./styles/App.css";

export function scrollToSection(element) {
  const start = window.scrollY;
  const end = element.offsetTop;
  animate(start, end, {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
    onUpdate: (latest) => window.scrollTo(0, latest),
  });
}

function buttonText(activeIndex) {
  switch (activeIndex) {
    case 3:
      return "E";
    case 4:
      return "W";
    case 5:
      return "S";
  }
}

function buttonDirection(activeIndex) {
  let projectElement;
  switch (activeIndex) {
    case 3:
      projectElement = document.querySelector(".experience");
      scrollToSection(projectElement);
      return;
    case 4:
      projectElement = document.querySelector(".projects");
      scrollToSection(projectElement);
      return;
    case 5:
      projectElement = document.querySelector(".skills");
      scrollToSection(projectElement);
      return;
  }
}
function App() {
  const [activeSection, setActiveSection] = useState("1");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // 50% visible
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="container">
      <Home />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <div className="floating-button">
        {parseInt(activeSection) > 2 ? (
          <button
            onClick={() => {
              buttonDirection(parseInt(activeSection));
            }}
          >
            {buttonText(parseInt(activeSection))}
          </button>
        ) : (
          <></>
        )}
        {activeSection !== "1" ? (
          <button>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              onClick={() => {
                const projectElement = document.querySelector(".home");
                scrollToSection(projectElement);
              }}
              width="20px"
              height="20px"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 5V19M12 5L6 11M12 5L18 11"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
