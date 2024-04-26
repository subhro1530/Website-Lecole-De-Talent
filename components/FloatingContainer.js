import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FaBook, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const FloatingContainer = () => {
  return (
    <Flex
      bg="white"
      width={{ base: "95vw", md: "80vw" }}
      borderRadius="lg"
      boxShadow="lg"
      p={6}
      zIndex={500}
      mx="auto"
      mt={{ base: -8, md: -12 }}
      flexDirection={{ base: "column", md: "row" }}
    >
      {/* Column 1 */}
      <Box
        flex="1"
        textAlign="center"
        px={4}
        mb={{ base: 8, md: 0 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box color="#C01327" fontSize="5xl" px={3} py={3} borderRadius="5px"  bgColor="pink" mt={5} mb={5}>
          <FaBook />
        </Box>
        <Text fontWeight="bold" fontSize="30px" letterSpacing="-1px" opacity="0.9" mb={2}>
          200+ classes
        </Text>
        <Text textAlign="center" px={5} fontSize="sm">
          Explore a wide range of dance classes to enhance your skills and
          creativity.
        </Text>
      </Box>

      {/* Column 2 */}
      <Box
        flex="1"
        textAlign="center"
        px={4}
        mb={{ base: 8, md: 0 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box color="#C01327" fontSize="5xl" px={3} py={3} borderRadius="5px"  bgColor="pink" mt={5} mb={5}>
          <FaUserGraduate />
        </Box>
        <Text fontWeight="bold" fontSize="30px" letterSpacing="-1px" opacity="0.9" mb={2}>
          8+ beginner programs
        </Text>
        <Text textAlign="center" px={5} fontSize="sm">
          Start your dance journey with tailored beginner programs designed for
          new dancers.
        </Text>
      </Box>

      {/* Column 3 */}
      <Box
        flex="1"
        textAlign="center"
        px={4}
        mb={{ base: 8, md: 0 }}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box color="#C01327" fontSize="5xl" px={3} py={3} borderRadius="5px"  bgColor="pink" mt={5} mb={5}>
          <FaChalkboardTeacher />
        </Box>
        <Text fontWeight="bold" fontSize="30px" letterSpacing="-1px" opacity="0.9" mb={2}>
          70+ instructors
        </Text>
        <Text textAlign="center" px={5} fontSize="sm">
          Learn from experienced instructors who are passionate about sharing
          their expertise.
        </Text>
      </Box>
    </Flex>
  );
};

export default FloatingContainer;
