// components/Navbar.js

import { useState } from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      backgroundColor={{ base: "rgba(0, 0, 0, 0.8)", md: "transparent" }} // Transparent in desktop, translucent in mobile
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      width="100%"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" // Optional: Add a subtle box shadow
    >
      {/* Left side - Logo */}
      <Flex align="center" mr={5}>
        {/* Your logo image or text */}
        <Link href="/">
          <img src="/logo2.png" alt="Logo" style={{ height: "60px" }} />
        </Link>
      </Flex>

      {/* Hamburger Icon (Mobile Only) */}
      <Box display={{ base: "block", md: "none" }} onClick={toggleNavbar}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      {/* Right side - Links (Mobile and Desktop) */}
      <Flex
        align="center"
        justify={{ base: "center", md: "flex-end" }}
        direction={{ base: "column", md: "row" }} // Display links vertically in mobile, horizontally in desktop
        flexGrow={1}
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        mt={{ base: 4, md: 0 }}
        transition="max-height 0.3s ease-out"
        maxHeight={{ base: isOpen ? "100vh" : "0", md: "none" }}
        overflowY={{ base: "auto", md: "visible" }}
      >
        <Link
          href="/about"
          mt={4}
          mr={{ base: 0, md: 10 }}
          mb={{ base: 4, md: 0 }}
          fontFamily="heading"
          textTransform="uppercase"
          _hover={{ color: "red.500" }}
        >
          About
        </Link>
        <Link
          href="/activities"
          mt={4}
          mr={{ base: 0, md: 10 }}
          mb={{ base: 4, md: 0 }}
          fontFamily="heading"
          textTransform="uppercase"
          _hover={{ color: "red.500" }}
        >
          School Activities
        </Link>
        <Link
          href="/inscriptions"
          mt={4}
          mr={{ base: 0, md: 10 }}
          mb={{ base: 4, md: 0 }}
          fontFamily="heading"
          textTransform="uppercase"
          _hover={{ color: "red.500" }}
        >
          Inscriptions
        </Link>
        <Link
          href="/contact"
          bg="#C01327"
          color="white"
          borderRadius="sm"
          mt={4}
          px={3}
          py={4}
          mb={{ base: 4, md: 0 }}
          fontFamily="heading"
          textTransform="uppercase"
          _hover={{ bg: "#C01327" }}
        >
          Contact Us
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
