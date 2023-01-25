import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="text-white">
        <h1 className="text-[40px]">
          This page cannot be found.{" "}
          <span className="text-red-800 font-mono">404</span>
        </h1>
        <p className="italic text-[22px] mt-4 tracking-wider text-[#333]">
          If your DDoS is not succeeding, then you are hacking the wrong ass...
        </p>
      </div>
    </div>
  );
};

export default NotFound;
