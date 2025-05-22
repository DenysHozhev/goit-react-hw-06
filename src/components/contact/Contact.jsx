import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, deleteContact }) => {
  return (
    <div className={css.container}>
      <div className={css.list}>
        <p>
          <IoMdContact /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </div>
  );
};

export default Contact;
