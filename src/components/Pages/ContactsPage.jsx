import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllContacts } from 'reduxe/operations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box, Flex } from '@chakra-ui/react';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <Flex align="center" justify="center" mt={30}>
      <Box boxshadow="xl" colorscheme="teal" p={6} rounded="md" w="530px" fontSize="xl" boxShadow="dark-lg">
        <ContactForm />
        <Filter />
        <ContactList />
      </Box>
    </Flex>
  );
};
export default ContactsPage;
