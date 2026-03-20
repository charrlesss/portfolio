import "../styles/Home.css";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import profile from "../assets/profile.png";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useReducer } from "react";
import { scrollToSection } from "../App";
import { useWindowSize } from "../hooks/useWindowSize";
import myPdf from "../assets/Resume_Charles_Palencia.pdf";

const myPhrases = ["FullStack Dev", "Frontend Dev", "Backend Dev"];
const initialState = {
  textExp: { opacity: 1, left: "17%", top: "20%" },
  textProject: { opacity: 1, left: "12%", top: "40%" },
  textCompany: { opacity: 1, left: "7%", top: "60%" },
  logo: logo,
};

function counterReducer(state, action) {
  switch (action.type) {
    case "Desktop":
      return initialState;
    case "tabletXl":
      return {
        textExp: { opacity: 1, left: "30%", top: "22%" },
        textProject: { opacity: 1, left: "37%", top: "8%" },
        textCompany: { opacity: 1, left: "65%", top: "12%" },
        logo: logo1,
      };
    case "tabletLG":
      return {
        textExp: { opacity: 1, left: "27%", top: "22%" },
        textProject: { opacity: 1, left: "33%", top: "8%" },
        textCompany: { opacity: 1, left: "67%", top: "12%" },
        logo: logo1,
      };
    case "tabletMD":
      return {
        textExp: { opacity: 1, left: "22%", top: "22%" },
        textProject: { opacity: 1, left: "28%", top: "8%" },
        textCompany: { opacity: 1, left: "75%", top: "12%" },
        logo: logo1,
      };
    case "mobile":
      return {
        textExp: { opacity: 1, left: "18%", top: "22%" },
        textProject: { opacity: 1, left: "22%", top: "8%" },
        textCompany: { opacity: 1, left: "80%", top: "12%" },
        logo: logo1,
      };
    case "mobileSM":
      return {
        textExp: { opacity: 1, left: "15%", top: "22%" },
        textProject: { opacity: 1, left: "19%", top: "8%" },
        textCompany: { opacity: 1, left: "85%", top: "12%" },
        logo: logo1,
      };
    default:
      return initialState;
  }
}

