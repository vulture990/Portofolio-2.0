import React, { FC } from "react";
import { Navbarcomponent } from "@/interfaces";
import { Logo } from "./Logo";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Socialcons from "./Socialcons";
import HambergerBox from "./HambergerBox";
import Paths from "./Paths";
import Routes from "./Routes";

const navComponent: Navbarcomponent[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Skills",
    path: "/skills",
  },
  {
    title: "Project",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Navbar: FC = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <>
      <nav className="flex   items-center  justify-between ">
        <div className="cursor-pointer">
          <a href="/">
            <Logo />
          </a>
        </div>
        <motion.div
          className="flex flex-row "
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <div className="sm:hidden mr-10 sm:mr-0">
            <HambergerBox toggle={() => toggleOpen()} />
          </div>
        </motion.div>
        <div className="hidden sm:flex font-display flex-row">
          <Routes links={navComponent} />
          <Socialcons className="inline-flex  sm:mr-3  " />
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <Paths
            links={navComponent}
            toggle={() => toggleOpen()}
            key={"hamberger"}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
