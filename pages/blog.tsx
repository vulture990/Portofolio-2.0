import React, { ReactElement } from "react";
import Head from "next/head";

// type Props = {};

function blog(): ReactElement {
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
      <section className="flex  justify-between my-20 md:my-30 flex-wrap">
      <div>
      <h4 className="flex flex-row text-left text-paragraph  font-display text-lg sm:text-2xl  font-normal  italic">
      📝  Blogs go here , COMMING SOON x)
        </h4>
      </div>
      </section>
    </>
  );
}

export default blog;
