import { ContactForm } from '../components/ContactForm/ContactForm';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operation';
import { useEffect } from 'react';
import { ContactList } from 'components/ContactList/ContactList';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};
