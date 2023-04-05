// import { Contact } from './Contact';
// import {NotFound} from '../NotFound/NotFound'
import css from './ContactsList.module.css';
// import { PropTypes } from 'prop-types';
import {useDispatch, useSelector } from "react-redux";
import {getContacts} from 'redux/reducer'
import {deleteContact} from 'redux/slice'

export const ContactsList =() => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // const contacts = useSelector(getContacts);
  // const filterContacts = useSelector(getFilter);
 
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };



    return(
        <div className={css.formStyle}>
            {/* <h2 className={css.title}>Contacts</h2> */}
            <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contact__list} key={id}>
          <span className={css.contact__item}>{name}: </span>
          <span className="contact__item">{number} </span>
          <button
            className={css.contacts__button}
            type="button"
            onClick={() => onDeleteContact (id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
        </div>
    )
  }

// ContactsList.propTypes ={
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({ id: PropTypes.string.isRequired})  
//   ),
  

// }










 