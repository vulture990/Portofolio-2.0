import React, { FC } from "react";

type Props = {
  icon: string;
  size: string;
  className?: string;
};

const Icon: FC<Props> = (props: Props) => {
  return (
    <img 
      className={`${props.className} select-none`}
      width={props.size}
      src={`/${props.icon}.svg`}
      alt={props.icon}
    />
  );
};

export default Icon;



