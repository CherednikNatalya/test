import { useEffect,  useRef } from 'react';

import {Section} from './Section/Section'
import {Form} from './Form/Form'
import {ContactsList} from './User/ContactsList'
import {FilterByName} from './FilterByName/FilterByName'
import { useSelector } from "react-redux";

// import { contactsSearch} from '../redux/action'



  export const App =() => {
    // const [filter, setFilter] = useState('')
    // const [contacts, setContacts] = useState(()=> {
    //  return JSON.parse(localStorage.getItem('contacts')) || []})
    const contacts = useSelector(state => state.contacts);
    // const filter = useSelector(state => state.filter);
    // const dispatch = useDispatch();

     const firstRender = useRef(true);

     useEffect (()=>{
      if (firstRender.current) {
        firstRender.current = false;
        console.log('Первый рендер');
        return;
      }
      localStorage.setItem('contacts' , JSON.stringify(contacts))
    },[contacts])


    // const handelChange = e => {
    //   dispatch(contactsSearch(e.target.value));
    // };

  
    // const handleDelete = () => {
    //   dispatch(deleteContact(contacts.id));
    // };
  
    // const filterContacts = contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(filter.toLowerCase())
    // );
  
    // const filterContacts = () = {
    //   dispatch(filterContacts(contacts));
    // }

        return (
      <>
      <Section>
      <Form />
      </Section>
  
      <Section>
      <FilterByName/>
      <ContactsList 
      // contactList={filterContacts}
      /> 
      </Section>
  </>
    );
   
  }
        
   









  