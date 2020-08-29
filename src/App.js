import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState(''); //initial input state is empty
  const [messages, setMessages] = useState([]); //objects for messages
  const [username, setUsername] = useState('');

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')  //ordering messages by it's tym
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() }))) //snapshoting the message from the database and displaying it on app
      })
  }, [])

  useEffect(() => {

    setUsername(prompt('Plaease enter your name')) // we don't have to use const or var to store here... we just use the const mentioned above and the data get stored

  }, [])
  const sendMessage = (event) => {

    event.preventDefault();//prevent from referecing and able to send message hitting enter

    db.collection('messages').add({
      message: input,  //getting meassage from database
      username: username,  //getting username from database
      timestamp: firebase.firestore.FieldValue.serverTimestamp()  //getting time of message from database
    })
    setInput(''); // after clicking on send message the input will get empty

  }

  return (
    <div className="App">
      <img className="app_image" src="data:image/jpeg;base64,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"></img>
      <h1 className="app_header">Let's Get Connected</h1>
      <h3 className="app_user">Welcome {username}</h3>

      <form className="text_input">
        <FormControl className="text_enter">
          <Input className="app_input" value={input} onChange={event => setInput(event.target.value)} placeholder="Enter your Message" />
          <IconButton className="app_button" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}><SendIcon />
          </IconButton>
        </FormControl>
      </form>


      {/* for animation effect we have used flipmove */}
      <FlipMove>
        {
          messages.map(({ id, message }) => (  //mapping (looping) messages and passing id with message

            <Message key={id} username={username} message={message} /> //used key id for detecting current message
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
