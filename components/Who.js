// components/Who.js

import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";

const Who = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }} // Layout: column for mobile, row for desktop
      align="center"
      justify="space-around"
      padding={{ base: "2rem", md: "8rem" }} // Increase padding on both ends
      bg="white"
      width="100%" // Take up entire width
      borderRadius="md"
      mb="2rem"
      ml={{ md: "3rem" }}
    >
      {/* Left Section */}
      <Box flex="1" mr={{ base: 0, md: "2rem" }} display={{base:"flex"}} flexDirection={{base:"column"}} mb={{ base: "2rem", md: 0 }}>
        {/* Heading: WHO WE ARE */}
        <Heading
          as="h2"
          size="sm"
          textTransform="uppercase"
          color="red.500"
          mb="1rem"
          textAlign={{ base: "center", md: "left" }} // Center text on mobile, left-align on desktop
        >
          WHO WE ARE
        </Heading>
        {/* Subheading */}
        <Text
          fontSize={{ base: "4xl", md: "6xl" }} // Adjust font size for mobile and desktop
          fontWeight="900"
          color="black"
          mb="1rem"
          lineHeight="105%"
          textAlign={{ base: "center", md: "left" }} // Center text on mobile, left-align on desktop
        >
          BEST AFRO DANCE <Box color="#C01327">SCHOOL SINCE 2024</Box>
        </Text>
        {/* Paragraph */}
        <Text
          color="gray.600"
          mb="1rem"
          textAlign={{ base: "center", md: "left" }} // Center text on mobile, left-align on desktop
        >
          L'École De Talents has been the leading Afro Dance school since 2024,
          offering dynamic classes designed to boost skills and creativity. Our
          mission is to create a vibrant and supportive community for dancers of
          all levels, empowering them to explore and excel in Afro dance styles.
        </Text>
        {/* Button: ABOUT US */}
        <Button
          bg="#C01327"
          color="white"
          borderRadius="sm"
          px={5}
          py={6}
          textTransform="uppercase"
          _hover={{ bg: "#9f0a1d" }}
          alignSelf={{ base: "center", md: "flex-start" }} // Center button on mobile, align to start on desktop
        >
          ABOUT US
        </Button>
      </Box>

      {/* Right Section */}
      <Box flex="1" display="flex" justifyContent="center">
        {/* Image */}
        <Image src="/image1.png" alt="Image" width={{md:"60%",base:"80%"}} borderRadius="md" />
      </Box>
    </Flex>
  );
};

export default Who;
