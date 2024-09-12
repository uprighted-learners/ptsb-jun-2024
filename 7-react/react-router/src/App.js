import "./App.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import AppLayout from "./layouts/AppLayout"
import PortfolioLayout from "./layouts/PortfolioLayout"

import About from "./pages/About"
import ColorPickerPage from "./pages/portfolio/ColorPickerPage"
import Contact from "./pages/Contact"
import ErrorPage from "./pages/404"
import Home from "./pages/Home"
import Pokedex from "./pages/portfolio/Pokedex"

// router will be a BrowserRouter object that will handle the urls
// while still loading the app as a Single Page Application
const router = createBrowserRouter(
  // Routes create a tree of url paths and load components (elements)
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<PortfolioLayout />}>
        <Route path="color" element={<ColorPickerPage />} />
        <Route path="pokedex" element={<Pokedex />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

function App() {
  // Router Provider attaches the router object to wherever App is mounted
  return <RouterProvider router={router} />
}

export default App
