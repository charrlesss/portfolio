import "../styles/Skills.css";
import React from "react";
import typescript from "../assets/skills/ts.png";
import javascript from "../assets/skills/js.png";
import php from "../assets/skills/php.png";
import vbnet from "../assets/skills/vb.png";
import react from "../assets/skills/react.png";
import redux from "../assets/skills/redux.png";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import node from "../assets/skills/node.png";
import rest from "../assets/skills/rest.png";
import prisma from "../assets/skills/prisma.png";
import mysql from "../assets/skills/mysql.png";
import sql from "../assets/skills/sql.png";
import docker from "../assets/skills/docker.png";
import linux from "../assets/skills/linux.png";
import hostinger from "../assets/skills/hostinger.png";
import git from "../assets/skills/git.png";
import github from "../assets/skills/github.png";
import jasperreport from "../assets/skills/jasperreport.png";
import crysqlreport from "../assets/skills/crystalreport.png";
import reactnative from "../assets/skills/reactnative.png";
import flutter from "../assets/skills/flutter.png";
import aspnet from "../assets/skills/aspnet.png";
import spring from "../assets/skills/spring.png";
import graphql from "../assets/skills/graphql.png";
import mongodb from "../assets/skills/mongodb.png";
import { motion } from "framer-motion";

const sourcestechuse = [
  typescript,
  javascript,
  php,
  vbnet,
  react,
  redux,
  html,
  css,
  node,
  rest,
  prisma,
  mysql,
  sql,
  docker,
  linux,
  hostinger,
  git,
  github,
  jasperreport,
  crysqlreport,
];
const sourcesothers = [reactnative, flutter, aspnet, spring, graphql, mongodb];

export default function Skills() {
  return (
    <motion.section className="skills" id="4">
      <div className="page-title">
        <h2 className="poppins-light">Skills</h2>
      </div>
      <div className="skill-layer">
        <h2 className="poppins-semibold">
          Technologies with Professional Experience :
        </h2>
        <Grid>
          {sourcestechuse.map((src, index) => {
            let initial = { opacity: 0, x: 10 };
            let whileInView = { opacity: 1, x: 0 };
            if (index <= 4 || (index <= 14 && index > 9)) {
              initial = { opacity: 0, x: 10 };
              whileInView = { opacity: 1, x: 0 };
            } else if (
              (index <= 9 && index > 4) ||
              (index <= 19 && index > 14)
            ) {
              initial = { opacity: 0, x: -10 };
              whileInView = { opacity: 1, x: 0 };
            }

            return (
              <motion.div
                initial={initial}
                whileInView={whileInView}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5 }}
              >
                <img src={src} key={index} />
              </motion.div>
            );
          })}
        </Grid>
      </div>
      <div className="skill-layer">
        <h2 className="poppins-semibold">
          Additional Technologies (Familiar / Learning):
        </h2>
        <Grid>
          {sourcesothers.map((src, index) => {
            let initial = { opacity: 0, x: 10 };
            let whileInView = { opacity: 1, x: 0 };
            if (index <= 4) {
              initial = { opacity: 0, x: 10 };
              whileInView = { opacity: 1, x: 0 };
            } else if (index <= 9 && index > 4) {
              initial = { opacity: 0, x: -10 };
              whileInView = { opacity: 1, x: 0 };
            }

            return (
              <motion.div
                initial={initial}
                whileInView={whileInView}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5 }}
              >
                <img src={src} key={index} />
              </motion.div>
            );
          })}
        </Grid>
      </div>
    </motion.section>
  );
}

function Grid({ children }) {
  return (
    <div className="grid-container">
      {React.Children.map(children, (child) => {
        // Ensure the child is a valid React element
        if (React.isValidElement(child)) {
          // Merge existing className with "manok"
          const existingClass = child.props.className || "";
          return React.cloneElement(child, {
            className: `${existingClass} grid-item`.trim(),
          });
        }
        return child; // If it's not a React element, leave it as is
      })}
    </div>
  );
}
