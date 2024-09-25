import "./auth.css"
import { useState } from "react"

function Auth({ url, handleToken, errorMessage, label }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        handleToken(data)
      })
      .catch((err) => console.warn(err))
  }

  return (
    <div className="auth-inputs">
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="auth-button" onClick={handleLogin}>
        {label}
      </button>
      <p className="auth-warning">{errorMessage}</p>
    </div>
  )
}

export default Auth
