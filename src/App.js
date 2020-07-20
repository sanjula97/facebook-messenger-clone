import React, { useState, useEffect } from "react";
import { Button, InputLabel, Input } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Message from "./Message";
import "./App.css";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    setMessages([...messages, { userName: userName, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Facebook messenger</h1>

      <form>
        <FormControl>
          <InputLabel>Enter a message..</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={sendMessage}
            disabled={!input}
          >
            Send message
          </Button>
        </FormControl>
      </form>

      {messages.map((message) => (
        <Message message={message} userName={userName} />
      ))}
    </div>
  );
}

export default App;
