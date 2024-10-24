import React, { useState } from 'react';
import { ChakraProvider, Box, Heading, Button, Input, Text } from '@chakra-ui/react';

function App() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <ChakraProvider>
      <Box textAlign="center" p={5} maxW="600px" mx="auto" mt={10} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <Heading as="h1" size="2xl" mb={6}>
          Chakra UI Demo App
        </Heading>

        <Box mb={6}>
          <Text mb={2} fontSize="lg">
            Enter your name:
          </Text>
          <Input
            placeholder="Type your name"
            size="md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            mb={4}
          />
        </Box>

        <Button colorScheme="blue" size="lg" onClick={handleSubmit}>
          Submit
        </Button>

        {submitted && (
          <Box mt={6} p={4} borderWidth={1} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="lg" mb={2}>
              Welcome, {name}!
            </Heading>
            <Text fontSize="md">Thanks for submitting your name.</Text>
          </Box>
        )}
      </Box>
    </ChakraProvider>
  );
}

export default App;
