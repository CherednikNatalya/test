import { combineReducers } from "redux";

const initialState = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    };


   const contactsReducer = (state = initialState, action) => {
        switch (action.type) {
            
            case "contacts/addContact": {
              return [ ...state, action.payload]
              
            }

            case "contacts/deleteContact": {
                return [state.contacts.filter(contact => contact.id !== action.payload)]
                
              }
              case "contacts/contactsSearch": {
                return [state.contacts.filter(contact =>
                  contact.name.toLowerCase().includes(state.filter.toLowerCase()))]
                
              }

         
        default:
        return state;
      };
    }

    export const rootReducer =combineReducers ({
      contacts: contactsReducer,
    })

    export const getContacts = state => state.contacts;
    export const getId = state => state.contacts.id;