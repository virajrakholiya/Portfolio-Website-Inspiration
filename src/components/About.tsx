"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Link from "next/link";
import React from "react";

function About() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#about", {
      y: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: "#about",
      },
    });
  });
  return (
    <div
      className="mt-20 translate-y-10  opacity-0 max-md:mt-10  max-sm:mt-0 "
      id="about"
    >
      <p className="text-4xl max-sm:text-2xl">
        I am Viraj, a highly skilled and experienced creative designer. With a
        passion for creativity and keen eye for detail, I have spent years
        honing my skills in branding, graphic design, and visual communication.
      </p>
      <button className="mt-10 bg-slate-50 p-4 px-5 text-black">
        <Link href={""}>About ME</Link>
      </button>
    </div>
  );
}

export default About;
