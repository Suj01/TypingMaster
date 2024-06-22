import { Box, Flex } from '@chakra-ui/react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const letters = 'TYPE'.split('');
  const navigate = useNavigate();

  const handleNavbar=()=>{
navigate("/")
  }

  return (
    <>
    <Flex
      justifyContent="center"
      alignItems="center"
      className="navbar"
      onClick={handleNavbar}
    >
      <Box className="logo">
        {letters.map((letter, index) => (
          <Box
            key={index}
            as="span"
            className="logo-letter"
          >
            {letter}
          </Box>
        ))}
      </Box>
    </Flex>
    </>
  );
};
