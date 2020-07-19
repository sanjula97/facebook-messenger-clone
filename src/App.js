import React, { useState, useEffect } from "react";
import { Button, InputLabel, Input } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import Message from "./Message";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { userName: "Sanjula", text: "hello" },
    { userName: "Wassa", text: "hi" },
  ]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="app">
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
        <Message text={message.text} userName={message.userName} />
      ))}
    </div>
  );
}

export default App;
