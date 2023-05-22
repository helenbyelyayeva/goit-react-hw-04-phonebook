import { useState, useEffect } from 'react';
import { ContactForm } from "./ContactsForm/ContactForm";
import { ContactList } from "./ContactsList/ContactList";
import { Filter } from "./Search/Filter";
import css from "./App.module.css";
import { nanoid } from "nanoid";


export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilters] = useState('');

  useEffect(() => {
    setContacts(JSON.parse(window.localStorage.getItem('contacts')) ?? []);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : setContacts([...contacts, contact]);
  };

  const getContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const list = getContacts();
  return (
    <div className={css.form}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <h2 className={css.subtitle}>Contacts</h2>
      <Filter value={filter} onFilterChange={setFilters} />
      <ContactList
        contacts={list}
        onDelete={deleteContact}
      />
    </div>
  );

}
