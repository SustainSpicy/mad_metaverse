"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { TitleText, TypingText } from "../components";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        {" "}
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <motion.div
            variants={zoomIn(1, 1)}
            className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
          >
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </motion.div>

          <motion.div
            variants={zoomIn(0.2, 1)}
            className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
          >
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </motion.div>

          <motion.div
            variants={zoomIn(0.4, 1)}
            className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]"
          >
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </motion.div>
          <motion.div
            variants={zoomIn(0.45, 1)}
            className="absolute top-0 right-[2%] md:right-[250px] w-[250px] h-[150px] p-[6px] rounded-3xl blur-[0px] bg-[#5D6680] overflow-hidden"
          >
            <img
              src="planet-people-01.png"
              alt="people"
              className="w-full h-full rounded-3xl"
            />
            <div className="absolute w-full left-[12px] bottom-[14px] flex flex-col justify-end">
              <div className="relative flex items-center gap-[20px]">
                <div className="relative min-w-[40px] h-6 inline-block">
                  <img
                    src="/people-01.png"
                    alt="people"
                    className=" absolute w-6 h-6 top-0 left-0"
                  />
                  <img
                    src="/people-02.png"
                    alt="people"
                    className="absolute w-6 h-6 top-0 left-4"
                  />
                  <img
                    src="/people-03.png"
                    alt="people"
                    className="absolute w-6 h-6 top-0 left-8"
                  />
                </div>
                <span className="text-white text-xs font-normal inline-block">
                  + 264 has joined
                </span>
              </div>
              <h1 className="text-white text-lg font-bold">The Upsiide Down</h1>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
