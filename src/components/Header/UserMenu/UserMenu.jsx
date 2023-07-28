import { Box, Container, Flex, Link, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'reduxe/auth/auth-operation';

import { selectUserName } from 'reduxe/auth/auth-selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <Box ml="30px" bg="Purple 600">
      <Container maxW="container.lg" gap="30px">
        <Flex h="5vh" justifyContent="center" align="center" gap="30px" >
        <Text>Welcome, {name}!</Text>
        <Link
            to={`/login`}
            as="a"
            colorscheme="blue"
            size="md"
            _hover={{
              textDecoration: "none"
              
            }}
            onClick={() => dispatch(logOut())}
          >
            Log Out
          </Link>
        </Flex>
      </Container>
      </Box>
  );
};
