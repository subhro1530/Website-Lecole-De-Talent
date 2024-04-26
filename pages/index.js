// pages/index.js

import { Box} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import dynamic from "next/dynamic"; // Import dynamic from Next.js

const Navbar = dynamic(() => import("../components/Navbar")); // Dynamically import Navbar component
const HeroSection = dynamic(() => import("@/components/HeroSection")); // Dynamically import HeroSection component
const FloatingContainer = dynamic(() =>
  import("@/components/FloatingContainer")
); // Dynamically import FloatingContainer component

const Home = () => {
  return (
    <Box>
      <Navbar />
      <HeroSection />
      <FloatingContainer />
      {/* Add more content here */}
    </Box>
  );
};

export default Home;
