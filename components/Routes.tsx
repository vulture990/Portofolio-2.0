import React, { FC } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/router";
import { Navbarcomponent } from "@/interfaces";

type Props = {
  links: Navbarcomponent[];
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { default: { duration: 1 } } },
};

const Routes: FC<Props> = (props: Props) => {
  const router = useRouter();
  const linkBaseStyle =
    "mr-4 cursor-pointer border-b-4  hover:border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";
  const linkProps = {
    variants: item,
  };
  return (
    <>
      <motion.div
        className="flex flex-row text-lg"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {props.links.map((link) => {
          return (
            <Link href={link.path} key={link.title} passHref>
              <motion.a
                {...linkProps}
                className={`${linkBaseStyle} ${
                  router.pathname === link.path && "border-black"
                }`}
                title={link.title}
              >
                {link.title}
              </motion.a>
            </Link>
          );
        })}
        {/* <div>
          <Socialcons className="inline-flex" />
        </div> */}
      </motion.div>
    </>
  );
};

export default Routes;
