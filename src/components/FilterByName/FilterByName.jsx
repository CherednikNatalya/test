import css from './FilterByName.module.css'
// import { PropTypes } from 'prop-types';
import { useDispatch } from "react-redux";
import {filterSearch} from "redux/action";

export const FilterByName = () => {
  const dispatch = useDispatch();

// const filterContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );


	const onChange = e => {
		const value = e.target.value.toLowerCase();
		dispatch(filterSearch(value));
	};

  return (
    <label className={css.formStyle}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.inputStyle}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // value={filter}
        onChange={onChange}
      />
    </label>
  );
};

// FilterByName.propTypes = {
//   filter: PropTypes.string.isRequired, 
//   onChange: PropTypes.func.isRequired,
// }
