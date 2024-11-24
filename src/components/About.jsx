import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-20px font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I’m a third-year Computer Science student at Graphic Era University in
        India with a deep passion for crafting innovative tech solutions. As a
        full-stack web developer and software enthusiast, I thrive on
        transforming ideas into engaging, efficient applications. My toolkit
        includes JavaScript, Python, and C++, complemented by frameworks like
        React, Node.js, and Express.js.
        <br /> From developing an interactive memory game to creating a
        real-time cryptocurrency tracker and building a collaborative code
        editor, I’ve tackled challenges that enhanced my expertise in dynamic
        data handling and intuitive UI/UX design. These experiences have shaped
        my ability to deliver impactful projects, whether it's through solving
        real-world problems or competing in hackathons.
        <br /> I’m particularly intrigued by the intersection of technology and
        finance, where I can combine my coding prowess and problem-solving
        skills to create transformative solutions. Every line of code I write is
        a step toward building systems that matter!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} index={idx} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
