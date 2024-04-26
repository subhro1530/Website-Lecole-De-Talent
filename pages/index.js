// pages/index.js

import { Box } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic"; // Import dynamic from 

const Navbar = dynamic(() => import("../components/Navbar")); // Dynamically import Navbar component
const Footer = dynamic(() => import("../components/Footer")); // Dynamically import Footer component
const Learn = dynamic(() => import("../components/Learn")); // Dynamically import Learn component
const HeroSection = dynamic(() => import("@/components/HeroSection")); // Dynamically import HeroSection component
const Statistics = dynamic(() => import("@/components/Statistics")); // Dynamically import Statistics component
const FloatingContainer = dynamic(() =>
  import("@/components/FloatingContainer")
); // Dynamically import FloatingContainer component
const Who = dynamic(() => import("@/components/Who"));
// Dynamically import Who component

const Home = () => {
  return (
    <Box>
      <Head>
        <title>L&apos;École De Talents - Afro Dance Class</title>
        <link rel="icon" href="/icon.png" /> {/* Include custom icon */}
      </Head>
      <Navbar />
      <HeroSection />
      <FloatingContainer />
      <Who />
      <Statistics />
      <Learn />
      <Footer />
      {/* Add more content here */}
    </Box>
  );
};

export default Home;
