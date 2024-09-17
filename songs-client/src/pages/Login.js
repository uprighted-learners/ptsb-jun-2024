import { useState } from "react"
import Auth from "../components/Auth"

function Login() {
  const [errorMessage, setErrorMessage] = useState("")

  const handleToken = (data) => {
    if (data.token) {
      // TODO: save token cookie
    } else {
      setErrorMessage(data.message)
    }
  }

  return (
    <Auth
      url="http://localhost:4000/auth/login"
      handleToken={handleToken}
      errorMessage={errorMessage}
    />
  )
}

export default Login
