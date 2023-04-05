import { nanoid } from "nanoid";

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};
export const deleteContact = id=> {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};


export const filterSearch =value=> {
  return {
    type: 'contacts/filterSearch',
     payload: value,
  };
};


// export const filterContacts  = filter =>{
//   return {
//     type: 'filter/filterContacts ',
//     payload: filter ,
//   };
// }

