import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { Label, AddContactForm, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operation';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    const newContact = {
      name,
      number,
    };
    const NameNornalized = name.toLowerCase();
    const IsInContacts = contacts.some(
      contact => contact.name.toLowerCase() === NameNornalized
    );
    if (IsInContacts) {
      alert(`${name} is olready in contacts`);
    } else {
      dispatch(addContact(newContact));
    }

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <AddContactForm>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add Contacts</Button>
      </AddContactForm>
    </Formik>
  );
};
