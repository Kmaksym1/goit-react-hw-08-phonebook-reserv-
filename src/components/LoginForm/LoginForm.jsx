import { Field, Form, Formik } from 'formik';
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
  Checkbox,
} from '@chakra-ui/react';

// import * as yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'reduxe/auth/auth-operation';

// const schema = yup.object().shape({
//   name: yup.string().min(3).required(),
//   email: yup.string().email().required(),
//   password: yup.string().min(8).required(),
// });

const LoginForm = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const handleSubmit = (values, { resetForm }) => {
    console.log('valuesLogIn',values)
    dispatch(logIn(values))
    resetForm()
  }

  return (
    <Flex  align="center" justify="center" h="30vh">
      <Box  boxshadow='xl'colorscheme="teal"  p={6} rounded="md" w={80}>
        <Formik
          //   validationSchema={schema}
          initialValues={{
            email: '',
            password: '',
          }}
         onSubmit={handleSubmit}
         
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <VStack>
                <Text mt="10px"as="b">Welcome back!</Text>
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder="E-mail"
                    // autoComplete="off"
                    validate={value => {
                      if (value.indexOf('@') === -1) {
                        return 'Invalid email format. Please enter a valid email address.';
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors.password && touched.password}>
                  <InputGroup size="md">
                    <Field
                      pr="4.5rem"
                      as={Input}
                      id="password"
                      name="password"
                      type={show ? 'text' : 'password'}
                      variant="filled"
                      placeholder="Password"
                      // autoComplete="off"
                      validate={value => {
                        if (value.length < 6) {
                          return 'Password should be over 6 characters.';
                        }
                      }}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                              </FormControl>
                              <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorscheme="teal"
                  
                >
                  Remember me?
                </Field>
                <Button mt={4} colorscheme="teal" type="submit">
                  Log In
                </Button>
              </VStack>
            </Form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
};
export default LoginForm;
