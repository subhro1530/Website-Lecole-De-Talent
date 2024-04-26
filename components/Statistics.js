import { useState, useEffect } from "react";
import { Flex, Box, Text, VStack, Icon } from "@chakra-ui/react";
import {
  FaUserFriends,
  FaEye,
  FaUserGraduate,
  FaThumbsUp,
} from "react-icons/fa";

const Statistics = () => {
  // Dummy data for statistics
  const statisticsData = [
    { label: "Customer Interactions", value: 2500, icon: FaUserFriends },
    { label: "Visits", value: 5000, icon: FaEye },
    { label: "Enrollments", value: 1200, icon: FaUserGraduate },
    { label: "Likes", value: 3500, icon: FaThumbsUp },
  ];

  // State to track animated values for statistics
  const [animatedValues, setAnimatedValues] = useState(
    statisticsData.map((statistic) => ({
      label: statistic.label,
      animatedValue: 0,
      finalValue: statistic.value,
      icon: statistic.icon,
    }))
  );

  // Effect to animate count on component mount
  useEffect(() => {
    const animationDuration = 1500; // Duration of animation in milliseconds

    const interval = setInterval(() => {
      setAnimatedValues((prevValues) =>
        prevValues.map((stat) => ({
          ...stat,
          animatedValue:
            stat.animatedValue < stat.finalValue
              ? stat.animatedValue + 100 // Increment value quickly
              : stat.finalValue,
        }))
      );
    }, animationDuration / 30); // Update value every 30th of animation duration

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      bg="#C01327" // Red background color
      color="white" // White text color
      borderRadius="md"
      px={{ base: "1rem", md: "2rem", lg: "4rem" }} // Responsive padding
      py={{ base: "2rem", md: "2rem" }} // Responsive padding
      width="100%"
      maxWidth="1200px" // Set a maximum width
      mx="auto" // Center align horizontally
      boxShadow="md"
      mb="2rem"
    >
      <VStack spacing="1rem" align="center">
        {/* Statistics Columns */}
        <Flex
          width="100%"
          justify={{ base: "center", md: "space-between" }} // Adjust justification
          flexWrap="wrap" // Allow columns to wrap on smaller screens
        >
          {animatedValues.map((statistic, index) => (
            <Box
              key={index}
              textAlign="center"
              width={{ base: "100%", md: "23%" }} // Responsive width for columns
              mb={{ base: "1rem", md: 0 }} // Adjust margin between columns
            >
              {/* Icon */}
              <Icon
                color="pink"
                as={statistic.icon}
                boxSize="1.8rem"
                mt="1rem"
              />
              {/* Animated Value */}

              {/* Label */}
              <Text
                color="pink"
                fontSize={{ base: "md", md: "lg" }}
                fontWeight="bold"
              >
                {statistic.label}
              </Text>
              <Text
                fontSize={{ base: "5xl", md: "6xl" }}
                fontWeight="bold"
                      mt="-0.5rem"
                      mb="1rem"
              >
                {statistic.animatedValue > statistic.finalValue
                  ? `${statistic.finalValue}+`
                  : `${statistic.animatedValue}+`}
              </Text>
            </Box>
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};

export default Statistics;
