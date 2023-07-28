// import css from "./filter.module.css";
import { useState } from 'react';
import { filter } from '../../reduxe/filterSlice.jsx';
import { useDispatch } from 'react-redux';
import { VStack, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

const Filter = () => {
  const [query, setQuery] = useState('');

  const dispatch = useDispatch();

  const onChange = ({ target }) => {
    const query = target.value;
    setQuery(query);
    dispatch(filter(query));
  };
  
  return (
    <VStack mt={10}>
      {/* <Text>Find contacts</Text> */}
      <InputGroup>
    <InputLeftElement pointerEvents='none'>
      <SearchIcon color='gray.300' />
    </InputLeftElement>
    <Input value={query} type='tel' placeholder='Find contacts by name'  onChange={onChange} fontSize="xl"/>
  </InputGroup>
      {/* <Input value={query} placeholder='Find contacts by name' onChange={onChange} fontSize="xl"/> */}
      </VStack>
    // <div className={css.findContacts}>
    //   <p>Find contacts by name</p>
    //   <input
    //     type="text"
    //     name="filter"
    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //     title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //     required
    //     value={query}
    //     className={css.inputFindContacts}
    //     onChange={onChange}
    //   />
    // </div>
    
    
  //   <Formik
  //   initialValues={{ name: '', number: '' }}
  //   // validationSchema={schema}
  //   onSubmit={handleSubmit}
  // >
  //   {({ handleSubmit, errors, touched }) => (
  //     <Form
  //       onSubmit={handleSubmit}
  //     >
  //       <VStack>
  //         <HStack>
  //           <Text fontSize="xl">Name</Text>
  //           <FormControl isInvalid={!!errors.name && touched.name}>
  //             <Field
  //               as={Input}
  //               id="name"
  //               name="name"
  //               type="name"
  //               fontSize="xl"
  //               ml={1}
  //               placeholder="Contact name"
  //               variant="filled"
                
  //               validate={value => {
  //                 if (value.length < 2) {
  //                   return 'Name should be over 2 characters.';
  //                 }
  //               }}
  //             />
  //             <FormErrorMessage>{errors.name}</FormErrorMessage>
  //           </FormControl>
  //         </HStack>
          
          
  //       </VStack>
  //     </Form>
  //   )}
  // </Formik>
  );
};
export default Filter