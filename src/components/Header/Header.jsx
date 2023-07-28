import {
  Box,
  Flex,
  Container,
  useColorMode,
  IconButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MoonIcon, SettingsIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'reduxe/auth/auth-selectors';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { UserMenu } from './UserMenu/UserMenu';


const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const linkSize = useBreakpointValue({ base: 'sm', lg: 'md' });
  const boxHeight = useBreakpointValue({ base: '12vh', lg: '5vh' });
  return (
    <Box as="header" bg="Purple 600" >
      <Container maxW="container.lg" >
        <Flex  h={boxHeight} justifyContent="center" align="center" gap="30px" >
          <Link
            to={`/`}
            as="a"
            colorscheme="blue"
            fontSize={linkSize}
            h="48px"
            w={{ base: '100%', lg: '200px' }}
            border="1px"
            boxshadow="dark-md"
          >
            Home
          </Link>
          {isLoggedIn ? <Link
            to={`/contacts`}
            as="a"
            colorscheme="blue"
            fontSize={linkSize}
            h="48px"
            w="200px"
            border="1px"
            boxshadow="dark-md"
          >
            Contacts
          </Link> : <></>}
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          <IconButton
            ml="30px"
            onClick={toggleColorMode}
            fontSize="lg"
            bg="none"
            _hover={{
              boxshadow: 'none',
              background: 'none',
            }}
            icon={colorMode === 'light' ? <MoonIcon /> : <SettingsIcon />}
          />
        </Flex>
      </Container>
    </Box>
  );
};
export default Header;
// {name: "poi1", email: "poi1@g.com"}

