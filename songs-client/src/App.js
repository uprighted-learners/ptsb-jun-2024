import "./App.css"

import { createContext, useState } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import AppLayout from "./layouts/AppLayout"
import Search from "./pages/Search"
import Login from "./pages/Login"
import Register from "./pages/Register"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Search />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="update" />
      <Route path="add" />
    </Route>
  )
)

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}

export default App
