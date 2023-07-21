import css from "./contactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchAllContacts } from "reduxe/operations";
import { useEffect } from "react";
import { selectContacts, selectError, selectFilter, selectIsLoading } from "reduxe/selectors";
import { Loader } from "../Loader/Loader";
import { useState } from "react";


const ContactList = () => {
  const [toDelete, setToDelete] = useState(null)
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectFilter);
  const loading = useSelector(selectIsLoading)
  const error = useSelector(selectError);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filters.toLowerCase())
    );
  };

  const visibleContacts = filteredContacts();

  return (<>
    {loading && <Loader color="#4fa94d" className={css.loading} />}
    {error && <h4>Something went wrong, try again later</h4>}
    {contacts.length > 0 ? (
      <div className="contactsContainer">
        <ul className={css.ulContainer}>
          {visibleContacts.map(({ name, id, phone }) => {
            return (
              <li key={id} className={css.liContainer}>
                {name}: {phone}
                <button
                  type="button"
                  className={css.delBtn}
                  onClick={
                    () => {
                      setToDelete(id)
                      dispatch(deleteContact(id)).then(() => {
                        setToDelete(null);
                      })
                    }}
                    >
                  {id && toDelete === id ? (
                  <Loader color="red" height= "30" width= "30" />
                ) : (
                  'Delete'
                )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>) : (<h4>No contacts</h4>)}
     
    </>
  );
};

export default ContactList;
