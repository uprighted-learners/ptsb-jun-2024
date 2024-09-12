import { NavLink, Outlet } from "react-router-dom"

function PortfolioLayout() {
  return (
    <>
      <h2>Portfolio</h2>
      <div id="portfolio-tabs">
        <NavLink to="color">Color Picker</NavLink>
        <NavLink to="pokedex">Pokedex</NavLink>
      </div>
      <div id="portfolio-window">
        <Outlet />
      </div>
    </>
  )
}

export default PortfolioLayout
