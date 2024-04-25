// pages/index.js

import { Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* Add more content here */}
    </>
  );
};

export default Home;
