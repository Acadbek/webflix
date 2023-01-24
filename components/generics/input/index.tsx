import React from "react";

function Input() {
  return (
    <>
      <div className="relative">
        <svg
          className="h-5 w-5 absolute top-[9px] left-[14px] text-white/60"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
        <input
          type="text"
          placeholder="Find Movies & TV"
          className="focus:border-[#6b6b6bcc] text-[#e9e3e3cc] w-[400px] -tracking-tighter
           focus:border border-transparent text-[14px] pl-10 py-2 rounded-full outline-none bg-[#414040cc]"
        />
      </div>
    </>
  );
}

export default Input;
