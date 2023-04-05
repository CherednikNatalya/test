import { Contact } from './Contact';
import css from './ContactsList.module.css';
// import { PropTypes } from 'prop-types';
import {  useSelector } from "react-redux";
import {getContacts} from 'redux/reducer'

export const ContactsList =() => {

  const contacts = useSelector(getContacts);
 
    return(
        <div className={css.formStyle}>
            <h2 className={css.title}>Contacts</h2>
            {contacts &&(<ul className={css.contactsList}>
              
    {contacts.map(item => (
    <li key={item.id}>
      <Contact contact={item}/>
      </li>
    ))}
  </ul>)}
        </div>
    )
  }

// ContactsList.propTypes ={
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({ id: PropTypes.string.isRequired})  
//   ),
  

// }










 