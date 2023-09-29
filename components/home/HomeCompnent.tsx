"use client";

import { iconAnim } from "@/animations/iconAnimations";
import { secondaryTextAnim, textAnim } from "@/animations/textAnimations.";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const HomeCompnent = (props: Props) => {
  return (
    <div className="w-full h-screen flex flex-col items-center lg:flex-row lg:justify-start">
      <div className="w-full text-center lg:text-start pt-32 lg:pt-0 px-5 space-y-10 lg:w-3/5 xl:2/3 lg:px-14 xl:px-1">
        <motion.h1
          variants={textAnim}
          initial="hidden"
          animate="show"
          className="text-3xl font-medium lg:text-4xl xl:text-5xl">
          Hey! I'm Xela <span className="dark:hidden">🌞</span>
          <span className="hidden dark:inline">✨</span>
        </motion.h1>
        <motion.h2
          variants={secondaryTextAnim}
          transition={{
            delay: 1,
          }}
          initial="hidden"
          whileInView="show"
          className="text-lg font-light xl:text-2xl">
          A creative developer with a deep passion for merging art and
          technology to create awe-inspiring experiences.
        </motion.h2>

        <motion.p
          variants={secondaryTextAnim}
          transition={{
            delay: 1,
          }}
          initial="hidden"
          whileInView="show"
          className="mt-3 font-light lg:text-lg hidden lg:flex">
          As an adventurous, forward-thinking creative developer who embraces
          the fusion of technology and art to shape unforgettable experiences.
          Let's collaborate, innovate, and explore new horizons together!
        </motion.p>
      </div>

      <div className="mt-10 relative lg:w-2/5 lg:flex lg:justify-end lg:px-14 xl:1/3 xl:px-1">
        <motion.div
          className="absolute lg:hidden -left-5"
          variants={iconAnim}
          initial="initial"
          animate={"pulse"}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <CodeBracketIcon className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute lg:hidden -right-5"
          variants={iconAnim}
          initial="initial"
          animate={"pulse"}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
          }}>
          <PaintBrushIcon className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute lg:hidden -left-8 bottom-0"
          variants={iconAnim}
          initial="initial"
          animate={"pulse"}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
          }}>
          <DevicePhoneMobileIcon className="w-6 h-6" />
        </motion.div>
        <motion.div
          className="absolute lg:hidden -right-8 bottom-0"
          variants={iconAnim}
          initial="initial"
          animate={"pulse"}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <GlobeAltIcon className="w-6 h-6" />
        </motion.div>

        <Image
          width={100}
          height={100}
          className="w-52 h-56 hidden dark:flex md:w-60 md:h-64 lg:w-72 lg:h-80 xl:w-[400px] xl:h-[400px]"
          src={"/assets/LaptopCode.svg"}
          alt="Laptop"
        />

        <Image
          width={100}
          height={100}
          className="w-52 h-56 dark:hidden md:w-60 md:h-64 lg:w-72 lg:h-80 xl:w-[400px] xl:h-[400px]"
          src={"/assets/LaptopLight.svg"}
          alt="Laptop"
        />
      </div>
    </div>
  );
};

export default HomeCompnent;
