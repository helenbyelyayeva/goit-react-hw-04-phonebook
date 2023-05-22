import React, { Component } from "react";
import css from "./ContactForm.module.css";
import propTypes from 'prop-types';


const INITIAL_STATE = {
    name: "",
    number: "",
};

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handelChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ ...INITIAL_STATE });
    };


    render() {
        const { name, number } = this.state;
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label className={css.formLabel}>
                    Name
                </label>
                <input
                    className={css.formInput}
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handelChange}
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
                    onChange={this.handelChange}
                    placeholder="Please enter number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
                <button className={css.btn} type="submit">Add contact</button>
            </form>
        )
    }
}

ContactForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
};