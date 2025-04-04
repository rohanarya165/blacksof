import { motion, useScroll, useTransform } from "framer-motion";

const SectionOne = () => {
  const { scrollYProgress } = useScroll();

  // Animations
  const textY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Top Center Heading */}
      <motion.div
        className="absolute top-10 w-full text-center mt-12 z-20"
        style={{ y: textY }}
      >
        <h2 className="text-white text-3xl md:text-5xl font-semibold">
          Evolving the drive with{" "}
          <span className="text-blue-400">360-degree</span>
        </h2>
        <p className="text-white text-lg md:text-xl mt-2">
          nonwoven solutions
        </p>
      </motion.div>

      {/* Content Container (text + video) */}
      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between mt-28 md:mt-40">
        {/* Left Side Content */}
        <motion.div
          className="text-left text-white max-w-lg"
          style={{ opacity: contentOpacity }}
        >
          <h3 className="text-xl font-semibold">Passenger vehicles</h3>
          <p className="text-md text-gray-300">
            Revving up Nonwoven innovation from interior to exterior.
          </p>
        </motion.div>

        {/* Right Side Video */}
        <motion.div
          className="w-full md:w-[50%] flex justify-center md:justify-end"
          style={{ opacity: contentOpacity }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full md:w-[500px] object-cover"
          >
            <source
              src="https://supreme-group.vercel.app/static/media/Passenger%20Alpha.bc06b347f5b526ad9a60.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionOne;
