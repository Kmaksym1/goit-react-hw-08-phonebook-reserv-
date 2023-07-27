import {
  Box,
  Flex,
  Container,
  useColorMode,
  IconButton,
  // Text,
  // Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MoonIcon, SettingsIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'reduxe/auth/auth-selectors';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { UserMenu } from './UserMenu/UserMenu';
import ContactsPage from 'components/Pages/ContactsPage';
// import { logOut } from 'reduxe/auth/auth-operation';

// import { Link as ReachLink } from "@reach/router"
// import { Theme } from '@chakra-ui/react';

const Header = () => {
  // const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  
  return (
    <Box as="header" bg="Purple 600">
      <Container maxW="container.lg" gap="30px">
        <Flex h="5vh" justifyContent="center" align="center" gap="30px">
          <Link
            to={`/`}
            as="a"
            colorscheme="blue"
            size="md"
            h="48px"
            w="200px"
            border="1px"
            boxshadow="dark-md"
          >
            Home
          </Link>
          {isLoggedIn ? <ContactsPage /> : <></>}
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          <IconButton
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

// email
// :
// "poiuyt12@g.com"
// name
// :
// "poiuyt12"
// password
// :
// "poipoipoi"
