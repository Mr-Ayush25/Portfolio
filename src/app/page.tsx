"use client";

import React from "react";
import animationData from "../../public/heri-Intro.json";
import scrollAnimation from "../../public/hero-scrollWork.json";
import { LiaTelegramPlane } from "react-icons/lia";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Link from "next/link";
import Project from "@/components/Project";
import { projectData } from "@/constants/projectdata";

export default function Home() {
  return (
    <main>
      {/* Home Intro */}
      <section
        id="home"
        className="mx-auto max-w-6xl flex justify-center items-center flex-col px-7 py-4 sm:px-14"
      >
        <div className="flex w-full h-[250px] sm:h-[350px] lg:min-h-screen flex-col justify-center text-gray-800 items-start sm:max-lg:items-center lg:max-w-3xl gap-3 lg:gap-8 font-medium overflow-hidden">
          <motion.p className="text-2xl sm:text-4xl tracking-wide">
            Hello I&rsquo;m Ayush Tiwari.
          </motion.p>
          <div className="flex gap-4">
            <p className="text-6xl sm:text-8xl lg:text-[140px] lg:leading-[140px]">
              Creative
            </p>
            <div className="max-sm:hidden sm:block sm:h-28 sm:w-40 rounded-[25px] lg:h-40 lg:w-52 lg:rounded-[50px] overflow-hidden flex flex-col items-end justify-start">
              <Lottie animationData={animationData} />
            </div>
          </div>
          <p className="text-6xl sm:text-8xl lg:text-[140px] lg:leading-[140px]">
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
              className="text-gray-800 text-lg hover:tracking-widest transition-all duration-400 ease-in-out"
            >
              Read More{" "}
              <LiaTelegramPlane className="ml-2 inline-block bg-gray-800 h-7 w-7 rounded-full text-white p-1 " />
            </Link>
          </p>
        </div>
      </section>
      {/* Work Section */}
      <section
        id="work"
        className="min-h-screen bg-[#e9a6d8]  dark:bg-gray-500  px-7 sm:px-14  py-12 sm:py-24 lg:py-40"
      >
        <h2 className="text-3xl max-w-5xl mx-auto sm:text-4xl lg:text-6xl my-10 dark:text-gray-100">
          Things I&rsquo;ve built..
        </h2>
        <div className="flex flex-col items-center justify-center max-w-6xl gap-40 mx-auto ">
          {projectData.map((project) => (
            <Project
              key={project.webUrl}
              description={project.description}
              webUrl={project.webUrl}
              imagePath={project.imagePath}
              title={project.title}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
