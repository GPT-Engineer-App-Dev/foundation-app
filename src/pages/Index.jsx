import React from 'react';
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={4}>
        Welcome to Bare-Bones App
      </Heading>
      <Text fontSize="lg" mb={6}>
        This is a minimal web application structure that you can modify and build upon.
      </Text>
      <Flex justify="center">
        <Button colorScheme="teal" size="lg" mr={4}>
          Get Started
        </Button>
        <Button colorScheme="gray" size="lg">
          Learn More
        </Button>
      </Flex>
    </Box>
  );
};

export default Index;