import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';

const Card = () => {
  return (
    <Box
      maxW={{ base: '100%', md: 'sm' }}  // 100% on mobile, small width on medium screens
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      p={{ base: 4, md: 6 }}  // Adjust padding for different screen sizes
      m="auto"
    >
      {/* Card Title */}
      <Heading
        as="h3"
        size={{ base: 'md', md: 'lg' }}  // Smaller title on mobile
        textAlign="center"
        mb={4}
      >
        Beautiful Scenery
      </Heading>

      {/* Image */}
      <Image
        src="https://via.placeholder.com/800x600"
        alt="Random Unsplash Image"
        borderRadius="md"
        objectFit="cover"
        mb={4}
        h={{ base: '200px', md: '300px' }}  // Smaller height on mobile
        w="100%"
      />

      {/* Description */}
      <Text
        fontSize={{ base: 'sm', md: 'md' }}  // Smaller text on mobile
        textAlign="center"
        color="gray.600"
      >
        Experience the serene beauty of nature. This image captures the essence of peace and tranquility in
        the natural world.
      </Text>
    </Box>
  );
};

export default Card;
