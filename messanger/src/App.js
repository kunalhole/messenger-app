import React, { useState } from "react"
import Button from "@mui/material/Button"
import "./App.css"

function App() {
  const [input, setInput] = useState(" ")
  const [message, setMessages] = useState([])
  console.log(input)
  console.log(message)

  const sendMessage = (event) => {
    event.preventDefault()
    //all the logic to send a message goes
    setMessages([...message, input])
    setInput(" ")
  }

  return (
    <div className="App">
      <h1>Hello Clever Progarmmers</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <Button type="submit" onClick={sendMessage}>
          Send Message
        </Button>
      </form>
      {/* To display our message array on page  */}

      {message.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  )
}

export default App
