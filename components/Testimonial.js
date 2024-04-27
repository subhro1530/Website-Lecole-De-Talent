import React from "react";
import { Box, Flex, Image, Heading, Text } from "@chakra-ui/react";

const Testimonial = () => {
  return (
    <Flex
      bg="white"
      p="8rem"
      borderRadius="md"
      mb="2rem"
      justifyContent="center" // Center horizontally
      alignItems="center" // Center vertically
    //   textAlign="center" // Center text
    >
      {/* Image Section */}
      <Box flex="1" maxWidth="100%" mb={{ base: "2rem", md: 0 }}>
        <Image
          src="https://templatekit.tokomoo.com/dancekit/wp-content/uploads/sites/44/2021/11/modern-male-dancer-portrait.jpg"
          alt="Client Image"
                  borderRadius="md"
                  boxSize="450px"
          objectFit="cover"
        />
      </Box>

      {/* Testimonial Text Section */}
      <Box flex="2" maxWidth="100%" ml={{ base: 0, md: "6rem" }}>
        {/* Testimonial Heading */}
        <Heading
          as="h2"
          fontSize={{ base: "md", md: "xl" }}
          color="#C01327"
          mb="1rem"
        >
          Testimonial
        </Heading>

        {/* What Our Client Say Heading */}
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "6xl" }}
          color="black"
          fontWeight="bold"
          mb="1rem"
          lineHeight="110%"
        >
          What Our Client Say
        </Heading>

        {/* Testimonial Quote */}
        <Text fontSize={{ base: "sm", md: "lg" }} mb="1rem"  textAlign="justify">
          “I would like to personally thank you for your outstanding dance
          course. It fits our needs perfectly. <br />Modern dance saved my business.
          Dude, your stuff is the bomb!”
        </Text>

        {/* Client Details */}
        <Text fontSize={{ base: "sm", md: "lg" }} color="gray.600">
          Steven Zhang - New York
        </Text>
      </Box>
    </Flex>
  );
};

export default Testimonial;
