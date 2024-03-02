import ContactItem from "./ContactItem";

function Contactslist({contacts,deleteHandler}) {
console.log(contacts);
  return (
    <div>
      <h3>Contact List</h3>
      {contacts.length ? ( <ul>
        {contacts.map((contact) => 
        <ContactItem key={contact.id} data={contact} deleteHandler={deleteHandler}/>
        )}
      </ul>) : <p>No contact yet!</p>}
     
      </div>
  
     
  )
}

export default Contactslist;