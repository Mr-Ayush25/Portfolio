import React from "react";

const Project = () => {
  return (
    <article className="sticky top-24 w-full">
      <div className="relative h-[80vh] w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="h-[80%] w-full md:w-[80%] rounded-[2%] md:rounded-[5%] max-md:-translate-x-5 bg-black"></div>
        <div className="h-[70%] w-full md:w-[60%] lg:w-[60%] rounded-[2%] md:rounded-[5%] max-md:translate-x-3 max-md:-translate-y-20 max-lg:-translate-y-14 lg:-translate-x-14 bg-white"></div>
      </div>
    </article>
  );
};

export default Project;
