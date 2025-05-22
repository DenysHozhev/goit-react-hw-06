import { useState, useEffect } from "react";
import "./App.css";
import abonents from "./abonents.json";
import ContactList from "./contactList/ContactList";
import SearchBox from "./searchBox/SearchBox";
import ContactForm from "./contactForm/ContactForm";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedCont = localStorage.getItem("savedContactList");
    if (savedCont !== null) {
      return JSON.parse(savedCont);
    }
    return abonents;
  });

  useEffect(
    () => localStorage.setItem("savedContactList", JSON.stringify(contacts)),
    [contacts]
  );

  const filteredAbonent = contacts.filter((abonent) =>
    abonent.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const addNewContact = (newContacts) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContacts];
    });
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />
      <SearchBox inputValue={inputValue} setInputValue={setInputValue} />
      <ContactList abonents={filteredAbonent} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
