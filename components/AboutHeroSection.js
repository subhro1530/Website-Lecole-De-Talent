import { Box, Flex, Text } from "@chakra-ui/react";

const AboutHeroSection = () => {
  return (
    <Box
      minH="40vh" // Minimum height of 40vh
      bgImage="url('https://images.pexels.com/photos/8957645/pexels-photo-8957645.jpeg?cs=srgb&dl=pexels-kampus-production-8957645.jpg&fm=jpg')" // Replace with your image path
      bgSize="cover"
      bgPosition="center"
      position="relative"
      overflow="hidden"
    >
      {/* Black overlay */}
      <Box
        bg="black"
        opacity="0.5"
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
      />

      {/* Content */}
      <Flex
        direction="column"
        justify="center"
        height="60vh"
        align="center"
        position="relative"
        zIndex="1" // Ensure text is above the overlay
        color="white"
        textAlign="center"
        px={{ base: "1rem", md: "8rem" }} // Horizontal padding
      >
        <Text
          textDecoration="underline 8px #C01327"
          fontSize="5xl"
          fontWeight="bold"
        >
          ABOUT US
        </Text>
      </Flex>
    </Box>
  );
};

export default AboutHeroSection;
