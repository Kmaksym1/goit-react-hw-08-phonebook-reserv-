import { Box, Image, Text, useBreakpointValue } from '@chakra-ui/react';

const HomePage = () => {
  const fontSize = useBreakpointValue({ base: '18px', lg: '48px' });
  const topPosition = useBreakpointValue({ base: '40%', lg: '16%' });
  
  return (
    <Box as="header" bg="Purple.600" justifyContent="center" align="center" >
      <Box position="relative">
        <Image
          src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="homeImage"
          w="100%"
        />
        <Text
          position="absolute"
          top={topPosition}
          left="50%"
          transform="translate(-50%, -50%)"
          color="black"
          fontSize={fontSize}
          fontWeight="bold"
          textAlign="center"
        >
          Welcome to "Contacts app" - Your All-in-One Contacts Management
          Solution!
        </Text>
      </Box>
    </Box>
  );
};
export default HomePage;
