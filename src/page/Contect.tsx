"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contect() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#img", {
      x: 0,
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#img",
        start: "top 60%",
      },
    });
    gsap.to("#Text", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "bounce",
      scrollTrigger: {
        trigger: "#Text",
      },
    });
  });
  return (
    <>
      <div className="relative flex h-screen items-center justify-center max-lg:h-[50vh]">
        <div className="translate-y-5 text-center opacity-0" id="Text">
          <h1 className="text-center text-5xl">
            Let&apos;s Create <br />
            Something Great
          </h1>
          <button className="mt-7 border border-white bg-white p-3 px-5 text-main transition-colors duration-300 hover:bg-black hover:text-white">
            <Link href={""}>Connect With Me</Link>
          </button>
        </div>
        <div className="max-lg:hidden">
          <div
            className="absolute top-[10%] flex h-[100px] w-[100px] translate-x-5 items-center justify-center rounded-full bg-white opacity-0"
            id="img"
          >
            <Image src={"/Image/f1.png"} alt="" height={70} width={70}></Image>
          </div>
          <div
            className="absolute left-[10%] top-[60%] flex h-[100px] w-[100px] translate-x-5 items-center justify-center rounded-full bg-white opacity-0"
            id="img"
          >
            {" "}
            <Image src={"/Image/f2.png"} alt="" height={70} width={70}></Image>
          </div>
          <div
            className="absolute left-[20%] top-[10%] flex h-[100px] w-[100px] translate-x-5 items-center justify-center rounded-full bg-white opacity-0"
            id="img"
          >
            {" "}
            <Image src={"/Image/f3.png"} alt="" height={70} width={70}></Image>
          </div>
          <div
            className="absolute left-[80%] top-[60%] flex h-[100px] w-[100px] translate-x-5 items-center justify-center rounded-full bg-white opacity-0"
            id="img"
          >
            {" "}
            <Image src={"/Image/f4.png"} alt="" height={70} width={70}></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contect;
