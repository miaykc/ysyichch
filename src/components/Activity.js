import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img from "../assets/loopy_ya.jpg";

const Activity = ({ t }) => {
  return (
    <section className="section lg:py-[60vh] lg:my-[40vh]  " id="activity">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          {/* Left Columng (Text and 1st project)*/}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div>
              <h2 className="text-section-title ">{t("recent_activity")}</h2>
              <p className="max-w-sm mb-16"></p>
              <button className="btn btn-sm">{t("see_more")}</button>
            </div>
            {/* image */}
            <div
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl"
              onClick={() => {
                window.open(
                  "https://multimoco.linguistics.ntu.edu.tw/index.html",
                  "MultiMoco",
                  "width=800,height=600"
                );
              }}
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                {" "}
              </div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">{t("activity_a_name")}</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-6 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">
                  {t("activity_a_content")}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Columng (2nd and 3rd project)*/}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            animate={{ opacity: 1 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* 2nd project image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                {" "}
              </div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">{t("activity_b_name")}</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">
                  {t("activity_b_content")}
                </span>
              </div>
            </div>

            {/* 3rd project image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                {" "}
              </div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">{t("activity_c_name")}</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">
                  {t("activity_c_content")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
