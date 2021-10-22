import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  description: string;
  mail: string;
};

export const CoolButton = (props: Props) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <>

    
<div className='bg-pur text-center w-56 h-16 py-5 rounded-lg'>
    <motion.div
     className="bg-black text-white font-bold mx-4 -my-2 py-4 sm:py-0 text-center w-56 h-16  cursor-pointer   rounded-lg"
     initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
      style={{
        translateX: isHovered ? -16 :0 ,
        translateY: isHovered ? -12 :0 ,
        transition: isHovered
          ? "all 0.7s ease-in-out"
          : "all 0.6s ease-in-out",
      }}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
     >
        <a className="text-xl  " href={props.mail}>{props.description}</a>
      </motion.div>
      </div>
    </>
  );
};


