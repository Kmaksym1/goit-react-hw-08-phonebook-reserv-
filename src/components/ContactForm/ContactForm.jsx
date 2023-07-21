import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import css from "../ContactForm/contactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "reduxe/operations";
import { selectContacts } from "reduxe/selectors";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().min(7).max(12).required(),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(contacts)
    
    const existingContact = contacts.find((contact) =>
      contact.name === values.name);
    if (existingContact) {
      return toast(`${values.name} is already in contacts.`)
    } 

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <>
    <ToastContainer />
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      <Form className={css.formContainer}>

        <div className={css.imputName}>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <Field type="text" name="name" className={css.imputString} />
          <label htmlFor="name" className="form-label">
            Number
          </label>
          <Field type="tel" name="phone" className={css.imputString} />
        </div>

        <button type="submit" className={css.addBtn}>
          Add contact
        </button>
      </Form>
      </Formik>
      </>
  );
};
