import "./App.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

import AppLayout from "./layouts/AppLayout"
import Search from "./pages/Search"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="/" element={<Search />} />
      <Route path="login" />
      <Route path="register" />
      <Route path="update" />
      <Route path="add" />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
