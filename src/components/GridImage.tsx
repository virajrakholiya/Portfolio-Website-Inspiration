"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger

function GridImage() {
  const data = [
    { id: 1, image: "/image/p1.png", name: "Branding" },
    { id: 2, image: "/image/p2.png", name: "Web Design" },
    { id: 3, image: "/image/p3.png", name: "Unsplash Book" },
    { id: 4, image: "/image/p4.png", name: "Hemp Seed Oil" },
    { id: 5, image: "/image/p5.png", name: "Google" },
    { id: 6, image: "/image/p6.png", name: "Canvas" },
  ];
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#Image", {
      x: 0,
      opacity: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#Image",
      },
    });
  });
  return (
    <div className="mt-10 grid grid-cols-2 grid-rows-3 items-center justify-items-center gap-5 ">
      {data.map((item, index) => {
        return (
          <div
            className="col-span-1 row-span-1 mt-5 translate-x-5 overflow-hidden opacity-0 max-md:col-span-2"
            key={index}
            id="Image"
          >
            <Image
              src={item.image}
              alt=""
              height={450}
              width={500}
              className=" h-[500px] w-[500px] object-cover object-center transition duration-300 hover:scale-105"
            />
            <p className="mt-7">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GridImage;
