import Contact from "../contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ abonents, deleteContact }) => {
  return (
    <ul className={css.container}>
      {abonents.map((abonent) => (
        <li key={abonent.id}>
          <Contact data={abonent} deleteContact={deleteContact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
