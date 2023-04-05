import {createSlice, nanoid } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = []

export const contacsSlice = createSlice({
name: 'contacs',
initialState: initialState,
reducer: {

addContact: {
    reducer(state, {payload}) {
    state.push(payload);
},
prepare(name,number) {
    return {
        payload: {
          id: nanoid(),
          name,
          number
        },
}
}},

deleteContact: (state, {payload}) => {
    const index = state.findIndex(contact=> contact.id === payload);
    state.splice(index, 1);
},
filterSearch : (state, {payload}) => {
    state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(state.filter.toLowerCase()))  
},
contactsSearch: (state, {payload}) => {
    state.filter = payload;
}
}
})

const persistConfig = {
    key: 'goit',
    storage,
    whitelist: ['data'],
  };

export const usersReducer = persistReducer(persistConfig, contacsSlice.reducer);


export const  {addContact, deleteContact, filterSearch , contactsSearch }= contacsSlice.actions;