"use client";
import Image from "next/image";
import React from "react";
import FootballField from "../../public/field.jpeg";
import MiddleText from "./components/middle-text";
import { BsTwitterX } from "react-icons/bs";
import { FaMedium } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LuLoader2 } from "react-icons/lu";

const LandingPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);

  return (
    <div className="">
      <LuLoader2 className="animate-spin" />
    </div>
    // <div className="bg-[#160023] overflow-hidden h-screen">
    //   <div className=" justify-center  flex max-w-screen">
    //     <div className="md:w-full  fixed  bg-[#160023] w-screen  md:min-h-screen  text-auto justify-center md:flex">
    //       <Image
    //         className=" scale-[3] overflow-hidden  mt-[75%] top-1/2 md:top-0  aspect-video  md:scale-100 md:relative w-screen md:w-[96vw] md:mt-0 "
    //         src={FootballField}
    //         alt="football-field"
    //       />
    //       <div className="w-full fixed gap-3 md:left-auto mx-auto justify-center flex top-5">
    //         <Link
    //           className=" shadow-glow md:bg-opacity-35 bg-black hover:bg-white hover:text-black text-white shadow-white rounded-lg flex border p-2 top-10 items-center"
    //           href={"https://twitter.com/playfutsol"}
    //           target="blank"
    //         >
    //           <BsTwitterX className="" size={16} />
    //           <p className=" font-thin pl-1">playfutsol</p>
    //         </Link>

    //         <Link
    //           className=" shadow-glow md:bg-opacity-35 bg-black hover:bg-white hover:text-black text-white shadow-white rounded-lg flex border p-2 top-10 items-center"
    //           href={"https://medium.com/@playfutsol"}
    //           target="blank"
    //         >
    //           <FaMedium className="" size={20} />
    //           <p className=" font-thin pl-1">playfutsol</p>
    //         </Link>
    //       </div>

    //       <MiddleText />
    //     </div>
    //   </div>
    // </div>
  );
};

export default LandingPage;
