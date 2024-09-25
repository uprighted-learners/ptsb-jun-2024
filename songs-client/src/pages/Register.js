import Auth from "../components/Auth"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../App"

function Register() {
  // TODO: how do we get here?
  const [errorMessage, setErrorMessage] = useState("")
  const nav = useNavigate()

  const user = useContext(UserContext)

  const handleToken = (data) => {
    // TODO: perform login?
    if (data.message.includes("server error")) {
      // in the real world, we'll handle the messages more specifically
      // for example, detect when a username is already in use
      // (probably the endpoints should be set up for this)
      setErrorMessage("there was a server error, try again")
    } else {
      nav("/")
    }
  }

  return (
    <Auth
      url="http://localhost:4000/auth/register"
      handleToken={handleToken}
      errorMessage={errorMessage}
      label="Sign Up Now"
    />
  )
}

export default Register
