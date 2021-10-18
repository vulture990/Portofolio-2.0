import React, { useState } from "react";
import Head from "next/head";
import { Hello } from "@/components/Hello";
import { motion } from "framer-motion";

function IndexPage(): JSX.Element {
  const [isHovered1, setHovered1] = useState(false);

  return (
    <>
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

      <section className="flex  justify-between my-20 md:my-40 flex-wrap">
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
        <motion.div
          className="relative cursor-pointer  "
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{
            y: isHovered1 ? 0 : 30,
            transition: isHovered1
              ? "all 0.5s ease-in-out"
              : "all 0.2s ease-in-out",
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
              src="me.svg"
              className="hidden sm:inline md:relative rounded-full   shadow-xl"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}

export default IndexPage;
