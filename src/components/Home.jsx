import { motion } from "framer-motion";
import React from "react";
import Typewriter from "typewriter-effect";
import {BsChevronDown }from "react-icons/bs";
import {BsArrowUpRight }from "react-icons/bs";
import logo from "../assets/manish_portfolio.png"


const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section >
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Manish Chavan
          </motion.h1>
          <Typewriter
            options={{
              strings: [
                "A Developer",
                "A Designer",
                "A Web Development Enthusiast",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div className="buttons">
            <a href="mailto:manishchavan1799@gmail.com">
              <button>Hire Me</button>
            </a>

            <a href="#work" className="project">
              Projects <BsArrowUpRight/>
            </a>
          </div>

          <article>
            <p>10+</p>
            <span>Projects</span>
          </article>
          <article>
            <p>Contact</p>
            <span>manishchavan1799@gmail.com</span>
          </article>
        </div>
      </section>
      <section >
        <img src={logo} alt="" style={{
            filter: 'hue-rotate(90deg)'
        }} />
      </section>
      <BsChevronDown className="chevIcon"/>
    </div>
  );
};

export default Home;
