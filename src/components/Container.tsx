import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='w-full h-screen sm:max-w-[1366px]
    max-w-[660px] m-0 sm:mx-auto flex flex-col items-center justify-center bg-[url("assets/leaves.png")] bg-no-repeat bg-contain bg-top'
    >
      {children}
    </div>
  );
};

export default Container;
