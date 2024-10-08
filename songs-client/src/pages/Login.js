import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import Auth from "../components/Auth"
import { UserContext } from "../App"

function Login() {
  const [errorMessage, setErrorMessage] = useState("")

  const { user, setUser } = useContext(UserContext)

  const handleToken = (data) => {
    if (data.token) {
      // TODO: cookies!
      const newUser = data.user
      newUser.token = data.token
      setUser(newUser)
      console.log(data)
    } else {
      setErrorMessage(data.message)
    }
  }

  return (
    <>
      <Auth
        url="http://localhost:4000/auth/login"
        handleToken={handleToken}
        errorMessage={errorMessage}
        label="Log In"
      />
      <NavLink to="/register">No account? Sign up now</NavLink>
    </>
  )
}

export default Login
