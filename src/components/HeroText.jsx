import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Websites", "dApps", "APIs", "Backends", "Interfaces"];

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    // <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
    <div className="z-10 text-center md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      {/* <div className="flex-col hidden md:flex c-space"> */}
      <div className="hidden md:flex flex-col c-space max-w-3xl self-start md:self-auto">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm Lakshay
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Full-Stack & Web3 Developer <br /> Building Scalable
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            for the Modern Internet
          </motion.p>
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm Lakshay
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Websites", "dApps", "APIs", "Backends", "Interfaces"]}
              className="font-bold text-white text-7xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-neutral300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            with Modern Tech
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
