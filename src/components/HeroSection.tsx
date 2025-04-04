import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative lg:h-screen min-h-[450px] overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-center"
        >
          <source src="https://supreme-group.vercel.app/static/media/automotive.224e7418884105595114.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay with background color & opacity */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-black opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <span className="font-light text-sm md:text-base lg:text-lg text-white">
          Driven by performance
        </span>
        <h2 className="text-white font-light text-2xl md:text-4xl lg:text-5xl leading-tight mt-2">
          <span className="font-semibold">
            Soft trims and <span className="text-blue-400">NVH solutions</span>
          </span>
          <br /> for seamless rides
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
