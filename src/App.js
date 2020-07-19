import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  console.log(messages);
  return (
    <div className="app">
      <h1>Facebook messenger</h1>

      <form>
        <input
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
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}

export default App;
