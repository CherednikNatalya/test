import { Contact } from './Contact';
import {NotFound} from '../NotFound/NotFound'
import css from './ContactsList.module.css';
// import { PropTypes } from 'prop-types';
import {  useSelector } from "react-redux";
import {getContacts} from 'redux/reducer'

export const ContactsList =() => {

  const contacts = useSelector(getContacts);
  // const filterContacts = useSelector(getFilter);
 
    return(
        <div className={css.formStyle}>
            <h2 className={css.title}>Contacts</h2>

            {contacts.length? (<ul className={css.contactsList}>
              
    {contacts.map(item => 
      <Contact key={item.id} contact={item}/>
    )}
  </ul>): (
              <NotFound/>
            )
}
        </div>
    )
  }

// ContactsList.propTypes ={
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({ id: PropTypes.string.isRequired})  
//   ),
  

// }










 