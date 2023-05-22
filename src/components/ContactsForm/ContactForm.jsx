import { useState } from 'react';
import css from "./ContactForm.module.css";
import propTypes from 'prop-types';


export function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handelChange = e => {
        const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.formLabel}>
                Name
            </label>
            <input
                className={css.formInput}
                type="text"
                name="name"
                value={name}
                onChange={handelChange}
                placeholder="Please enter name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required

            />
            <label className={css.formLabel}>
                Phone number
            </label>

            <input
                className={css.formInput}
                type="tel"
                name="number"
                value={number}
                onChange={handelChange}
                placeholder="Please enter number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={css.btn} type="submit">Add contact</button>
        </form>
    )
}

ContactForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
};