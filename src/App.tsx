import Header from './components/Header'

// import initialEmails from './data/emails'
import { useState } from 'react'

import './App.css'
type Emails= {
  id: number
  sender: string
  title: string
  starred: boolean
  read: boolean
  }
  
  let  initialEmails: Emails[]= 
    [
      {
        id: 1,
        sender: `Zoom`,
        title: `Cloud Recording - Nicolas Marcora's Personal Meeting Room is now available`,
        starred: false,
        read: true
      },
      {
        id: 2,
        sender: `Zoom`,
        title: `Sean Davison has joined your Personal Meeting Room`,
        starred: false,
        read: false
      },
      {
        id: 3,
        sender: `Notion`,
        title: `1 update in Boolean`,
        starred: true,
        read: true
      },
      {
        id: 4,
        sender: `The Calendly Team`,
        title: `Use more than one calendar?`,
        starred: false,
        read: false
      },
      {
        id: 5,
        sender: `Patrick`,
        title: `Updated invitation: Coding chat with Nico`,
        starred: true,
        read: false
      }
   ]
  

function App() {
  // Use initialEmails for state
  // console.log(initialEmails)
  const [emails, setEmails]= useState(initialEmails)
  function toggleEmailRead (email: Emails) {
   
    const emailCopy = structuredClone(emails)

    const targetEmail =emailCopy.find(target => target.id === email.id)
    targetEmail.completed = !targetEmail.completed

    setEmails(emailCopy)
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
      <ul className="inbox-list">
         
          <li className= "item active"
          onClick={() => {

          }}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          
          </li>
          <li
            className="item"
          // onClick={() => {}}
          > 

          
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            // onChange={() => {}}
            />
          </li> 
          
        </ul>
      
      </nav>
       <main className="emails"> {emails.map(email=>(
        <ul className={email.read? "email read": "email unread"}>
         <li><input            
              type="checkbox"
              checked={email.read}
              onClick={()=>{
                toggleEmailRead (email)
              }

              }
            /></li>

          <li><input
          className='star-checkbox'
              type="checkbox"
              checked={email.starred}
            /></li>
           <li>{email.sender}</li>
       <li className='title' >{ email.title} </li>
      
       </ul>
        ))}
        </main> 
       
    </div>
  )
}

export default App
