import React from 'react'
import { useState } from 'react';
import Contactslist from './Contactslist';
import inputs from '../contants/input';
import { v4 } from 'uuid';


function Contact() {
  const [contacts,setContacts]=useState([]);
  const [alert,setAlert]=useState("");
  const [contact,setContact]=useState({
    id: "",
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
    if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
       
        setAlert("please enter valid data!");
       return;
       
    }
      setAlert("");
      const newContact={...contact,id: v4()}
    setContacts((contacts) => ([...contacts,newContact]));
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
          {
            inputs.map((input,index) => (<input
             key={index}
             type={input.type} 
             placeholder={input.placeholder}
             name={input.name}
             value={contact[input.name]}
             onChange={changeHandler}
             />)

            )
          }
        
         <button onClick={addHandler}>Add Contact</button>
        </div>
        <div>{alert && <p>{alert}</p>}</div>
        <Contactslist contacts={contacts}/>
    </div>
  )
}

export default Contact