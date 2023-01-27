import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-red-700 text-[45px] font-bold">404</h1>
    </div>
  );
};

export default NotFound;
