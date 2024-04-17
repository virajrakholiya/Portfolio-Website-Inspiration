"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const menu = [
    {
      id: 1,
      name: "Work",
    },
    {
      id: 2,
      name: "Case Study",
    },
    {
      id: 3,
      name: "About",
    },
    {
      id: 4,
      name: "Contact",
    },
    {
      id: 5,
      name: "virajrakholiya14@gmail.com",
    },
  ];
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };
  useGSAP(() => {
    gsap.to("#navlink", {
      opacity: 1,
      y: 0,
      duration: 2,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="flex items-center justify-between  py-5 ">
      <div className="translate-y-5 font-medium opacity-0" id="navlink">
        Viraj <br /> -Rakholiya
      </div>
      <div className="flex gap-10 max-lg:hidden">
        {menu.map((item, index) => {
          return (
            <div key={index}>
              {item.id == 5 ? (
                <div
                  id="navlink"
                  className=" flex translate-y-5 items-center gap-2 opacity-0 "
                >
                  <MdOutlineEmail size={20} />
                  <Link href={""} className="">
                    {item.name}
                  </Link>
                </div>
              ) : (
                <div id="navlink" className="translate-y-5 opacity-0">
                  {" "}
                  <Link href={"/"}>{item.name}</Link>
                </div>
              )}
            </div>
          );
        })}
      </div>{" "}
      <div
        className="relative hidden translate-y-5 opacity-0 max-lg:block"
        id="navlink"
        onClick={toggle}
      >
        <RxHamburgerMenu size={30} />
        {show && (
          <div className="absolute right-0 mt-2 flex flex-col  gap-2 bg-slate-100 text-2xl">
            {menu.map((item, index) => {
              return (
                <div key={index} className="z-50 p-5 text-right text-black">
                  <Link href={""}>{item.name}</Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
