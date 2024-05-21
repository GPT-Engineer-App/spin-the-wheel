import { useState } from "react";
import { Container, VStack, Button, Text, Box } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const segments = [
  "Prize 1",
  "Prize 2",
  "Prize 3",
  "Prize 4",
  "Prize 5",
  "Prize 6",
  "Prize 7",
  "Prize 8",
];

const Index = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    const spinDuration = 3000; // 3 seconds
    const randomSegment = Math.floor(Math.random() * segments.length);

    setTimeout(() => {
      setSpinning(false);
      setResult(segments[randomSegment]);
    }, spinDuration);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box
          as="div"
          width="300px"
          height="300px"
          borderRadius="50%"
          border="5px solid #2a69ac"
          position="relative"
          overflow="hidden"
          transform={`rotate(${spinning ? 360 * 5 : 0}deg)`}
          transition="transform 3s ease-out"
        >
          {segments.map((segment, index) => (
            <Box
              key={index}
              position="absolute"
              width="50%"
              height="50%"
              top="50%"
              left="50%"
              transform={`rotate(${(index * 360) / segments.length}deg) translate(-50%, -100%)`}
              transformOrigin="0% 100%"
              backgroundColor={`hsl(${(index * 360) / segments.length}, 100%, 50%)`}
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              {segment}
            </Box>
          ))}
        </Box>
        <Button
          leftIcon={<FaPlay />}
          colorScheme="teal"
          size="lg"
          onClick={spinWheel}
          isDisabled={spinning}
        >
          Spin the Wheel
        </Button>
        {result && (
          <Text fontSize="2xl" color="teal.500">
            You won: {result}!
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;