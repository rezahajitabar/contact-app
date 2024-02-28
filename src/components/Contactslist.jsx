
function Contactslist({contacts}) {

  return (
    <div><h3> 
      <ul>
        {contacts.map((contact) => <li>{contact.name}</li>)}
      </ul>
      </h3></div>
  
     
  )
}

export default Contactslist;