import React, { useState, useEffect } from "react";
import { Button, InputLabel, Input } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      userName: userName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([...messages, { userName: userName, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <img
        className="app__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/512px-Facebook_Messenger_4_Logo.svg.png"
        alt="messenger logo"
      />
      <h1>Facebook messenger</h1>

      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} message={message} userName={userName} />
        ))}
      </FlipMove>

      <form className="app__from">
        <FormControl>
          <InputLabel>Enter a message..</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            type="submit"
            variant="contained"
            color="primary"
            onClick={sendMessage}
            disabled={!input}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
    </div>
  );
}

export default App;
