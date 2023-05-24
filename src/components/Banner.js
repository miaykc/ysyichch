import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub } from "react-icons/fa";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <div id="home" className="min-h-[85vh] lg:min-h-[78vh] flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            {/* 名字 */}
            <motion.h1
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="text-[52px] font-bold leading-[0.8] lg:text-[110px]"
            >
              UNA <span>CHEN</span>
            </motion.h1>

            {/* 打字機特效 I am a ... */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={["Learner", 2000, "PhD student", 2000, "Human", 2000]}
                wrapper="span"
                repeat={Infinity}
                speed={50}
                className="text-accent"
              />
            </motion.div>

            {/* 自我介紹 */}
            <motion.p
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>

            {/* 三個按鈕連結 */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              animate={{ opacity: 1 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              {/* click button to go to the Contact*/}
              <button
                className="btn btn-lg"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Contact me
              </button>
              <a
                href="https://github.com/cckk2913"
                className="text-gradient btn-link"
              >
                My Portfolio
              </a>
              {/* social icons */}
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                animate={{ opacity: 1 }}
                className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
              >
                <a href="https://github.com/cckk2913">
                  <FaGithub className="text-2xl mr-4" />
                </a>
              </motion.div>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            animate={{ opacity: 1 }}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <image src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