export default function Home() {
  const { width } = useWindowSize();
  const [state, dispatch] = useReducer(counterReducer, initialState);

  useEffect(() => {
    if (width <= 1150 && width > 900) {
      dispatch({ type: "tabletXl" });
    } else if (width <= 900 && width > 700) {
      dispatch({ type: "tabletLG" });
    } else if (width <= 700 && width > 500) {
      dispatch({ type: "tabletMD" });
    } else if (width <= 500 && width > 376) {
      dispatch({ type: "mobile" });
    } else if (width <= 376) {
      dispatch({ type: "mobileSM" });
    } else {
      dispatch({ type: "Desktop" });
    }
  }, [width]);

  return (
    <>
      <section className="home" id="1">
        <nav className="nav">
          <motion.img
            initial={{ opacity: 0, transform: "rotate(-360deg)" }}
            whileInView={{ opacity: 1, transform: "rotate(0deg)" }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.5 }}
            src={state.logo}
          />
          <ul>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".experience");
                  scrollToSection(projectElement);
                }}
              >
                Experience
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".projects");
                  scrollToSection(projectElement);
                }}
              >
                Works
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".skills");
                  scrollToSection(projectElement);
                }}
              >
                Skills
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".about");
                  scrollToSection(projectElement);
                }}
              >
                About
              </button>
            </motion.li>
          </ul>
          <button
            className="menu-button"
            onClick={() => {
              const projectElement = document.querySelector("#side-nav");
              projectElement.classList.add("active");
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" width="30px" height="30px">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g id="Menu / Menu_Alt_01">
                  <path
                    id="Vector"
                    d="M12 17H19M5 12H19M5 7H19"
                    stroke="#FFFFFF"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </nav>
        <div className="hero">
          <div className="hero-content-text">
            <div>
              <motion.h2
                className="poppins-bold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ amount: 0.5 }}
              >
                HI THERE IM CHARLES
              </motion.h2>
              <TypewriterLoop texts={myPhrases} />
              <div className="contact-desc">
                {width <= 500 ? (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ amount: 0.5 }}
                    className="poppins-regular"
                  >
                    Ready to work on the next project of your business feel free
                    to reach me out.
                  </motion.p>
                ) : (
                  <>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ amount: 0.5 }}
                      className="poppins-regular"
                    >
                      Ready to work on the next project of your business.
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ amount: 0.5 }}
                      className="poppins-regular"
                    >
                      feel free to reach me out.
                    </motion.p>
                  </>
                )}
                <br />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ amount: 0.5 }}
                  className="poppins-regular"
                >
                  <svg
                    className="email"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <rect
                        x="3"
                        y="6"
                        width="18"
                        height="12"
                        rx="2"
                        stroke="#bababa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5737 7L12 13L3.42635 7"
                        stroke="#bababa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                  charlespalencia21@gmail.com
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    width="20px"
                    height="20px"
                    className="copy"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "charlespalencia21@gmail.com",
                      );
                    }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M3 16V4C3 2.89543 3.89543 2 5 2H15M9 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H9C7.89543 6 7 6.89543 7 8V20C7 21.1046 7.89543 22 9 22Z"
                        stroke="#bababa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ amount: 0.5 }}
                  className="poppins-regular"
                >
                  <svg
                    className="phone"
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z"
                        stroke="#bababa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                  (+63) 985-271-1185
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    width="20px"
                    height="20px"
                    className="copy"
                    onClick={() => {
                      navigator.clipboard.writeText("639852711185");
                    }}
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M3 16V4C3 2.89543 3.89543 2 5 2H15M9 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H9C7.89543 6 7 6.89543 7 8V20C7 21.1046 7.89543 22 9 22Z"
                        stroke="#bababa"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </motion.p>
              </div>

              <div>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ amount: 0.5 }}
                  className="dl-cv"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = myPdf;
                    link.download = "Charles_Palencia_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  DOWNLOAD CV
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9 }}
                  viewport={{ amount: 0.5 }}
                  className="linkin"
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/charles-palencia-4444bb241",
                      "_blank",
                      "noopener,noreferrer",
                    );
                  }}
                >
                  LinkedIn
                </motion.button>
              </div>
            </div>
          </div>
          <div className="hero-content-image">
            <div className="img-container">
              <motion.img src={profile} />
            </div>

            <div
              className="circle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ amount: 0.5 }}
            ></div>
            <motion.div
              className="text-show-up"
              initial={{ opacity: 0, left: "50%", top: "50%" }}
              whileInView={state.textExp}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.5 }}
            >
              <p className="poppins-extrabold">2+</p>
              <p className="poppins-medium">Experience</p>
            </motion.div>
            <motion.div
              className="text-show-up"
              initial={{ opacity: 0, left: "50%", top: "50%" }}
              whileInView={state.textProject}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.5 }}
            >
              <p className="poppins-extrabold">3+</p>
              <p className="poppins-medium">Project</p>
            </motion.div>
            <motion.div
              className="text-show-up"
              initial={{ opacity: 0, left: "50%", top: "50%" }}
              whileInView={state.textCompany}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.5 }}
            >
              <p className="poppins-extrabold">2+</p>
              <p className="poppins-medium">Company</p>
            </motion.div>
          </div>
        </div>
      </section>
      <div
        className="side-nav "
        id="side-nav"
        onClick={() => {
          const projectElement = document.querySelector("#side-nav");
          projectElement.classList.remove("active");
        }}
      >
        <div className="nav-content">
          <button
            onClick={() => {
              const projectElement = document.querySelector("#side-nav");
              projectElement.classList.remove("active");
            }}
          >
            <svg
              width="30px"
              height="30px"
              fill="#000000"
              viewBox="-3.5 0 19 19"
              class="cf-icon-svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"></path>
              </g>
            </svg>
          </button>

          <ul>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".home");
                  scrollToSection(projectElement);
                }}
              >
                Home
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".experience");
                  scrollToSection(projectElement);
                }}
              >
                Experience
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".projects");
                  scrollToSection(projectElement);
                }}
              >
                Works
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".skills");
                  scrollToSection(projectElement);
                }}
              >
                Skills
              </button>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ amount: 0.5 }}
            >
              <button
                onClick={() => {
                  const projectElement = document.querySelector(".about");
                  scrollToSection(projectElement);
                }}
              >
                About
              </button>
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
}

const TypewriterLoop = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    texts[index].slice(0, latest),
  );

  useEffect(() => {
    // 1. Typing animation (from 0 to text length)
    const controls = animate(count, texts[index].length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
      onComplete: () => {
        // 2. Pause when finished typing
        setTimeout(() => {
          // 3. Deleting animation (back to 0)
          animate(count, 0, {
            type: "tween",
            duration: 1,
            ease: "easeInOut",
            onComplete: () => {
              // 4. Move to next item and repeat
              setIndex((prev) => (prev + 1) % texts.length);
            },
          });
        }, 1500); // Wait 1.5s before deleting
      },
    });

    return controls.stop;
  }, [index, count, texts]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      viewport={{ amount: 0.5 }}
      style={{ display: "flex", fontSize: "2rem", fontWeight: "bold" }}
    >
      <h2 className="poppins-bold ">A </h2>
      <motion.h2 className="poppins-bold ">{displayText}</motion.h2>
      <motion.h2
        className="poppins-bold"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        style={{ borderRight: "3px solid black", marginLeft: "2px" }}
      />
    </motion.div>
  );
};
