import { Box } from "@chakra-ui/react";
import AboutHeroSection from "../components/AboutHeroSection";
import Navbar from "@/components/Navbar";
import Who from "@/components/Who";
import Statistics from "@/components/Statistics";
import Who2 from "@/components/Who2";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";

const AboutPage = () => {
  return (
    <Box>
      <Navbar />
      <AboutHeroSection />
      <Who />
      <Statistics />
      <Who2 />
      <Gallery />
      <Testimonial />
      <Footer />
      {/* Other sections of your About page can go here */}
    </Box>
  );
};

export default AboutPage;
