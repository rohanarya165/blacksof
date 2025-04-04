import React from "react";
import { motion } from "framer-motion";

const SectionTwo: React.FC = () => {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center bg-black text-white">
            {/* Top Fixed Text (Same as SectionOne but fixed) */}
            <div className="absolute top-10 text-center w-full">
                <h1 className="text-5xl font-light">
                    Evolving the drive with <span className="font-bold">360-degree</span>
                </h1>
                <p className="text-lg opacity-70">nonwoven solutions</p>
            </div>

            {/* Left Side Text (Revealing on Scroll) */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                className="absolute left-10 top-40"
            >
                <h2 className="text-4xl font-bold">Passenger Vehicles</h2>
                <p className="text-lg opacity-70">Revving up Nonwoven innovation from interior to exterior.</p>
            </motion.div>

            {/* Car Image */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8 }}
            >
                <img src="/car-image.png" alt="Car" className="w-2/3" />
            </motion.div>
        </section>
    );
};

export default SectionTwo;
