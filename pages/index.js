// pages/index.js

import { Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingContainer from "@/components/FloatingContainer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FloatingContainer />
      {/* Add more content here */}
    </>
  );
};

export default Home;
