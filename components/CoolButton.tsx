import React from "react";

type Props = {
  description: string;
  mail: string;
};

export const CoolButton = (props: Props) => {
  return (
    <>
      <button className="   ">
        <a href={props.mail}>{props.description}</a>
      </button>
    </>
  );
};
