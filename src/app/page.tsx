"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import animationData from "../../public/heri-Intro.json";
import scrollAnimation from "../../public/hero-scrollWork.json";
import Link from "next/link";
import dynamic from "next/dynamic";

import { GoArrowUpRight } from "react-icons/go";
import Lottie from "lottie-react";

import { projectData } from "@/constants/projectdata";
import { useTheme } from "@/components/Theme/ThemeContext";
import clsx from "clsx";

const ProjectsSection = dynamic(() => import("@/components/Project"), {
  ssr: false,
});

export default function Home() {
  // Hooks
  const container = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    //In below ["start start"] means ["Container window"]
    offset: ["start start", "end end"],
  });

  // Bg Colour based on theme
  const { theme } = useTheme();
  return (
    <main>
      {/* Home Intro */}
      <section
        id="home"
        className="mx-auto max-w-6xl flex justify-center items-center flex-col px-6 py-4 lg:px-14 md:gap-4"
      >
        <div className="flex w-full h-[240px] md:h-[400px] lg:min-h-screen flex-col justify-center text-gray-800 dark:text-gray-900 items-start md:max-w-3xl gap-3 lg:gap-8 font-medium overflow-hidden">
          <motion.p className="text-2xl md:text-3xl lg:text-4xl tracking-wide">
            Hello I&rsquo;m Ayush Tiwari.
          </motion.p>
          <div className="flex gap-2 lg:gap-4 justify-between items-center">
            <p className="text-5xl  md:text-[120px] lg:text-[140px] lg:leading-[140px]">
              Creative
            </p>
            <div className="max-md:hidden md:block md:h-28 sm:w-40 rounded-[25px] lg:h-40 lg:w-52 lg:rounded-[50px] overflow-hidden flex flex-col items-end justify-start">
              <Lottie animationData={animationData} />
            </div>
          </div>
          <p className="text-5xl  md:text-[120px] lg:text-[140px] lg:leading-[140px]">
            - Developer
          </p>
        </div>
        <div className="flex h-40 lg:h-52 w-full justify-between items-start max-w-3xl gap-10 font-medium ">
          <div className="hidden lg:block relative h-40 w-40 rounded-full">
            <Lottie animationData={scrollAnimation} />
          </div>
          <p className="w-full lg:w-2/3 flex flex-col justify-start gap-3 text-xl  lg:text-2xl text-gray-800 lg:tracking-wide lg:leading-10">
            A creative developer with a passion for crafting digital experiences
            and converting visual ideas into realistic websites.
            <Link
              href="/about"
              className="text-gray-800 text-lg group hover:tracking-widest transition-all duration-400 ease-in-out"
            >
              Read More{" "}
              <GoArrowUpRight className="ml-2 group-hover:animate-bounce inline-block bg-gray-800 h-7 w-7 rounded-full text-white p-1 " />
            </Link>
          </p>
        </div>
      </section>
      {/* Work Section */}

      <section
        id="work"
        className={clsx(
          "min-h-screen bg-[#1e1b1e]  px-4 sm:px-6 py-12 sm:py-24 lg:py-40",
          {
            "bg-gradient-to-b from-[#c2d2be] via-gray-400 to-[#fcdfd6]":
              theme === "light",
          }
        )}
      >
        <h2 className="text-3xl max-w-5xl mx-auto sm:text-4xl lg:text-6xl my-10 dark:text-gray-100">
          Things I&rsquo;ve built..
        </h2>
        <div
          ref={container}
          className="relative flex flex-col items-center justify-center max-w-6xl gap-40 mx-auto my-4 lg:my-28"
        >
          {projectData.map((project, index) => {
            const targetScale = 1 - (projectData.length - index) * 0.05;
            return (
              <ProjectsSection
                key={project.webUrl}
                description={project.description}
                webUrl={project.webUrl}
                imagePath={project.imagePath}
                title={project.title}
                color={project.color}
                index={index}
                range={[index * 0.25, 1]}
                targetScale={targetScale}
                progress={scrollYProgress}
                tags={project.tags}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
