import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import NextLink from "next/link";

const Who2 = () => {
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
    >
      {/* Left Section */}
      <Box
        flex="1"
        mr={{ base: 0, md: "2rem" }}
        display={{ base: "flex" }}
        flexDirection={{ base: "column" }}
        mb={{ base: "2rem", md: 0 }}
        ml={{ md: "80px" }}
      >
        {/* Heading: WHY CHOOSE US */}
        <Heading
          as="h2"
          size="sm"
          textTransform="uppercase"
          color="red.500"
          mb="1rem"
          textAlign={{ base: "center", md: "left" }} // Center text on mobile, left-align on desktop
        >
          WHY CHOOSE US
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
          HAVE BEEN A MAJOR BRAND IN TEACHING{" "}
          <Box
            fontSize={{ base: "4xl", md: "6xl" }} // Adjust font size for mobile and desktop
            fontWeight="900"
            color="#C01327"
          >
            AFRO DANCE
          </Box>
        </Text>
        {/* Paragraph */}
        <Text
          color="gray.600"
          mb="1rem"
          textAlign={{ base: "center", md: "left" }} // Center text on mobile, left-align on desktop
        >
          L&apos;école De Talents has been a leading brand in teaching Afro dance
          since 2024, offering top-notch classes designed to uplift skills and
          creativity. Our dedication is to foster a welcoming and inspiring
          community for dancers of all levels, empowering them to thrive in Afro
          dance styles.
        </Text>
        {/* Button: INSCRIPTION */}
        {/* Button: INSCRIPTION with NextLink */}
        <NextLink href="/inscription" passHref>
          <Button
            as="a" // Render the Button as an anchor element
            bg="#C01327"
            color="white"
            borderRadius="sm"
            px={5}
            py={6}
            textTransform="uppercase"
            _hover={{ bg: "#9f0a1d" }}
            alignSelf={{ base: "center", md: "flex-start" }} // Center button on mobile, align to start on desktop
          >
            INSCRIPTION
          </Button>
        </NextLink>
      </Box>

      {/* Right Section (Image) */}
      <Box flex="1" display="flex" justifyContent="center">
        {/* Image */}
        <Image
          src="/image1.png"
          alt="Image"
          width={{ md: "70%", base: "80%" }}
          borderRadius="md"
        />
      </Box>
    </Flex>
  );
};

export default Who2;
