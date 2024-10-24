import { Box, Flex, Grid, GridItem, Heading, Text, Button } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex
        as="nav"
        bg="teal.500"
        p={4}
        justify={{ base: "center", md: "space-between" }}
        align="center"
        wrap="wrap"
      >
        <Heading as="h1" size="lg" color="white">
          My Responsive App
        </Heading>
        <Button colorScheme="teal" variant="solid" size="sm">
          Sign Up
        </Button>
      </Flex>

      {/* Main Content */}
      <Box p={5}>
        <Heading as="h2" size="xl" mb={6} textAlign="center">
          Responsive Layout with Chakra UI
        </Heading>

        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6}>
          {/* Card 1 */}
          <GridItem w="100%" h="200px" bg="blue.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              Card 1
            </Heading>
            <Text>
              This is a responsive card that adjusts based on the screen size.
            </Text>
            <Button mt={2} colorScheme="blue">
              Learn More
            </Button>
          </GridItem>

          {/* Card 2 */}
          <GridItem w="100%" h="200px" bg="green.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              Card 2
            </Heading>
            <Text>
              This is another card in the layout.
            </Text>
            <Button mt={2} colorScheme="green">
              Learn More
            </Button>
          </GridItem>

          {/* Card 3 */}
          <GridItem w="100%" h="200px" bg="red.200" p={4} borderRadius="md">
            <Heading as="h3" size="md" mb={4}>
              Card 3
            </Heading>
            <Text>
              Yet another responsive card.
            </Text>
            <Button mt={2} colorScheme="red">
              Learn More
            </Button>
          </GridItem>
        </Grid>
      </Box>

      {/* Footer */}
      <Flex as="footer" bg="gray.700" p={4} justify="center" align="center" mt={6}>
        <Text color="white">© 2023 My Responsive App</Text>
      </Flex>
    </Box>
  );
}

export default App;
