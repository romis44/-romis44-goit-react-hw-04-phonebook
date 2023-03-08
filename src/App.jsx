import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Layout from './components/Layout/Layout';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? initialContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const normalizedFilter = name.toLowerCase();

    const checkByName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedFilter
    );

    if (checkByName) {
      alert(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts(prevState => [...prevState, contact]);
    }
  };

  const filterContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const handleChange = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = filterContact();

  return (
    <Layout>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={handleChange} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Layout>
  );
}
