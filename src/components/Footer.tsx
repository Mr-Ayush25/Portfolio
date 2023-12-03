"use client";
import React from "react";
import Lottie from "lottie-react";
import footerAnimation from "../../public/footer.json";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={`relative flex flex-col h-[500px] sm:h-[620px] lg:h-screen justify-center items-center max-sm:mb-14`}
    >
      <Lottie
        animationData={footerAnimation}
        className="h-[300px] lg:h-[450px]"
      />
      <div className="max-w-2xl flex flex-col items-center justify-center gap-8 -translate-y-10 lg:-translate-y-20 text-gray-800">
        <h2 className="text-5xl md:text-7xl font-medium lg:text-9xl ">
          Say Hello.
        </h2>
        <div className="flex justify-center flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:mr.ayush1125@gmail.com"
            className="text-xl bg-white py-2 px-6 rounded-full hover:tracking-wide hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out group"
          >
            Mr.ayush1125@gmail.com
            <LiaTelegramPlane className="h-5 w-5 inline-block ml-2" />
          </a>
          <a
            href="#"
            download="#"
            className="text-xl bg-white py-2 px-6 rounded-full hover:tracking-wide hover:bg-orange-500 hover:text-white transition-all duration-200 ease-in-out group"
          >
            Resume
            <FaDownload className="h-4 w-4 inline-block ml-2" />
          </a>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Link
            href=""
            target="blank"
            prefetch={false}
            className="hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaGithub className="h-6 w-6 rounded-full bg-white" />
          </Link>
          <Link
            href=""
            target="blank"
            prefetch={false}
            className="bg-gray-900 p-1 rounded-full text-white hover:scale-110 transition-all duration-200 ease-in-out"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <p className="text-gray-600">&#169; Ayush Tiwari | 2023</p>
      </div>
    </div>
  );
};

export default Footer;
