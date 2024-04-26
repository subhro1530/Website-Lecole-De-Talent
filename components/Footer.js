import { Box, Flex, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="black" color="white" py="4rem">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align="center"
        px={{ base: "1rem", md: "8rem" }}
      >
        {/* Logo Section */}
        <Box
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "2rem", md: 0 }}
        >
          {/* Replace 'Your Logo Here' with your actual logo */}
          <img src="/logo2.png" alt="Logo" width="220px" />
        </Box>

        {/* Links Section */}
        <Flex
          flex="1"
          direction="column"
          justify="center"
          align={{ base: "center", md: "flex-end" }}
          mb={{ base: "2rem", md: 0 }}
        >
          <Link href="/about" mb="1rem" _hover={{ color: "red.400" }}>
            About
          </Link>
          <Link href="" mb="1rem" _hover={{ color: "red.400" }}>
            School Activities
          </Link>
          <Link href="#" mb="1rem" _hover={{ color: "red.400" }}>
            Inscriptions
          </Link>
          <Link href="#" _hover={{ color: "red.400" }}>
            Contact Us
          </Link>
        </Flex>

        {/* Social Media Icons Section */}
        <Flex
          flex="1"
          justify="center"
          align="center"
          mb={{ base: "2rem", md: 0 }}
        >
          <Icon
            as={FaFacebook}
            boxSize="2rem"
            mr="1rem"
            _hover={{ color: "red.400" }}
          />
          <Icon
            as={FaTwitter}
            boxSize="2rem"
            mr="1rem"
            _hover={{ color: "red.400" }}
          />
          <Icon
            as={FaInstagram}
            boxSize="2rem"
            mr="1rem"
            _hover={{ color: "red.400" }}
          />
        </Flex>

        {/* Contact Information Section */}
        <Flex
          flex="1"
          direction="column"
          justify="center"
          align={{ base: "center", md: "flex-start" }}
        >
          <Text mb="0.5rem">Phone: +1234567890</Text>
          <Text mb="0.5rem">Email: info@example.com</Text>
          <Text>123 Street, City, Country</Text>
        </Flex>
      </Flex>

      {/* Copyright Section */}
      <Flex justify="center" mt="2rem">
        <Text fontSize="sm" color="gray.400">
          &copy; L&apos;École De Talents. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
