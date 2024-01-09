"use client";
import Link from "next/link";
import React, { useEffect } from "react";

import { clsx } from "clsx";
import { RiMenu4Line } from "react-icons/ri";
import { FaRegMessage } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
import { links } from "@/constants/navdata";

const Header = () => {
  const [toggleMobileNav, setToggleMobileNav] = React.useState<Boolean>(false);
  const [scrollPosition, setScrollPosition] = React.useState<number>(0);
  // To enable and disable Mobile Nav
  const [toggleMenu, setToggleMenu] = React.useState<Boolean>(false);

  useEffect(() => {
    // To update the value of scrollposition
    const handleScroll = () => {
      // If we are on mobile device do nothing

      if (window.matchMedia("(max-width: 600px)").matches) return;
      else setScrollPosition(window.scrollY);
      // console.log(window);
      scrollPosition >= 120
        ? setToggleMobileNav(true)
        : setToggleMobileNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  // To handle animation on NAV
  const menu = {
    open: {
      width: "370px",
      height: "400px",
      transition: { duration: 0.3, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },

    closed: {
      display: "hidden",
    },
  };

  return (
    <header className="fixed z-20 h-24 p-2 sm:px-6 lg:pt-6 lg:px-12 w-full">
      <nav className="relative w-full h-full flex text-xl font-bold justify-between items-center max-lg:bg-gray-100/80 max-lg:rounded-2xl max-lg:px-3">
        <Link
          href="/"
          className={`cursor-pointer ${
            scrollPosition >= 1000 &&
            scrollPosition <= 4100 &&
            "dark:text-white"
          }`}
        >
          Ayush <br /> - Tiwari
        </Link>
        {/* Desktop */}
        <div
          className={clsx(
            "max-sm:hidden relative flex text-center font-medium text-md gap-6 md:gap-12 items-center justify-between h-full",
            { "hidden ": toggleMobileNav }
          )}
        >
          <Link href="/#work" className="relative group">
            <p className="hover:scale-110 transition-all ease-in-out duration-200">
              Work
            </p>
            <div className="absolute -bottom-5 left-1/2 font-extrabold hidden group-hover:flex">
              &#x2022;
            </div>
          </Link>
          <Link href="/about" className="relative group">
            <div className="group-hover:scale-110 transition-all ease-in-out duration-200">
              About
            </div>
            <div className="absolute -bottom-5 left-1/2 font-extrabold hidden group-hover:flex">
              &#x2022;
            </div>
          </Link>
          <Link href="/contact" className="relative group">
            <div className="group-hover:scale-105 transition-all ease-in-out duration-200">
              Contact
            </div>
            <div className="absolute -bottom-5 left-1/2 font-extrabold hidden group-hover:flex">
              &#x2022;
            </div>
          </Link>
        </div>

        {/* Mobile */}
        <div
          className={clsx(
            `max-sm:flex relative effect-container h-12 w-12 rounded-full border-2 border-black cursor-pointer flex justify-center items-center group transition-all duration-300 ease-in-out z-50 ${
              scrollPosition >= 1000 &&
              scrollPosition <= 4100 &&
              "dark:text-white dark:border-white"
            }`,
            { hidden: !toggleMobileNav }
          )}
          onMouseEnter={(e) => {
            if (window.matchMedia("(max-width: 576px)").matches) return;
            e.currentTarget.classList.add("ripplespan");
          }}
          onMouseLeave={(e) => {
            if (window.matchMedia("(max-width: 576px)").matches) return;
            e.currentTarget.classList.remove("ripplespan");
          }}
          onClick={(e) => {
            setToggleMenu((prev) => !prev);
          }}
        >
          {!toggleMenu ? (
            <RiMenu4Line className="font-semibold z-50 sm:group-hover:text-white" />
          ) : (
            <CgClose className="font-semibold z-50 sm:group-hover:text-white" />
          )}
        </div>

        {toggleMenu && (
          <motion.div
            variants={menu}
            animate={toggleMenu ? "open" : "closed"}
            className={`absolute rounded-xl border-2 border-black h-full bg-white dark:bg-gray-200 -right-1 top-0 lg:-right-3`}
          >
            <div className="flex flex-col items-start p-5 justify-center gap-5 h-full">
              {links.map((link, i) => (
                <motion.div
                  key={link.title}
                  animate={{ opacity: [0, 1], y: [0, 10] }}
                  className="text-4xl lg:text-5xl hover:text-orange-500 group"
                  transition={{
                    ease: "easeIn",
                    duration: 0.2,
                    delay: 0.3 + Number(`0.${i}`),
                  }}
                >
                  <Link
                    className="group-hover:tracking-wider transition-all duration-400 ease-in-out"
                    href={link.href}
                    onClick={() => setToggleMenu(false)}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                className="bg-black cursor-pointer text-white rounded-full h-10 w-10 p-1 self-end flex justify-center items-center hover:bg-orange-500 transition-all duration-200 ease-in-out "
                animate={{ opacity: [0, 1], y: [0, 10] }}
                transition={{ delay: 0.8 }}
                href="mailto:mr.ayush1125@gmail.com"
              >
                <FaRegMessage className="h-4 w-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;
