import React from "react";
import { Box, Flex, Image, Heading } from "@chakra-ui/react";

const Gallery = () => {
  // Array of image data with properties for each image (src, alt, width, height)
  const imageData = [
    {
      src: "https://images.squarespace-cdn.com/content/v1/5d06bb2f21656e000126eefa/1563935020291-XQ14CGHSQUON0YS411CC/Streetside+4.jpg?format=1500w",
      alt: "Image 1",
      width: "100%",
      height: "300px",
    },
    {
      src: "https://www.verywellfit.com/thmb/wXDapNAmh2S3bH4uZ0G_u-lZciM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-online-dance-classes-5025736-edit-bb6039e31da949d6a29b27b7d57c4296.jpg",
      alt: "Image 2",
      width: "100%",
      height: "300px",
    },
    {
      src: "https://i0.wp.com/www.joyofdance.ca/storage/2018/04/contemporary-class.jpg?fit=1500%2C891&ssl=1",
      alt: "Image 3",
      width: "100%",
      height: "300px",
    },
    {
      src: "https://www.collierdance.com/wp-content/uploads/collier-dance-boys-hip-hop-30-1200x800.jpg",
      alt: "Image 4",
      width: "100%",
      height: "300px",
    },
    {
      src: "https://stockton.edu/news/images/featured/african-american-dance-class-featured.jpg",
      alt: "Image 5",
      width: "100%",
      height: "300px",
    },
    {
      src: "https://odc.dance/sites/all/themes/odc/images/landing/odc-dance-classes-schedule.png",
      alt: "Image 6",
      width: "100%",
      height: "300px",
    },
  ];

  return (
    <Box bg="black" py="4rem" px="2rem">
      {/* Gallery Heading */}
      <Flex justify="center">
        <Heading
          as="h2"
          fontSize={{ base: "md", md: "xl" }}
          color="red.500"
          mb="1rem"
        >
          GALLERY
        </Heading>
      </Flex>

      {/* Our Gallery Heading */}
      <Flex justify="center">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", md: "5xl" }}
          color="white"
          mb="2rem"
        >
          OUR GALLERY
        </Heading>
      </Flex>

      {/* Image Gallery */}
      <Flex justify="center" px={10} align="center" flexWrap="wrap">
        {/* Map over image data to render images dynamically */}
        {imageData.map((image, index) => (
          <Box
            key={index}
            w={{ base: "100%", md: "33.33%" }} // Full width on mobile, one-third width on desktop (for 3 images per row)
            p="0.5rem" // Small padding around each image
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              rounded="md" // Rounded corners
              transition="transform 0.3s ease-in-out" // Transition for hover effect
              _hover={{ transform: "scale(1.1)" }} // Scale up on hover
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Gallery;
