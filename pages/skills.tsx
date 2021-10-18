import React, { ReactElement } from "react";
import Head from "next/head";
import Skills from "@/components/Skills";

// type Props = {};

function skills(): ReactElement {
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
      <section className="flex   justify-between my-20 md:my-30 flex-wrap">
        <div className="flex flex-col">
          <h1 className="text-left font-display md:text-4xl font-bold pb-6 tracking-widest max-w-md">
            Skills 💻:
          </h1>
        <div className="w-[200px] md:w-[400px] ">
        <Skills/>
          {/* <h4 className="text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
            Front-End
          </h4> */}
        </div>
        </div>

      </section>
    </>
  );
}

export default skills;
