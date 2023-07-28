import { Formik, Form, Field } from 'formik';
// import * as yup from 'yup';
// import css from "../ContactForm/contactForm.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'reduxe/operations';
import { selectContacts } from 'reduxe/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   phone: yup.string().min(7).max(12).required(),
// });

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log("values of Add Contact", values)

    const existingContact = contacts.find(
      contact => contact.name === values.name
    );
    if (existingContact) {
      return toast(`${values.name} is already in contacts.`);
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{ name: '', number: '' }}
        // validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form
            onSubmit={handleSubmit}
          >
            <VStack>
              <HStack>
                <Text fontSize="xl">Name</Text>
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    fontSize="xl"
                    placeholder="Contact name"
                    variant="filled"
                    
                    validate={value => {
                      if (value.length < 2) {
                        return 'Name should be over 2 characters.';
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
              </HStack>
              <HStack>
                <Text fontSize="xl">Phone</Text>
                <FormControl isInvalid={!!errors.number && touched.number}>
                  <Field
                    as={Input}
                    id="number"
                    name="number"
                    type="number"
                    fontSize="xl"
                    placeholder="Phone number"
                    variant="filled"
                    
                    
                    validate={value => {
                      if ((value.length < 9) &&(value.length<12) ) {
                        return 'Phone should be from 9 to 12 characters.';
                      }
                    }}
                  />
                  <FormErrorMessage>{errors.number}</FormErrorMessage>
                </FormControl>
              </HStack>
              <Button ml={-4} mt={4} colorscheme="teal" type="submit">
                Add Contact
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </>
  );
};
export default ContactForm;
