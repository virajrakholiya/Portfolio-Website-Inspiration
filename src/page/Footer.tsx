"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Footer() {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to("#text", {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: "footer",
      },
    });
  });
  return (
    <div>
      <footer
        className="flex -translate-x-5 flex-row items-center justify-evenly gap-10 bg-main p-10 opacity-0 max-md:flex-col max-md:text-center"
        id="text"
      >
        <p>© VIRAJ RAKHOLIYA</p>
        <p>
          +91 9313134192
          <br />
          virajrakholiya14@gmail.com
        </p>
        <p className="max-md:hidden">
          Surat Gujarat <br />
          India.
        </p>
        <div className="flex gap-5">
          <Link href={"https://www.instagram.com/viraj._.98/"} target="_blank">
            Instagram
          </Link>
          <Link href={"https://twitter.com/virajrakholiya2"} target="_blank">
            Twitter
          </Link>
          <Link
            href={"https://www.linkedin.com/in/viraj-rakholiya/"}
            target="_blank"
          >
            Linkedin
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
