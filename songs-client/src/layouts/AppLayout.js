import "./appLayout.css"
import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <>
      <header>
        <h4>songs!</h4>
        {/* TODO: add conditional content for login/logout */}
        <span>login</span>
      </header>
      <Outlet />
    </>
  )
}

export default AppLayout
