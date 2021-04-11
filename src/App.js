import './App.css';
import logo from './logo.png'
import { useState,useEffect } from 'react'
import { FormControl,Input,IconButton } from '@material-ui/core'
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';


function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName,setUserName] = useState("")

  useEffect( () =>{
    setUserName(prompt("Please enter your name"))
  },[])

  useEffect( () =>{
    db.collection('messages').orderBy('timeStamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id:doc.id,data: doc.data()}))) 
    })
  },[])

  function sendMessage(event) {
    event.preventDefault();
    //all the logic to send the message go here
    db.collection('messages').add({
      message:input,
      userName:userName,
      timeStamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }

  function onChangeHandler(event){
    setInput(event.target.value);

  }

  return (
    <div className="App">
      <img style={{marginTop:'10px'}} src={logo}></img>
      <h1>Welcome {userName}</h1>
      <form className="app_form">
        <FormControl className="app_formControl">
            <Input className='app_input' placeholder="Enter a message..." value={input} onChange={event => onChangeHandler(event)} />
          <IconButton className='app_iconButton' variant='contained' color='primary' type="submit" disabled={!input} onClick={sendMessage}>
              <SendIcon />
           </IconButton>
        </FormControl>
      </form>
      
      
        <FlipMove>
          {
            messages.map(function (message){
              return <Message key={message.id} userName={userName} text={message.data}/>
            })
          }
      </FlipMove>
      
    </div>
  );
}

export default App;
