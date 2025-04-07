import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SectionOne from "./components/SectionOne";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VerticalSection from "./components/VerticalSection";

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      {/* <SectionOne /> */}
      <VerticalSection/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
