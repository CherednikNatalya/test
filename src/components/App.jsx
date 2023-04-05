import { useEffect,  useRef } from 'react';

// import {Section} from './Section/Section'
import {Form} from './Form/Form'
import {ContactsList} from './User/ContactsList'
import {FilterByName} from './FilterByName/FilterByName'
import { useSelector } from "react-redux";


  export const App =() => {
  
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    

     const firstRender = useRef(true);

     useEffect (()=>{
      if (firstRender.current) {
        firstRender.current = false;
        console.log('Первый рендер');
        return;
      }
      localStorage.setItem('contacts' , JSON.stringify(contacts))
    },[contacts])


        return (
      <>
      <Form />
      <h2>Contacts</h2>

      {filter ? <FilterByName/> : <ContactsList />  }

     
  </>
    );
   
  }
        
   









  