import PropTypes from 'prop-types';
import { Component } from 'react';
import css from "./Filter.module.css";

export class Filter extends Component {
    render() {
        return (
            <div className={css.search}>
                <label className={css.formLabel}>
                    Find contact by name
                </label>
                <input
                    className={css.formInput}
                    placeholder="Search for..."
                    onChange={this.props.onChange} />
            </div>
        );
    }
}

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
};