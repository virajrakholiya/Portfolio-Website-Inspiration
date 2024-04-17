import Navbar from "@/components/Navbar";
import Contect from "@/page/Contect";
import Footer from "@/page/Footer";
import Herosection from "@/page/Herosection";
import Work from "@/page/Work";
import React from "react";

function page() {
  return (
    <>
      <div className="overflow-x-hidden px-24 text-white max-sm:px-10">
        <Navbar />
        <Herosection />
        <Work />
        <Contect />
      </div>
      <div className="overflow-x-hidden">
        <Footer />
      </div>
    </>
  );
}

export default page;
