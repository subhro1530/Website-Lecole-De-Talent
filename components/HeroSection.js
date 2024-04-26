// components/HeroSection.js

import { Box, Image, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  // Update scrollOffset state on scroll
  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    setScrollOffset(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      bg="url('https://waterfrontparkseattle.org/wp-content/uploads/2022/05/AfrobeatDance_DSC04330_KineCamara20220527-1440x810.jpg')"
      bgSize="cover"
      bgPosition="center"
      height="110vh" // Adjust height for mobile and desktop
      position="relative"
      overflow="hidden"
      zIndex={-2}
    >
      {/* Dark overlay */}
      <Box
        bg="rgba(0, 0, 0, 0.7)"
        height="100%"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        display="flex"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        color="white"
        transition="opacity 0.5s"
        style={{
          transform: `translateY(${scrollOffset * 0.4}px)`,
        }}
      >
        <Flex direction="column" alignItems="center">
          {/* Headings */}
          <Heading
            size={{ md: "3xl", base: "2xl" }}
            fontWeight="bold"
            mb={4}
            textTransform="uppercase"
          >
            Improve your dance skills through
          </Heading>
          <Heading
            size={{ md: "3xl", base: "2xl" }}
            fontWeight="bold"
            mb={4}
            textTransform="uppercase"
          >
            L&apos;ÉCOLE DE TALENTS
          </Heading>
          {/* Services Description */}
          <Text fontSize={{ md: "xl", base: "lg" }} color="red.100" mb={8}>
            Elevate your dance experience with our dynamic Afro Dance classes,
            designed to boost your skills and <br /> unleash your creativity in
            a vibrant and supportive community.
          </Text>
          {/* Buttons */}
          <Flex>
            <Button
              bg="#C01327"
              color="white"
              fontSize="lg"
              fontWeight=""
              borderRadius="sm"
              textTransform="uppercase"
              _hover={{ bgColor: "white", color: "black", border: "black" }}
              px={10}
              py={6}
              mr={4}
            >
              Read More
            </Button>
            <Button
              variant="outline"
              borderColor="#C01327"
              color="#C01327"
              textTransform="uppercase"
              fontSize="lg"
              fontWeight="bold"
              borderRadius="sm"
              px={10}
              py={6}
            >
              Contact Us
            </Button>
          </Flex>
        </Flex>
      </Box>

      {/* Scroll GIF */}
      {scrollOffset <
        document.documentElement.scrollHeight - window.innerHeight && (
        <Image
          width={{ base: "30px", md: "50px" }} // Adjust image width for mobile and desktop
          height="auto"
          my={{ base: "2rem", md: "3rem" }} // Adjust margin vertical for mobile and desktop
          src="https://socotratrip.com/wp-content/uploads/2022/05/animation_640_l3k1n5d3.gif"
          alt="Scroll GIF"
          style={{
            position: "fixed",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "1",
          }}
        />
      )}
    </Box>
  );
};

export default HeroSection;
