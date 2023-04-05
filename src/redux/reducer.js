// import { createReducer } from '@reduxjs/toolkit';
// import {addContact, deleteContact, filterSearch , contactsSearch } from './action'

// const initialState = {
//     contacts: [
//           { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//           { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//           { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//           { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//     };

//     export const contactsReducer = createReducer(initialState, builder => {
//       builder
//         .addCase(addContact, (state, { payload }) => {state.push(payload);
//         })
//         .addCase(deleteContact, (state, { payload }) => {
//           state.contacts.filter(contact => contact.id !== payload)
//         })
//       .addCase(filterSearch, (state) => {
//         state.contacts.filter(contact =>
//           contact.name.toLowerCase().includes(state.filter.toLowerCase()))
//         })
//         .addCase(contactsSearch, (state, { payload }) => {
//           state.filter = payload;
//     });

//   });

//   //  export const contactsReducer = (state = initialState, action) => {
//   //       switch (action.type) {
            
//   //           case addContact.type :
//   //             return [ ...state, action.payload]
              
            

//   //           case deleteContact.type : {
//   //               return [state.contacts.filter(contact => contact.id !== action.payload)]
                
//   //             }
//   //             case filterSearch.type : {
//   //               return [state.contacts.filter(contact =>
//   //                 contact.name.toLowerCase().includes(state.filter.toLowerCase()))]
//   //               }

         
//   //       default:
//   //       return state;
//   //     };
//   //   }

 

//     export const getContacts = state => state.contacts;
//     export const getFilter = state => state.filter;