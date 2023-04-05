import css from './FilterByName.module.css'
// import { Contact } from '../User/Contact';
// import { useMemo } from 'react';
// import {NotFound} from '../NotFound/NotFound'
// import { PropTypes } from 'prop-types';
import { useDispatch } from "react-redux";
import {filterSearch} from "redux/slice";
// import {getFilter, getContacts} from 'redux/reducer'

export const FilterByName = () => {
  const dispatch = useDispatch(); 
  // const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);

// const filterContacts  = useMemo(() => {
//   return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }, [contacts, filter]);

	const onChange = e => {
		const value = e.target.value.toLowerCase();
		dispatch(filterSearch(value));
	};

  return (
    <>
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
    
    {/* filterContacts.lengh? (<ul className={css.formStyle}>
      {filterContacts.map(item => (
        <Contact key={item.id} contact={item}/>
      ))}
    </ul>) */}
  
  </>
  )
}