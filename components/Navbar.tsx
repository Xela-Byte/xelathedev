"use client";
import { container, item } from "@/animations/navbarAnimations";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
type Props = {};

const Navbar = ({}: Props) => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);
  return (
    <>
      <div className="w-full px-6 pt-8 md:px-16 flex items-center justify-between md:justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src={"/assets/xelaLogoRounded.png"}
            width={60}
            height={60}
            className="w-11 h-11 rounded-full dark:border-2 dark:border-white"
            alt="Xela Logo"
            priority
          />
          <p className="text-2xl text-dark-primary dark:text-primary font-medium">
            Xela
          </p>
        </div>

        <div className="hidden lg:flex items-center w-2/3 justify-evenly">
          <Link
            className="text-xl text-dark-primary dark:text-primary dark:font-normal font-medium"
            href={"#"}>
            Home
          </Link>
          <Link
            className="text-xl text-dark-primary dark:text-primary dark:font-normal font-medium"
            href={"#"}>
            About Us
          </Link>
          <Link
            className="text-xl text-dark-primary dark:text-primary dark:font-normal font-medium"
            href={"#"}>
            Our Services
          </Link>
        </div>

        <button className="px-5 py-2 text-xl bg-text-primary text-white rounded-md font-semibold hidden lg:block">
          <a href="#contact">Let's talk!</a>
        </button>
        <AnimatePresence>
          <div
            className="z-20 lg:hidden"
            onClick={() => {
              setToggleNavbar(!toggleNavbar);
            }}>
            {toggleNavbar ? (
              <motion.div
                whileTap={{
                  transform: "rotate(45deg)",
                }}
                exit={{
                  transform: "rotate(135deg)",
                }}>
                <XMarkIcon className="h-8 w-8" />
              </motion.div>
            ) : (
              <motion.div
                whileTap={{
                  transform: "rotate(135deg)",
                }}
                exit={{
                  transform: "rotate(45deg)",
                }}>
                <Bars3BottomRightIcon className="h-8 w-8 text-dark-primary dark:text-primary" />
              </motion.div>
            )}
          </div>
        </AnimatePresence>
      </div>

      {toggleNavbar && (
        <AnimatePresence>
          <motion.div
            initial={{
              opacity: 0,
              right: "-100vw",
            }}
            animate={{
              opacity: 1,
              right: 0,
            }}
            exit={{
              opacity: 0,
              left: "100vw",
            }}
            className="fixed lg:hidden w-2/3 sm:w-1/2 h-full top-0 right-0 my-5 pt-20 px-10 z-10 backdrop-blur-sm">
            <motion.ul
              className={`w-full space-y-10 py-5`}
              variants={container}
              initial="hidden"
              animate="show">
              <motion.li className="text-xl font-semibold" variants={item}>
                Home
              </motion.li>
              <motion.li className="text-xl font-semibold" variants={item}>
                About Us
              </motion.li>
              <motion.li className="text-xl font-semibold" variants={item}>
                Our Services
              </motion.li>
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Navbar;
