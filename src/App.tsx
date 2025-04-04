import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionOne from "./components/SectionOne";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <SectionOne />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
