import React, { Component } from "react";
import { ContactForm } from "./ContactsForm/ContactForm";
import { ContactList } from "./ContactsList/ContactList";
import { Filter } from "./Search/Filter";
import css from "./App.module.css";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  
  handleAddContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
  };


  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };


  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };


  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const contacts = this.getContacts();
    return (
      <div className={css.form}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2 className={css.subtitle}>Contacts</h2>
        <Filter onChange={this.changeFilter} />
        <ContactList
          contacts={contacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
