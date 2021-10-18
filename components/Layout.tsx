import React, { FC, ReactNode } from "react";
import { NextSeo } from "next-seo";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = (props: Props) => {
  return (
    <>
      <NextSeo
        titleTemplate="Mohamed Salbi | %s"
        description="Hey, my name is Mohamed Salbi, Software Engineer, Full Stack Developer, Game Developer !"
      />
      <div className="flex flex-col h-screen container mx-auto px-6">
        <Navbar />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
