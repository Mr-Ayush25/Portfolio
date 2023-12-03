"use client";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="relative py-14 max-w-7xl mx-auto w-full flex flex-col gap-14 lg:gap-28 px-7">
      <div className="relative mt-10 md:mt-20 lg:mt-24 xl:mt-36 w-full font-semibold text-4xl sm:text-7xl md:text-7xl lg:text-8xl">
        <h1>
          Let&rsquo;s talk about our <br /> next project.
        </h1>
        <div className="hidden md:block relative">
          <Image
            src="/arrow.svg"
            height={120}
            width={100}
            alt="Contact"
            className="absolute left-[5%] top-14"
          />
        </div>
      </div>
      <div className="mx-auto max-w-3xl h-full w-full">
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
