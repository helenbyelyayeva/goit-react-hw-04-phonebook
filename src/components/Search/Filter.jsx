import PropTypes from 'prop-types';
import css from "./Filter.module.css";

export function Filter({ value, onFilterChange }) {
    return (
        <div className={css.search}>
            <label className={css.formLabel}>
                Find contact by name
            </label>
            <input
                name='filter'
                value={value}
                className={css.formInput}
                placeholder="Search for..."
                onChange={e => onFilterChange(e.target.value)} />
        </div>
    );

}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};