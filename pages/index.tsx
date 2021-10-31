import React, { useState } from "react";
import Head from "next/head";
import { Hello } from "@/components/Hello";
import { motion } from "framer-motion";

function IndexPage(): JSX.Element {
  const [isHovered1, setHovered1] = useState(false);

  return (
    <>
      <html lang="en"></html>
      <Head>
        <title> Software Enginner | Full Stack Developer</title>
        <link rel="icon" href="/vu.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <section className="flex  justify-between my-20 md:my-30 flex-wrap">
        <div className="relative  sm:w-2/3 ">
          {/* <div className="flex flex-col h-screen container mx-auto  "> */}
          {/* <Navbar/> */}
          <motion.div
            className="   " //
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 50 }}
          >
            <Hello prop="vulture" />
          </motion.div>
        </div>
        <div className="hidden sm:inline md:relative ">
          <div className="bg-pur   rounded-lg  ">
            <motion.div
              className="relative cursor-pointer  "
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
              style={{
                translateX: isHovered1 ? 10 : 0,
                translateY: isHovered1 ? -6 : 0,
                transition: isHovered1
                  ? "all 0.5s ease-in-out"
                  : "all 0.3s ease-in-out",
              }}
            >
              <motion.div
                className=""
                onMouseEnter={() => {
                  setHovered1(true);
                }}
                onMouseLeave={() => {
                  setHovered1(false);
                }}
              >
                <img
                  src="me.jpg"
                  width="100%"
                  height="100%"
                  className="hidden sm:inline md:relative w-48 h-46  rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndexPage;
