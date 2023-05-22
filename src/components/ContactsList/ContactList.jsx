import propTypes from 'prop-types';
import css from "./ContactList.module.css";

export const ContactList = ({ contacts, onDelete }) => {
    return (
        <ul className={css.list}>
            {contacts.map(({ id, name, number }) => (
                <li key={id} className={css.item}>
                    <p className={css.name}>
                        {name}:{number}
                    </p>
                    <button
                        className={css.btn}
                        type="button"
                        onClick={() => onDelete(id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>)
}

ContactList.propTypes = {
    contacts: propTypes.array.isRequired,
    onDelete: propTypes.func.isRequired,
}