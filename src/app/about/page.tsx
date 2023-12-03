"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const Skills = dynamic(() => import("@/components/SkillTab"));

const About = () => {
  return (
    <>
      <section className="relative max-w-6xl mx-auto w-full flex flex-col gap-14 lg:gap-28 px-7">
        <div className="flex flex-col justify-center max-sm:h-[550px] lg:justify-start items-start w-full gap-8 lg:gap-12 xl:gap-20">
          <div className="relative flex flex-col md:mt-20 lg:mt-28 xl:mt-40 w-full h-1/3 justify-center xl:justify-start items-center font-semibold text-7xl md:flex-row sm:text-[116px] lg:text-[140px] lg:leading-[140px] xl:text-[160px] xl:leading-[160px] gap-6 lg:gap-8">
            <motion.h1
              animate={{ opacity: [0, 1], y: [-100, 0] }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 0.2,
              }}
            >
              Hey!
            </motion.h1>
            <motion.h2
              animate={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{
                type: "tween",
                stiffness: 120,
                duration: 0.3,
                delay: 0.3,
              }}
            >
              I&rsquo;m
            </motion.h2>
            <motion.img
              animate={{ opacity: [0, 1], y: [100, 0] }}
              transition={{
                type: "tween",
                stiffness: 40,
                duration: 0.3,
                delay: 0.7,
              }}
              src="/Hero.png"
              className="h-64 w-64 rounded-full object-contain md:hidden bg-gray-900"
            ></motion.img>
            <motion.img
              animate={{ opacity: [0, 1], y: [100, 0] }}
              transition={{
                type: "tween",
                stiffness: 40,
                duration: 0.3,
                delay: 0.8,
              }}
              src="/dots.svg"
              alt="arrow"
              height={60}
              width={60}
              className="md:hidden absolute right-10 top-0 sm:top-64 sm:right-52"
            />
            <motion.h2
              animate={{ opacity: [0, 1], x: [-100, 0] }}
              transition={{
                type: "tween",
                stiffness: 120,
                duration: 0.3,
                delay: 0.5,
              }}
            >
              Ayush
            </motion.h2>
          </div>
          <motion.div
            className="relative rounded-2xl hidden md:block md:self-end md:h-[300px] md:w-[600px] lg:h-[400px] lg:w-[700px] xl:h-[500px] xl:w-[800px] bg-gray-100 mr-6"
            animate={{ opacity: [0, 1] }}
            transition={{
              ease: "easeIn",
              duration: 0.2,
              delay: 0.8,
            }}
          >
            <Image
              src="/arrow.svg"
              alt="arrow"
              height={100}
              width={90}
              className="absolute -left-32 lg:-left-48 -top-5"
            />
            <Image
              src="/Hero.png"
              alt="Hero"
              quality={100}
              fill
              className="object-contain"
            />
            <Image
              src="/dots.svg"
              alt="arrow"
              height={80}
              width={90}
              className="max-xl:hidden xl:block absolute xl:-right-20 -top-20"
            />
          </motion.div>
        </div>
        <motion.div className="max-lg:max-w-5xl mx-auto pb-10">
          <h2 className="text-gray-900 text-2xl tracking-wide leading-10 md:text-3xl md:leading-[46px] lg:lg:leading-[60px]">
            🌟 I&rsquo;m Ayush Tiwari, a Computer Science graduate from Mumbai,
            kind of a wizard with computers.
            <br />
            <br />
            I spend my time creating cool things with codes. But wait, there is
            more to me than just coding!. I&rsquo;m an adventure seeker, a
            kitchen magician with Indian dishes, and a movie buff.
            <br />
            <br />
            Let&rsquo;s connect and create magic together! ✨
          </h2>
        </motion.div>
      </section>
      <section className="bg-[#eaa6a6] dark:bg-orange-400 w-full flex flex-col justify-center items-start text-gray-900 md:text-7xl lg:text-8xl overflow-hidden transition-all ease-in-out duration-300">
        <div className="max-w-6xl mx-auto px-6 w-full py-8 ">
          <h2 className="font-semibold text-3xl tracking-wide leading-10 md:text-3xl lg:lg:leading-[60px]">
            How I build things ?
          </h2>
          <p className="text-gray-900 text-2xl tracking-wide leading-10 md:text-3xl lg:lg:leading-[60px] mt-6">
            Here are a few technologies I&rsquo;ve been working with recently:
          </p>
        </div>
        <Skills />
      </section>
    </>
  );
};

export default About;
