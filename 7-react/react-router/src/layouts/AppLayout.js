import { NavLink, Outlet } from "react-router-dom"

// a "layout" is just a regular component with an Outlet in it
function AppLayout() {
  return (
    <>
      <header>
        PTSB June 2024
        <span id="links">
          {/* NavLinks are better than anchor tags 
          because they don't make a new HTTP request, 
          they just navigate within the already-loaded 
          instance of the app without refreshing*/}
          {/* The 'to' attribute must match the route path */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
        </span>
      </header>
      <main>
        {/* Outlet is where the components that are 
        loaded by the router at each path will be rendered */}
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
