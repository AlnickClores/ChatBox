import { useState } from "react"

const contactList = [
  {id: 0, name: "Alnick", about: "Software Engineer", email: "aelnickclores@gmail.com"},
  {id: 1, name: "Knotz", about: "Web Developer", email: "knoootz03@gmail.com"},
  {id: 2, name: "Steph", about: "Data Analyst", email: "sc30@gmail.com"},
];

export default function App() {
  const [toPerson, setToPerson] = useState(contactList[0]);

  return(
    <>
      <Contacts 
        contactlist={contactList}
        to={toPerson}
        onSelect={(contact) => setToPerson(contact)}
      />
      <ChatBox to={toPerson} key={toPerson.id} />
    </>
  )
}

const Contacts = ({ contactlist, to, onSelect }) => {
  return(
    <div>
      <h1>Contacts</h1>
      <ul>
        {contactlist.map(contact => 
          <li key={contact.id}>
            <button onClick={() => onSelect(contact)}>{contact.name}</button>
          </li>
        )}
      </ul>
      <p>{to.name} is a {to.about}.</p>
    </div>
  )
}

const ChatBox = ({ to }) => {
  const [text, setText] = useState("");
  return(
    <>
    <form onSubmit={(e) => {
        if(text){
          alert("Message Sent!");
        } else {
          alert("Please Enter a Message");
        }
        e.preventDefault();
      }}>
        <h1>Message</h1>
        <textarea 
          placeholder={"Send message to " + to.name}
          value={text}
          onChange={(e) => setText(e.target.value)}
          /> 
        <br/>
        <button type="submit">Send to <i>{to.email}</i></button>
    </form>
        <button onClick={() => setText("")}>Erase Message</button>
      </>
  )
}
