"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

function Herotext() {
  useGSAP(() => {
    gsap.to("#text", {
      x: 0,
      opacity: 1,
      duration: 1,
    });
    gsap.to("#main", {
      opacity: 1,
      duration: 1.5,
      stagger: 0.5,
    });
  });
  return (
    <div className="screen  flex  flex-col items-center justify-center pt-10 max-md:h-[80vh] ">
      <div className="flex items-center justify-center gap-5 max-sm:flex-col ">
        <div
          className="flex translate-x-5 items-center justify-center opacity-0 max-sm:text-center "
          id="text"
        >
          {" "}
          <Image
            src="/image/emoji.png"
            height={50}
            width={55}
            alt=""
            className=""
          />
          <h1 className="text-2xl font-medium ">
            Hello, <br />
            I&apos;m Viraj
          </h1>{" "}
        </div>
        <h1
          className="text-[200px] leading-10 opacity-0 max-xl:text-[150px] max-md:text-[100px] max-sm:text-[80px] "
          id="main"
        >
          Creative
        </h1>
      </div>
      <div className="flex items-center justify-center gap-5">
        <h1
          className="text-[200px]  opacity-0 max-xl:text-[150px] max-md:text-[100px] max-sm:ml-5 max-sm:text-[80px]"
          id="main"
        >
          Designer
        </h1>
        <div className="">
          <div className="mt-5 animate-spin opacity-0 max-md:hidden" id="main">
            <Image src="/image/svg.png" alt="" height={150} width={150} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herotext;
