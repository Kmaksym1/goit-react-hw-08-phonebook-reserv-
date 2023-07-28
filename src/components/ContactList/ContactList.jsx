import css from "./contactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchAllContacts } from "reduxe/operations";
import { useEffect } from "react";
import { selectContacts, selectError, selectFilter, selectIsLoading } from "reduxe/selectors";
import { Loader } from "../Loader/Loader";
import { useState } from "react";
import { Button, Flex, List, ListItem } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

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

  return (<Flex justifyContent={"space-around"} width="100%">
    {loading && <Loader color="#4fa94d" className={css.loading} />}
    {error && <h4>Something went wrong, try again later</h4>}
    {contacts.length > 0 ? (
      
      <List spacing={1} mt={10} width="100%" >
        {visibleContacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id} borderBottom="1px" 
            borderColor="gray.400" display="flex"
            justifyContent="space-between"
              align-items="center"
            
    paddingLeft= "6px"
    >
              {name}: {number}
              <Button
                type="button"
                _hover={{
                  textDecoration: "none"
                  
                }}
                style={{
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                  padding: "0",
                  margin:"0"
                }}
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
                  <Loader color="red" height="25" width="25" />
                ) : (
                  <DeleteIcon boxSize={5} colorscheme="teal"/>
                )}
              </Button>
            </ListItem>);
           })}
      </List>
      
    )
    
    
    : (<h4>No contacts</h4>)}
  
  </Flex>)
};

export default ContactList;

/* <div className="contactsContainer">
        <ul className={css.ulContainer}>
          {visibleContacts.map(({ name, id, number }) => {
            return (
              <li key={id} className={css.liContainer}>
                {name}: {number}
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
      </div>) : (<h4>No contacts</h4>)} */