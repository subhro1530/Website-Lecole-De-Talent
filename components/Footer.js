import React from "react";
import { Box, Flex, Heading, Text, Link, Icon } from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaFacebook,
  FaPhoneAlt,
  FaTwitter,
  FaInstagram ,
  FaEnvelope,
} from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <Box bg="black" color="white" py="4rem">
      <Flex
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-around" }}
        align="flex-start"
        alignItems="center"
        px={{ base: "1rem", md: "8rem" }}
        gridGap="2rem"
      >
        {/* Logo and Description Section */}
        <Box
          textAlign={{ base: "center", md: "left" }}
          mb={{ base: "2rem", md: 0 }}
        >
          {/* Replace 'Your Logo Here' with your actual logo */}
          <img src="/logo2.png" alt="Logo" width="320px" />
          <Flex mt="1rem" fontSize="xl" direction="column">
            <Flex alignItems="center" mb="0.5rem">
              <Icon color="#C01327" as={MdLocationOn} mr="0.5rem" />
              <Text>123 Street, City, Country</Text>
            </Flex>
            <Flex alignItems="center" mb="0.5rem">
              <Icon color="#C01327" as={FaPhoneAlt} mr="0.5rem" />
              <Text>+1234567890</Text>
            </Flex>
            <Flex alignItems="center" mb="0.5rem">
              <Icon color="#C01327" as={FaEnvelope} mr="0.5rem" />
              <Text>info@example.com</Text>
            </Flex>
          </Flex>
        </Box>

        {/* Quick Links Section */}
        <Box>
          <Heading mb="1rem" fontSize="2xl" color="#C01327">
            QUICK LINKS
          </Heading>
          <Flex direction="column" textAlign={{ base: "center" }}>
            <Link
              href="/about"
              fontSize="20px"
              mb="0.5rem"
              _hover={{ color: "#C01327" }}
            >
              About
            </Link>
            <Link
              href="/school-activities"
              mb="0.5rem"
              fontSize="20px"
              _hover={{ color: "#C01327" }}
            >
              School Activities
            </Link>
            <Link
              href="/inscription"
              fontSize="20px"
              mb="0.5rem"
              _hover={{ color: "#C01327" }}
            >
              Inscriptions
            </Link>
            <Link href="/contact" fontSize="20px" _hover={{ color: "#C01327" }}>
              Contact Us
            </Link>
          </Flex>
        </Box>

        {/* Opening Hours Section */}
        <Box textAlign={{ base: "center" }}>
          <Heading mb="1rem" fontSize="2xl" color="#C01327">
            OPENING HOURS
          </Heading>
          <Flex direction="column" alignItems="center">
            <Text textAlign="center" fontSize="20px" color="gray.300">
              09:00 AM - 11:00 AM <br />
              12:00 PM - 02:00 PM <br />
              03:00 PM - 05:00 PM <br />
              06:00 PM - 08:00 PM <br />
              09:00 PM - 11:00 PM
            </Text>
          </Flex>
        </Box>

        {/* Social Media and Newsletter Section */}
        <Box textAlign={{ base: "center" }}>
          <Heading mb="1rem" fontSize="2xl" color="#C01327">
            NEWSLETTER
          </Heading>
          <Text mb="1rem" fontSize="20px">
            Ping us on social media:
          </Text>
          <Flex align="center">
            <Link
              href="https://www.facebook.com"
              isExternal
              px="0.5rem"
              py="0.5rem"
              display="flex"
              ml={5}
              border="2px solid #C01327"
              alignItems="center"
              borderRadius="100px"
              color="#C01327"
              _hover={{ bg: "#C01327", color: "white" }}
            >
              <Icon as={FaFacebook} boxSize="2rem" />
            </Link>
            <Link
              href="https://www.twitter.com"
              isExternal
              px="0.5rem"
              py="0.5rem"
              display="flex"
              ml={5}
              border="2px solid #C01327"
              alignItems="center"
              borderRadius="100px"
              color="#C01327"
              _hover={{ bg: "#C01327", color: "white" }}
            >
              <Icon as={FaTwitter} boxSize="2rem" />
            </Link>
            <Link
              href="https://www.instagram.com"
              isExternal
              px="0.5rem"
              py="0.5rem"
              display="flex"
              ml={5}
              border="2px solid #C01327"
              alignItems="center"
              borderRadius="100px"
              color="#C01327"
              _hover={{ bg: "#C01327", color: "white" }}
            >
              <Icon as={FaInstagram} boxSize="2rem" />
            </Link>
          </Flex>
        </Box>
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
