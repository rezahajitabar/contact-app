import React from 'react'
import { useState } from 'react';
import Contactslist from './Contactslist';
function Contact() {
  const [contacts,setContacts]=useState([]);
  const [contact,setContact]=useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const changeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setContact((contact)=> ({...contact,[name]:value}));
  };

  const addHandler=()=> {
    setContacts((contacts) => ([...contacts,contact]));
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",

    })
    console.log(contacts);
  }

  return (
    <div>
        <div>
         <input type="text"
          placeholder="Name"
          name="name"
           value={contact.name}
            onChange={changeHandler}/>

         <input type="text"
          placeholder="Last Name"
          name="lastName"
           value={contact.lastName}
            onChange={changeHandler}/>

         <input type="email"
          placeholder="Email"
          name="email"
           value={contact.email}
            onChange={changeHandler}/>

         <input type="number"
          placeholder="Phone"
           value={contact.phone}
           name="phone"
            onChange={changeHandler}/>

         <button onClick={addHandler}>Add Contact</button>
        </div>
        <Contactslist contacts={contacts}/>
    </div>
  )
}

export default Contact