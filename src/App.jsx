import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroContact from "./Component/Homepage/Home";
import PricingSection from "./Component/Pricingpage/Pricing";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import FooterSection from "./Component/Last Footer/LastFooter";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <HeroContact />
        <PricingSection />
        <Footer />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
