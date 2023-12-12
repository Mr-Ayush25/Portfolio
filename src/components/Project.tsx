import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrSubtract } from "react-icons/gr";

type Props = {
  imagePath: string;
  title: string;
  description: string;
  webUrl: string;
};

const Project = ({ imagePath, title, description, webUrl }: Props) => {
  return (
    <article className="h-fit w-full group max-sm:bg-slate-800 max-sm:pt-8">
      <div className="relative h-[90vh] lg:h-[80vh] w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="relative h-[80%] w-full md:w-[80%] rounded-[2%] md:rounded-[5%] max-md:-translate-x-5  overflow-hidden border border-black">
          <Image
            src={imagePath}
            alt={title}
            fill
            quality={100}
            priority
            className="object-cover lg:object-fill lg:group-hover:scale-105 transition-all duration-300 ease-in-out"
          ></Image>
        </div>
        <div className="h-[50%] border border-black lg:h-[65%] p-2 lg:p-10 w-full md:w-[60%] lg:w-[60%] rounded-[2%] md:rounded-[5%] max-md:translate-x-3 max-md:-translate-y-20 max-lg:-translate-y-14 text-gray-900 lg:-translate-x-14 bg-white dark:bg-gray-200 flex-col flex items-start justify-start gap-4 ">
          <h1 className="text-2xl lg:text-3xl font-semibold ">{title}</h1>
          <div className="w-full h-full flex justify-between flex-col gap-2 lg:gap-4 items-center text-[1rem] md:text-lg py-1">
            <p className="line-clamp-5 lg:line-clamp-6 tracking-wide">
              {description}
            </p>
            <Link
              href={webUrl}
              className="w-full group-hover:tracking-wider group-hover:font-semibold transition-all duration-300 ease-in-out self-start flex items-center"
              target="blank"
            >
              <GrSubtract className="inline-block transition-all duration-200 ease-in-out group-hover:h-8 group-hover:w-12" />
              Discover
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
