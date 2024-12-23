// import Image from "next/image";

import Navbar from "@/components/Navbar";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Home from "@/pages/Home";
import Services from "@/pages/Services";

export default function PagesWrapper() {
  return (
    <div className="p-4">
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Services />
    </div>
  );
}
