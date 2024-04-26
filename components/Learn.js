import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { FaUserCheck, FaUserTie, FaHeart } from "react-icons/fa";

const Learn = () => {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-around"
      padding={{ base: "2rem", md: "8rem" }}
      bg="white"
      width="100%"
      borderRadius="md"
      mb="2rem"
    >
      {/* Right Section: Image */}
      <Box flex="1" display="flex" justifyContent="center">
        <Image
          src="/image2.png"
          alt="Learn Image"
          width={{ md: "70%", base: "80%" }}
          borderRadius="md"
        />
      </Box>
      {/* Left Section */}
      <Box
        flex="1"
        mr={{ base: 0, md: "2rem" }}
        display={{ base: "flex" }}
        flexDirection={{ base: "column" }}
        mb={{ base: "2rem", md: 0 }}
        ml={{ md: "80px" }}
      >
        {/* Heading */}
        <Heading
          as="h2"
          size="sm"
          textTransform="uppercase"
          color="red.500"
          mb="1rem"
          textAlign={{ base: "center", md: "left" }}
        >
          Get Started
        </Heading>
        {/* Main Heading */}
        <Heading
          fontSize={{ base: "4xl", md: "6xl" }} // Adjust font size for mobile and desktop
          fontWeight="900"
          color="black"
          mb="1rem"
          lineHeight="105%"
          textAlign={{ base: "center", md: "left" }}
        >
          EVERYONE DESERVES THE CHANCE
          <Box
            fontSize={{ base: "4xl", md: "6xl" }} // Adjust font size for mobile and desktop
            fontWeight="900"
            color="#C01327"
          >
            TO LEARN WITH US
          </Box>
        </Heading>
        {/* Description Paragraph */}
        <Text
          color="gray.600"
          mb="2rem"
          textAlign={{ base: "center", md: "left" }}
        >
          Enhance your skills with our diverse range of courses, designed for
          everyone.
        </Text>
        {/* Points Section */}
        <VStack spacing="2rem" align="stretch">
          {/* Point 1 */}
          <Flex alignItems="center">
            <Icon as={FaUserCheck} boxSize="2rem" color="#C01327" />
            <Box ml="1rem">
              <Heading
                as="h4"
                fontSize={{ base: "md", md: "lg" }}
                color="black"
              >
                Certified Trainer
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                Learn from our experienced and certified trainers.
              </Text>
            </Box>
          </Flex>
          {/* Point 2 */}
          <Flex alignItems="center">
            <Icon as={FaUserTie} boxSize="2rem" color="#C01327" />
            <Box ml="1rem">
              <Heading
                as="h4"
                fontSize={{ base: "md", md: "lg" }}
                color="black"
              >
                1-on-1 Training
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                Personalized training sessions tailored to your needs.
              </Text>
            </Box>
          </Flex>
          {/* Point 3 */}
          <Flex alignItems="center">
            <Icon as={FaHeart} boxSize="2rem" color="#C01327" />
            <Box ml="1rem">
              <Heading
                as="h4"
                fontSize={{ base: "md", md: "lg" }}
                color="black"
              >
                Support & Motivation
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
                Get continuous support and motivation throughout your learning
                journey.
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Learn;
