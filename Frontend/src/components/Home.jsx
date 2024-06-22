import { Box, Button, Center, chakra, Text } from '@chakra-ui/react';
import backgroundImg from "../assets/bg.jpg";
import { Navbar } from './Navbar';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();
  const handleStartGame = () => {
    navigate("/login");
  }
  return (
    <>
      <Box
        w="100%"
        h="100vh"
        backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${backgroundImg})`}
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Navbar />
        <Center flexDirection="column" textAlign="center" p={[4, 6, 8]}>
          <Box maxW={["90%", "80%", "70%", "80%"]}>
            <Text fontSize={['3xl', '4xl', '5xl', '6xl']} fontWeight="800" mb={2} color="#fff">
              <chakra.span color="purple.500">Unleash</chakra.span> your typing prowess
              <br />
              and conquer the <chakra.span color="purple.500">keyboard</chakra.span>
              <br />
              in <chakra.span color="purple.500">Typemaster</chakra.span>
            </Text>
            <Text fontSize={['md', 'lg', 'xl']} color="yellowGreen"
              _hover={{ color: "#fff" }}
            >
              where speed, accuracy, and precision are the keys to victory!
            </Text>
          </Box>

          <Center>
            <Button
              p={["20px 40px", "30px 60px", "40px 100px", "50px 380px"]}
              mt={["20px", "30px", "30px", "50px"]}
              fontSize={["md", "lg", "xl", "50px"]}
              textAlign="center"
              bg="yellowgreen"
              color={"#fff"}
              _hover={{ bg: "yellow.500" }}
              onClick={handleStartGame}
            >
              Start Playing
            </Button>
          </Center>
        </Center>
      </Box>
    </>
  );
};
