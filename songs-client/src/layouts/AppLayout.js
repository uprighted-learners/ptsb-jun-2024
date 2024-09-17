import "./appLayout.css"
import { NavLink, Outlet } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../App"

function AppLayout() {
  const { user } = useContext(UserContext)

  return (
    <>
      <header>
        <h4>
          {/* TODO: styles */}
          <NavLink to="/">songs!</NavLink>
        </h4>
        {user.username ? (
          // TODO: have this forget the user (doesn't actually need to be a link)
          <NavLink to="logout">logout</NavLink>
        ) : (
          <NavLink to="login">login</NavLink>
        )}
      </header>
      <Outlet />
    </>
  )
}

export default AppLayout
