// import Image from "next/image";

import Navbar from "@/components/Navbar";
import Home from "@/pages/Home";

export default function PagesWrapper() {
  return (
    <div className="mx-6 my-3">
      <Navbar />
      <Home />
    </div>
  );
}
