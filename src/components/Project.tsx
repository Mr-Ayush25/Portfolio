"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type Props = {
  imagePath: string;
  title: string;
  description: string;
  webUrl: string;
  color: string;
  index: number;
  range: [number, number];
  targetScale: number;
  tags: Array<string>;
  progress: MotionValue<number>;
};

const Project = ({
  imagePath,
  title,
  description,
  webUrl,
  color,
  index,
  range,
  targetScale,
  progress,
  tags,
}: Props) => {
  // Hooks
  const container = useRef(null);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 550px)").matches
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 550px)").matches);
    });
  }, [isMobile]);

  // Framer-Motion hooks
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "start start"],
  });

  // To scale as per view
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const cardScale2 = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div
      ref={container}
      style={{
        scale: cardScale2,
        top: isMobile ? "100px" : `${index * 25}px`,
      }}
      className={`h-[720px] max-w-[1200px] flex justify-center items-center sticky`}
    >
      <div
        style={{ backgroundColor: color }}
        className="relative bg-red-500 h-full md:h-3/4 lg:h-4/5 w-full rounded-2xl md:rounded-3xl flex flex-col border-gray-400 hover:shadow-2xl hover:border shadow-gray-600 dark:hover:shadow-slate-700 transition-all duration-150 ease-in-out"
      >
        <div className="flex h-full w-full flex-col-reverse md:flex-row justify-center items-center gap-2 lg:gap-4 p-4 xl:px-12">
          <div className="flex h-1/2 md:w-2/4 lg:w-2/5 md:h-full flex-col justify-center gap-3 md:gap-5 xl:gap-8">
            <div className="flex w-full items-center justify-start text-3xl lg:text-4xl text-black font-bold">
              {title}
            </div>
            <div className="text-[17px] max-lg:leading-7 lg:text-lg text-black font-medium line-clamp-5 md:line-clamp-7">
              {description}
            </div>
            <div className="flex gap-3 flex-wrap">
              {tags.map((tag, index) => (
                <li
                  className="px-3 bg-black/[0.8] py-1 text-xs uppercase tracking-wider text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </div>
            <Link
              href={webUrl}
              target="blank"
              className="text-xl bg-black flex justify-center items-center py-2 px-6 rounded-full hover:tracking-wide hover:bg-black/80 text-white transition-all duration-200 ease-in-out group"
            >
              Visit Live
            </Link>
          </div>
          <div className="flex h-1/2 w-full md:w-2/4 xl:w-3/5 md:h-full shrink-0 rounded-2xl overflow-hidden">
            <motion.div
              style={{ scale: imageScale }}
              className="relative h-[90%] md:h-[80%] w-full m-auto rounded-2xl overflow-hidden"
            >
              <Image
                src={imagePath}
                fill
                alt="Sorry!"
                className="object-cover md:object-fill"
              ></Image>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
