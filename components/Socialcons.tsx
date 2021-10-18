import React, { FC } from "react";
import Icon from "./Icons";
import { motion, Variants } from "framer-motion";

type Props = {
  className?: string;
};

const item: Variants = {
  hidden: { y: -10, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { default: { duration: 2 } } },
};

const Socialcons: FC<Props> = (props: Props) => {
  const socialicons = [
    { title: "twitter", link: "https://www.twitter.com/mohamedSalbi" },
    { title: "github", link: "https://www.github.com/vulture990" },
  ];
  return (
    <div className={props.className}>
      {socialicons.map((social) => (
        <motion.a
          variants={item}
          key={social.title}
          href={social.link}
          target="blank_"
          rel="noreferrer"
          className="mx-2"
          whileHover={{ y: -3 }}
        >
          <div className="">
            <Icon icon={social.title} size="25"></Icon>
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default Socialcons;
