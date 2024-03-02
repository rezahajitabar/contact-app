
import Contactslist from './Contactslist'
function ContactItem(props) {
    console.log(props);
  return (
    <li key={props.data.id}>
          <p>{props.data.name} {props.data.lastName}</p>
          <p><span>🖨</span>{props.data.email}</p>
          <p><span>☎</span>{props.data.phone}</p>
          <button>🛒</button>
           </li>
  )
}

export default ContactItem