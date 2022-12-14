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
  const unreadEmails=emails.filter(email=> !email.read)
  const starredEmails=emails.filter(email=> email.starred)
  const [hideRead, setHideRead]=useState(false)
  const emailtoDisplay= hideRead? unreadEmails: emails
  function toggleEmailRead (email: Emails) {
   
    const emailCopy = structuredClone(emails)

    const targetEmail =emailCopy.find(target => target.id === email.id)
    targetEmail.read= !targetEmail.read

    setEmails(emailCopy)
  }
  function toggleEmailStar (email: Emails) {
   
    const emailCopy = structuredClone(emails)

    const targetEmail =emailCopy.find(target => target.id === email.id)
    targetEmail.starred= !targetEmail.starred

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
            <span className="count">{unreadEmails.length}</span>
          
          </li>
          <li
            className="item"
          // onClick={() => {}}
          > 

          
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
            onChange={() => {
            {setHideRead(!hideRead)}
            }}
            />
          </li> 
          
        </ul>
      
      </nav>
       <main className="emails"> 
       {emailtoDisplay.map(email=>(
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
              onClick={()=>{
                toggleEmailStar (email)
              }}
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
