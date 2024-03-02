import ContactItem from "./ContactItem";

function Contactslist({contacts}) {
console.log(contacts);
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? ( <ul>
        {contacts.map((contact) => 
        <ContactItem key={contact.id} data={contact}/>
        )}
      </ul>) : <p>No contact yet!</p>}
     
      </div>
  
     
  )
}

export default Contactslist;