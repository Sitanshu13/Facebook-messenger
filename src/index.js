import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Message from "./Message.js";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./index.css";

function App() {
  const [input, setInput] = useState('');
  const [messages, setMesssages] = useState([]);
  const [username, setUsername] = useState('');

useEffect(() => {
  setUsername(prompt('Please enter your name'));
}, [] )

  const sendMessage = (event) => {
    event.preventDefault();
    setMesssages([...messages, {username: username, text: input}]);
    setInput("");
  };

  return (
    <div className="App">
      <h3>Welcome {username}</h3>

      <FormControl className="container">
        <InputLabel></InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          Send Message
        </Button>
      </FormControl>
      {
        messages.map((message) => (
        <Message username={username} message={message} />
      ))
      }
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
