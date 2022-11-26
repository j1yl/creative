import React from "react";

const Hero = () => {
  return (
    <>
      <main className="bg-black text-white h-[84vh] flex flex-col justify-center gap-5 px-2 md:px-8">
        <div>
          <h1 className="text-4xl md:text-6xl">
            We are limited only by our imagination.
          </h1>
          <h2 className="text-4xl md:text-6xl">
            Enroll in our 12-week program to explore your creativity.
          </h2>
        </div>
        <p className="text-base">
          At <span className="underline">creativity</span>, we strive to unlock
          your hidden potential through scientifically proven methods.
        </p>
        <button className="px-6 py-3 text-2xl w-max rounded-xl bg-white text-black">
          Enroll Now
        </button>
      </main>
    </>
  );
};

export default Hero;
